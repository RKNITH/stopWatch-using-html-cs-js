// Get the timer display and buttons
let timer = document.getElementById('timer');
let startButton = document.getElementById('red');
let stopButton = document.getElementById('green');
let resetButton = document.getElementById('blue');

// Initialize variables for time
let msec = 0;
let secs = 0;
let mins = 0;
let timerId = null;

// Add click event listeners for buttons
startButton.addEventListener('click', function () {
    if (timerId === null) {
        timerId = setInterval(startTimer, 10);
    }
});

stopButton.addEventListener('click', function () {
    clearInterval(timerId);
    timerId = null; // Reset the timer ID
});

resetButton.addEventListener('click', function () {
    clearInterval(timerId);
    timerId = null; // Reset the timer ID
    msec = 0;
    secs = 0;
    mins = 0;
    updateTimerDisplay();
});

// Function to update the timer display
function updateTimerDisplay() {
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
    timer.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}

// Function to start the timer
function startTimer() {
    msec++;
    if (msec === 100) {
        msec = 0;
        secs++;
        if (secs === 60) {
            secs = 0;
            mins++;
        }
    }
    updateTimerDisplay();
}

// Initial display
updateTimerDisplay();
