window.onload = function () {
  // 1. Existing Time variables + New state tracking
  let minutes = 0;
  let seconds = 0; 
  let tens = 0; 
  let Interval;
  let isCountingDown = false; // Prepared for timer mode

  // 2. Updated DOM Selectors
  const appendMinutes = document.getElementById("minutes");
  const appendSeconds = document.getElementById("seconds");
  const appendTens = document.getElementById("tens");
  
  // New selectors (Add these to your HTML next)
  const messageArea = document.getElementById("message");
  const alarm = document.getElementById("alarm-sound");

  const btnStart = document.getElementById('button-start');
  const btnStop = document.getElementById('button-stop');
  const btnReset = document.getElementById('button-reset');
  const btnSet = document.getElementById('button-set'); // New button

  // 3. Refactored Button Logic
  btnStart.onclick = function() {
    clearInterval(Interval);
    // Mode Detection: If values are > 0, we will count down.
    isCountingDown = (minutes > 0 || seconds > 0 || tens > 0);
    Interval = setInterval(operateTimer, 10); 
  }
  
  btnStop.onclick = function() {
    clearInterval(Interval);
  }

  btnReset.onclick = function() {
    clearInterval(Interval);
    tens = 0; seconds = 0; minutes = 0;
    updateDisplay(); // Using the new helper function
    if(messageArea) messageArea.innerHTML = ""; // Prepare for messages
  }

  // 4. The Core Logic (Renamed to operateTimer)
  function operateTimer () {
    tens++; 
    
    if (tens > 99) {
      seconds++;
      tens = 0;
    }
    
    if (seconds > 59) {
      minutes++;
      seconds = 0;
    }
    updateDisplay();
  }

  // 5. NEW HELPER FUNCTION (Crucial for the upgrade)
  function updateDisplay() {
    appendTens.innerHTML = tens < 10 ? "0" + tens : tens;
    appendSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
    appendMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
  }
}