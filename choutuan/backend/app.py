# ============================================================
# 丑团 · backend/app.py —— 轻后台（FastAPI + SQLite）
#
# 能力：
#   GET  /health                 健康检查
#   GET  /api/catalog            商品覆盖项（前端启动时拉取并套用，失败自动回退内置数据）
#   POST /api/track              匿名埋点（pv / order）
#   POST /api/admin/login        管理员登录（ADMIN_PASSWORD 环境变量，默认 choutuan123）
#   GET  /api/admin/overrides    全部覆盖项（需登录）
#   PUT  /api/admin/override     写入/更新单个商品覆盖（需登录）
#   DELETE /api/admin/override/{pid}  重置单个商品（需登录）
#   GET  /api/admin/stats        看板统计（需登录）
#   GET  /admin                  管理后台页面
#   /                            托管前端静态站（同源）
#
# 数据：SQLite（/app/db/choutuan.db，走 docker volume），启动自动建表。
# ============================================================

import os
import secrets
import sqlite3
import time
from contextlib import closing

from fastapi import FastAPI, Header, HTTPException, Request
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

BASE = os.path.dirname(os.path.abspath(__file__))
SITE_DIR = os.environ.get("SITE_DIR", os.path.join(BASE, ".."))
DB_DIR = os.environ.get("DB_DIR", os.path.join(BASE, "db"))
DB_PATH = os.path.join(DB_DIR, "choutuan.db")
ADMIN_PASSWORD = os.environ.get("ADMIN_PASSWORD", "choutuan123")

os.makedirs(DB_DIR, exist_ok=True)

app = FastAPI(title="choutuan-admin", docs_url=None, redoc_url=None)

# 内存会话（容器重启后需重新登录，够用）
_sessions: set[str] = set()


def db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    with closing(db()) as conn:
        conn.executescript(
            """
            CREATE TABLE IF NOT EXISTS overrides (
                pid        TEXT PRIMARY KEY,
                name       TEXT,
                price      REAL,
                orig_price REAL,
                soldout    INTEGER DEFAULT 0,
                updated_at INTEGER
            );
            CREATE TABLE IF NOT EXISTS events (
                id     INTEGER PRIMARY KEY AUTOINCREMENT,
                type   TEXT NOT NULL,
                amount REAL,
                ts     INTEGER NOT NULL,
                day    TEXT NOT NULL
            );
            CREATE INDEX IF NOT EXISTS idx_events_day ON events(day, type);
            """
        )
        conn.commit()


init_db()


def require_auth(authorization: str | None):
    token = (authorization or "").removeprefix("Bearer ").strip()
    if not token or token not in _sessions:
        raise HTTPException(status_code=401, detail="未登录或登录已过期")


def today() -> str:
    return time.strftime("%Y-%m-%d", time.localtime())


# ---------- 公开接口 ----------

@app.get("/health")
def health():
    return {"status": "ok", "app": "choutuan", "backend": True}


@app.get("/api/catalog")
def catalog():
    """前端启动时拉取：商品覆盖项列表。"""
    with closing(db()) as conn:
        rows = conn.execute("SELECT * FROM overrides").fetchall()
    return {
        "overrides": [
            {
                "pid": r["pid"],
                "name": r["name"],
                "price": r["price"],
                "origPrice": r["orig_price"],
                "soldout": bool(r["soldout"]),
            }
            for r in rows
        ]
    }


class TrackIn(BaseModel):
    type: str
    amount: float | None = None


@app.post("/api/track")
def track(body: TrackIn):
    if body.type not in ("pv", "order"):
        raise HTTPException(status_code=400, detail="未知事件类型")
    with closing(db()) as conn:
        conn.execute(
            "INSERT INTO events(type, amount, ts, day) VALUES(?,?,?,?)",
            (body.type, body.amount, int(time.time()), today()),
        )
        conn.commit()
    return {"ok": True}


# ---------- 管理接口 ----------

class LoginIn(BaseModel):
    password: str


@app.post("/api/admin/login")
def login(body: LoginIn):
    if not secrets.compare_digest(body.password, ADMIN_PASSWORD):
        raise HTTPException(status_code=401, detail="密码不对")
    token = secrets.token_urlsafe(24)
    _sessions.add(token)
    return {"token": token}


@app.get("/api/admin/overrides")
def admin_overrides(authorization: str | None = Header(default=None)):
    require_auth(authorization)
    return catalog()


class OverrideIn(BaseModel):
    pid: str
    name: str | None = None
    price: float | None = None
    origPrice: float | None = None
    soldout: bool = False


@app.put("/api/admin/override")
def put_override(body: OverrideIn, authorization: str | None = Header(default=None)):
    require_auth(authorization)
    if body.price is not None and body.price < 0:
        raise HTTPException(status_code=400, detail="价格不能为负")
    with closing(db()) as conn:
        conn.execute(
            """
            INSERT INTO overrides(pid, name, price, orig_price, soldout, updated_at)
            VALUES(?,?,?,?,?,?)
            ON CONFLICT(pid) DO UPDATE SET
              name=excluded.name, price=excluded.price,
              orig_price=excluded.orig_price, soldout=excluded.soldout,
              updated_at=excluded.updated_at
            """,
            (body.pid, body.name, body.price, body.origPrice,
             1 if body.soldout else 0, int(time.time())),
        )
        conn.commit()
    return {"ok": True}


@app.delete("/api/admin/override/{pid}")
def delete_override(pid: str, authorization: str | None = Header(default=None)):
    require_auth(authorization)
    with closing(db()) as conn:
        conn.execute("DELETE FROM overrides WHERE pid=?", (pid,))
        conn.commit()
    return {"ok": True}


@app.get("/api/admin/stats")
def stats(authorization: str | None = Header(default=None)):
    require_auth(authorization)
    with closing(db()) as conn:
        total_pv = conn.execute("SELECT COUNT(*) c FROM events WHERE type='pv'").fetchone()["c"]
        total_order = conn.execute("SELECT COUNT(*) c FROM events WHERE type='order'").fetchone()["c"]
        total_amount = conn.execute(
            "SELECT COALESCE(SUM(amount),0) s FROM events WHERE type='order'"
        ).fetchone()["s"]
        t = today()
        today_pv = conn.execute(
            "SELECT COUNT(*) c FROM events WHERE type='pv' AND day=?", (t,)
        ).fetchone()["c"]
        today_order = conn.execute(
            "SELECT COUNT(*) c FROM events WHERE type='order' AND day=?", (t,)
        ).fetchone()["c"]
        last7 = conn.execute(
            """
            SELECT day,
                   SUM(CASE WHEN type='pv' THEN 1 ELSE 0 END) pv,
                   SUM(CASE WHEN type='order' THEN 1 ELSE 0 END) orders
            FROM events
            GROUP BY day ORDER BY day DESC LIMIT 7
            """
        ).fetchall()
        overrides_count = conn.execute("SELECT COUNT(*) c FROM overrides").fetchone()["c"]
    return {
        "totalPv": total_pv,
        "totalOrder": total_order,
        "totalAmount": round(total_amount, 2),
        "todayPv": today_pv,
        "todayOrder": today_order,
        "overrides": overrides_count,
        "last7": [dict(r) for r in reversed(last7)],
    }


# ---------- 页面托管 ----------

@app.get("/admin")
def admin_page():
    return FileResponse(os.path.join(SITE_DIR, "admin.html"))


@app.exception_handler(404)
async def not_found(request: Request, exc):
    # API 404 返回 JSON；其余路径回退首页（hash 路由）
    if request.url.path.startswith("/api/"):
        return JSONResponse({"detail": "not found"}, status_code=404)
    return FileResponse(os.path.join(SITE_DIR, "index.html"))


app.mount("/", StaticFiles(directory=SITE_DIR, html=True), name="site")
