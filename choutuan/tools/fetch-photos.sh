#!/bin/bash
# ============================================================
# 丑团 · fetch-photos.sh —— 真实产品照片素材获取
# 通过 Go module proxy（proxy.golang.org 可镜像任意公开 GitHub 仓库）
# 拉取以下开源模板/图库仓库中的真实食物照片：
#   - github.com/surhud004/Foodish        (MIT，foodish-api.com 图库)
#   - github.com/codewithsadee/grilli     (MIT，餐厅模板)
#   - github.com/codewithsadee/foodie     (MIT，快餐模板)
#   - github.com/themewagon/feane         (CC BY 3.0，餐厅模板)
#   - github.com/themewagon/feliciano     (CC BY 3.0，咖啡馆模板)
#   - github.com/gethugothemes/restaurant-hugo (MIT，Hugo 餐厅主题)
# 用法：./fetch-photos.sh <输出目录>；然后 node prepare-photos.js <输出目录>/ex
# ============================================================
set -euo pipefail
OUT="${1:-./photo-src}"
mkdir -p "$OUT/ex"
cd "$OUT"

fetch() { # fetch <module-path-escaped> <alias>
  local m="$1" alias="$2"
  local v
  v=$(curl -sS "https://proxy.golang.org/$m/@latest" | node -e "let d='';process.stdin.on('data',c=>d+=c).on('end',()=>console.log(JSON.parse(d).Version))")
  echo "fetch $alias @ $v"
  curl -sSL -o "$alias.zip" "https://proxy.golang.org/$m/@v/$v.zip"
  python3 - "$alias" <<'EOF'
import zipfile, os, sys
alias = sys.argv[1]
z = zipfile.ZipFile(alias + '.zip')
n = 0
for i in z.infolist():
    if i.filename.lower().endswith(('.jpg', '.jpeg', '.png')) and i.file_size > 8000:
        rel = i.filename.split('/', 1)[1] if '/' in i.filename else i.filename
        rel = rel.split('/', 1)[1] if '@' in rel.split('/')[0] else rel
        with open(os.path.join('ex', alias + '__' + rel.replace('/', '_')), 'wb') as fh:
            fh.write(z.read(i.filename))
        n += 1
print(alias, n, 'images')
EOF
}

fetch 'github.com/surhud004/!foodish' foodish
fetch 'github.com/codewithsadee/grilli' grilli
fetch 'github.com/codewithsadee/foodie' foodie
fetch 'github.com/themewagon/feane' feane
fetch 'github.com/themewagon/feliciano' feliciano
fetch 'github.com/gethugothemes/restaurant-hugo' restaurant-hugo
echo "done → $OUT/ex"
