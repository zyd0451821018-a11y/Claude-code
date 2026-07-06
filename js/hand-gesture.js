/**
 * MediaPipe 手部识别与摇晃检测
 * 不显示摄像头画面，只用手部数据驱动签筒
 */

const HandGesture = (() => {
    let handLandmarker = null;
    let video = null;
    let animationId = null;
    let isRunning = false;
    let onShakeCallback = null;
    let onHandUpdateCallback = null;
    let onReadyCallback = null;

    const shakeHistory = [];
    const SHAKE_WINDOW = 500;
    const SHAKE_THRESHOLD = 0.035;
    let lastWristPositions = [];
    let shakeCount = 0;
    let lastShakeTime = 0;

    async function init() {
        try {
            const { HandLandmarker, FilesetResolver } = await import(
                'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.18/vision_bundle.mjs'
            );

            const wasmFiles = await FilesetResolver.forVisionTasks(
                'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.18/wasm'
            );

            handLandmarker = await HandLandmarker.createFromOptions(wasmFiles, {
                baseOptions: {
                    modelAssetPath: 'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task',
                    delegate: 'GPU'
                },
                runningMode: 'VIDEO',
                numHands: 2,
                minHandDetectionConfidence: 0.5,
                minHandPresenceConfidence: 0.5,
                minTrackingConfidence: 0.5
            });

            return true;
        } catch (err) {
            console.warn('MediaPipe init failed:', err);
            return false;
        }
    }

    async function startCamera() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 480 } }
            });

            video = document.createElement('video');
            video.srcObject = stream;
            video.setAttribute('playsinline', '');
            video.style.display = 'none';
            document.body.appendChild(video);
            await video.play();

            isRunning = true;
            shakeCount = 0;
            lastWristPositions = [];
            shakeHistory.length = 0;

            if (onReadyCallback) onReadyCallback();
            detect();
            return true;
        } catch (err) {
            console.warn('Camera access denied:', err);
            return false;
        }
    }

    function detect() {
        if (!isRunning || !handLandmarker || !video) return;

        if (video.readyState >= 2) {
            const result = handLandmarker.detectForVideo(video, performance.now());
            processResult(result);
        }

        animationId = requestAnimationFrame(detect);
    }

    function processResult(result) {
        if (!result || !result.landmarks || result.landmarks.length === 0) {
            if (onHandUpdateCallback) {
                onHandUpdateCallback({ detected: false, hands: [] });
            }
            return;
        }

        const hands = result.landmarks.map((landmarks, idx) => {
            const wrist = landmarks[0];
            const indexTip = landmarks[8];
            const middleTip = landmarks[12];
            const palmCenter = {
                x: (landmarks[0].x + landmarks[5].x + landmarks[17].x) / 3,
                y: (landmarks[0].y + landmarks[5].y + landmarks[17].y) / 3,
                z: (landmarks[0].z + landmarks[5].z + landmarks[17].z) / 3
            };

            return {
                wrist,
                palmCenter,
                indexTip,
                middleTip,
                landmarks,
                handedness: result.handednesses?.[idx]?.[0]?.categoryName || 'Unknown'
            };
        });

        detectShake(hands);

        if (onHandUpdateCallback) {
            onHandUpdateCallback({
                detected: true,
                hands,
                shakeCount,
                shakeIntensity: getShakeIntensity()
            });
        }
    }

    function detectShake(hands) {
        const now = performance.now();

        const avgWrist = {
            x: hands.reduce((s, h) => s + h.wrist.x, 0) / hands.length,
            y: hands.reduce((s, h) => s + h.wrist.y, 0) / hands.length
        };

        lastWristPositions.push({ ...avgWrist, time: now });

        while (lastWristPositions.length > 0 && now - lastWristPositions[0].time > SHAKE_WINDOW) {
            lastWristPositions.shift();
        }

        if (lastWristPositions.length < 3) return;

        let totalDelta = 0;
        for (let i = 1; i < lastWristPositions.length; i++) {
            const dx = lastWristPositions[i].x - lastWristPositions[i - 1].x;
            const dy = lastWristPositions[i].y - lastWristPositions[i - 1].y;
            totalDelta += Math.sqrt(dx * dx + dy * dy);
        }

        const avgDelta = totalDelta / lastWristPositions.length;

        if (avgDelta > SHAKE_THRESHOLD && now - lastShakeTime > 800) {
            shakeCount++;
            lastShakeTime = now;
            if (onShakeCallback) onShakeCallback(shakeCount);
        }

        shakeHistory.push({ delta: avgDelta, time: now });
        while (shakeHistory.length > 0 && now - shakeHistory[0].time > 2000) {
            shakeHistory.shift();
        }
    }

    function getShakeIntensity() {
        if (shakeHistory.length === 0) return 0;
        const avg = shakeHistory.reduce((s, h) => s + h.delta, 0) / shakeHistory.length;
        return Math.min(1, avg / (SHAKE_THRESHOLD * 2));
    }

    function stop() {
        isRunning = false;
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
        if (video && video.srcObject) {
            video.srcObject.getTracks().forEach(t => t.stop());
            video.remove();
            video = null;
        }
    }

    function onShake(cb) { onShakeCallback = cb; }
    function onHandUpdate(cb) { onHandUpdateCallback = cb; }
    function onReady(cb) { onReadyCallback = cb; }
    function getShakeCount() { return shakeCount; }
    function resetShakeCount() { shakeCount = 0; lastWristPositions = []; shakeHistory.length = 0; }

    return {
        init, startCamera, stop,
        onShake, onHandUpdate, onReady,
        getShakeCount, resetShakeCount, getShakeIntensity
    };
})();

window.HandGesture = HandGesture;
