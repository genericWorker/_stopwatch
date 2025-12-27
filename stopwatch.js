window.onload = function () {
  let minutes = 0;
  let seconds = 0; 
  let tens = 0; 
  
  const appendMinutes = document.getElementById("minutes");
  const appendSeconds = document.getElementById("seconds");
  const appendTens = document.getElementById("tens");
  
  const buttonStart = document.getElementById('button-start');
  const buttonStop = document.getElementById('button-stop');
  const buttonReset = document.getElementById('button-reset');
  let Interval;

  buttonStart.onclick = function() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10); // Runs every 10ms
  }
  
  buttonStop.onclick = function() {
    clearInterval(Interval);
  }

  buttonReset.onclick = function() {
    clearInterval(Interval);
    tens = 0; seconds = 0; minutes = 0;
    appendTens.innerHTML = "00";
    appendSeconds.innerHTML = "00";
    appendMinutes.innerHTML = "00";
  }

  function startTimer () {
    tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
    } 
    
    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
      tens = 0;
      appendTens.innerHTML = "00";
    }
    
    if (seconds > 59) {
      minutes++;
      appendMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
      seconds = 0;
      appendSeconds.innerHTML = "00";
    }
  }
}