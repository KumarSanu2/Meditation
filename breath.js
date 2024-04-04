let breathingInterval;
let breaths = ['Inhale', 'Hold', 'Exhale', 'Hold'];
let breathIndex = 0;

function startBreathingExercise() {
    breathingInterval = setInterval(() => {
        document.getElementById('breath-display').innerText = breaths[breathIndex];
        document.querySelectorAll('.breath-phase').forEach(svg => svg.style.display = 'none');
        document.getElementById(getBreathPhaseId(breathIndex)).style.display = 'block';
        breathIndex = (breathIndex + 1) % breaths.length;
    }, 2000);
}

function stopBreathingExercise() {
    clearInterval(breathingInterval);
    document.getElementById('breath-display').innerText = 'Take a deep breath...';
    document.querySelectorAll('.breath-phase').forEach(svg => svg.style.display = 'none');
}

function startMeditation() {
    document.getElementById('meditation-audio').play();
}

function stopMeditation() {
    document.getElementById('meditation-audio').pause();
    document.getElementById('meditation-audio').currentTime = 0;
}

function getBreathPhaseId(index) {
    switch(index) {
        case 0:
            return 'inhale';
        case 1:
            return 'hold1';
        case 2:
            return 'exhale';
        case 3:
            return 'hold2';
    }
}
