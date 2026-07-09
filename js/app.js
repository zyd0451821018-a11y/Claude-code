/**
 * 赛博灵签 - 主流程控制
 */

const App = (() => {
    let currentPage = 'input';
    let question = '';
    let userNumber = 0;
    let shakeCount = 0;
    let useCamera = false;
    let birthInfo = null;
    const REQUIRED_SHAKES = 6;

    const elements = {};

    function init() {
        cacheElements();
        bindEvents();
        showPage('input');
    }

    function cacheElements() {
        elements.inputPage = document.getElementById('input-page');
        elements.shakePage = document.getElementById('shake-page');
        elements.resultPage = document.getElementById('result-page');
        elements.questionInput = document.getElementById('question-input');
        elements.numberInput = document.getElementById('number-input');
        elements.randomBtn = document.getElementById('random-btn');
        elements.startBtn = document.getElementById('start-btn');
        elements.shakeQuestion = document.getElementById('shake-question');
        elements.shakeProgress = document.getElementById('shake-progress');
        elements.progressFill = document.getElementById('progress-fill');
        elements.progressText = document.getElementById('progress-text');
        elements.signTube = document.getElementById('sign-tube');
        elements.manualShakeBtn = document.getElementById('manual-shake-btn');
        elements.cameraStatus = document.getElementById('camera-status');
        elements.resultContainer = document.getElementById('result-container');
    }

    function bindEvents() {
        elements.randomBtn.addEventListener('click', generateRandomNumber);
        elements.startBtn.addEventListener('click', startDivination);

        elements.questionInput.addEventListener('input', validateForm);
        elements.numberInput.addEventListener('input', validateForm);

        elements.manualShakeBtn.addEventListener('click', manualShake);

        document.addEventListener('keydown', (e) => {
            if (currentPage === 'shake' && e.code === 'Space') {
                e.preventDefault();
                manualShake();
            }
        });
    }

    function validateForm() {
        const q = elements.questionInput.value.trim();
        const n = parseInt(elements.numberInput.value);
        elements.startBtn.disabled = !(q && n >= 1 && n <= 999);
    }

    function generateRandomNumber() {
        const num = Math.floor(Math.random() * 999) + 1;
        elements.numberInput.value = num;
        elements.randomBtn.classList.add('rolling');
        setTimeout(() => elements.randomBtn.classList.remove('rolling'), 500);
        validateForm();
    }

    async function startDivination() {
        question = elements.questionInput.value.trim();
        userNumber = parseInt(elements.numberInput.value);

        if (!question || !userNumber) return;

        birthInfo = readBirthInfo();

        showPage('shake');
        elements.shakeQuestion.textContent = question;

        shakeCount = 0;
        updateProgress(0);

        const mpReady = await window.HandGesture.init();
        if (mpReady) {
            const cameraReady = await window.HandGesture.startCamera();
            if (cameraReady) {
                useCamera = true;
                elements.cameraStatus.textContent = '双手握住签筒摇晃';
                elements.cameraStatus.className = 'camera-status active';
                elements.manualShakeBtn.style.display = 'none';

                window.HandGesture.onShake((count) => {
                    shakeCount = count;
                    onShakeDetected();
                });

                window.HandGesture.onHandUpdate((data) => {
                    updateTubeFromHands(data);
                });
                return;
            }
        }

        useCamera = false;
        elements.cameraStatus.textContent = '未检测到摄像头，请点击按钮摇签';
        elements.cameraStatus.className = 'camera-status fallback';
        elements.manualShakeBtn.style.display = 'block';
    }

    // 读取生辰信息（可选，供紫微斗数排盘）
    function readBirthInfo() {
        const dateEl = document.getElementById('birth-date');
        const hourEl = document.getElementById('birth-hour');
        const genderEl = document.getElementById('birth-gender');
        if (!dateEl || !dateEl.value) return null;

        const parts = dateEl.value.split('-').map(Number);
        if (parts.length !== 3 || parts.some(isNaN)) return null;

        // 时辰不确定时按午时（11-13）排盘
        const hour = hourEl && hourEl.value !== '' ? parseInt(hourEl.value) : 12;
        return {
            year: parts[0],
            month: parts[1],
            day: parts[2],
            hour,
            gender: genderEl ? genderEl.value : '男'
        };
    }

    function manualShake() {
        if (currentPage !== 'shake') return;
        shakeCount++;
        shakeTubeAnimation();
        onShakeDetected();
    }

    function onShakeDetected() {
        updateProgress(shakeCount);
        shakeTubeAnimation();

        if (shakeCount >= REQUIRED_SHAKES) {
            setTimeout(signFall, 600);
        }
    }

    function updateProgress(count) {
        const pct = Math.min(100, (count / REQUIRED_SHAKES) * 100);
        elements.progressFill.style.width = pct + '%';
        elements.progressText.textContent = `${Math.min(count, REQUIRED_SHAKES)} / ${REQUIRED_SHAKES}`;

        if (pct >= 100) {
            elements.progressFill.classList.add('complete');
        }
    }

    function shakeTubeAnimation() {
        const tube = elements.signTube;
        tube.classList.add('shaking');
        setTimeout(() => tube.classList.remove('shaking'), 400);
    }

    function updateTubeFromHands(data) {
        if (!data.detected || data.hands.length === 0) return;

        const tube = elements.signTube;
        const hand = data.hands[0];
        const offsetX = (hand.palmCenter.x - 0.5) * -30;
        const offsetY = (hand.palmCenter.y - 0.5) * 20;
        const tilt = (hand.wrist.x - hand.palmCenter.x) * 40;

        tube.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${tilt}deg)`;

        if (data.shakeIntensity > 0.3) {
            tube.classList.add('vibrating');
        } else {
            tube.classList.remove('vibrating');
        }
    }

    function signFall() {
        if (useCamera) {
            window.HandGesture.stop();
        }

        const tube = elements.signTube;
        tube.classList.add('sign-falling');

        const stickEl = document.getElementById('falling-stick');
        if (stickEl) {
            stickEl.classList.add('active');
        }

        setTimeout(() => {
            const result = window.Divination.performDivination(question, userNumber, shakeCount, birthInfo);
            showPage('result');
            window.Divination.renderResult(elements.resultContainer);
        }, 1500);
    }

    function showPage(page) {
        currentPage = page;
        elements.inputPage.classList.toggle('active', page === 'input');
        elements.shakePage.classList.toggle('active', page === 'shake');
        elements.resultPage.classList.toggle('active', page === 'result');

        if (page === 'shake') {
            const tube = elements.signTube;
            tube.classList.remove('shaking', 'vibrating', 'sign-falling');
            tube.style.transform = '';
            const stick = document.getElementById('falling-stick');
            if (stick) stick.classList.remove('active');
            elements.progressFill.classList.remove('complete');
        }
    }

    function restart() {
        if (useCamera) {
            window.HandGesture.stop();
        }
        window.HandGesture.resetShakeCount();
        shakeCount = 0;
        useCamera = false;
        showPage('input');
    }

    return { init, restart };
})();

window.App = App;

document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
