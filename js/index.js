    let countdown;
    let timerDisplay = document.getElementById('timer');

    
    function startTimer() {
      clearInterval(countdown);

      let duration = parseInt(25*60, 10);
      if (isNaN(duration) || duration <= 0) {
        alert('Please enter a valid positive number for the duration.');
        return;
      }

      let endTime = Date.now() + (duration * 1000);

      function updateTimer() {
        let remainingTime = Math.max(0, endTime - Date.now());
        let minutes = Math.floor(remainingTime / (1000 * 60));
        let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        timerDisplay.textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;

        if (remainingTime === 0) {
          clearInterval(countdown);
          alert('Timer finished!');
        }
      }

      countdown = setInterval(updateTimer, 1000);
      updateTimer(); // Initial call to display timer immediately
    }

    function formatTime(time) {
      return time < 10 ? `0${time}` : time;
    }