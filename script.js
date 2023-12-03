
function myFunction() {
  let hours = parseInt(document.getElementById("hours").value);
  let minutes = parseInt(document.getElementById("minutes").value);
  let seconds = parseInt(document.getElementById("seconds").value);
  // alert(hours)
  // alert(typeof hours)
  // alert(isNaN(hours))
  if(isNaN(hours) || isNaN(minutes) || isNaN(seconds) || hours < 0 || minutes < 0 || seconds < 0) {
    alert("Please enter valid non-negative numbers for hours, minutes, and seconds.");
    return
  }
  var totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);

  startTimer(totalSeconds);
}


// function startTimer(seconds) {
//   var parentDiv =  document.getElementById("times");
//   var timerContainer = document.createElement("div");
//   timerContainer.className = "addtimer newtimer";
//   parentDiv.appendChild(timerContainer);


// }


function startTimer(seconds) {
  var timerContainer = document.createElement("div");
  timerContainer.className = "addtimer newtimer";
  document.getElementById("times").appendChild(timerContainer);

  // Create timer display
  var timerDisplay = document.createElement("div");

  // Create delete button
  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = function() {
    // Remove the timer container
    document.body.removeChild(timerContainer);
  };

  // Append timer display and delete button to the timer container
  var timeLeft = document.createElement("h3")
  timeLeft.textContent = "Time Left :"
  timerContainer.appendChild(timeLeft);
  timerContainer.appendChild(timerDisplay);
  timerContainer.appendChild(deleteButton);

  // Update the timer every second
  var timerInterval = setInterval(function() {
    seconds--;

    // Calculate hours, minutes, and remaining seconds
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds % 3600) / 60);
    var remainingSeconds = seconds % 60;

    // Update the timer display
    timerDisplay.innerHTML = `
      <h4>${hours}</h4>
      <p>:</p>
      <h4>${minutes}</h4>
      <p>:</p>
      <h4>${remainingSeconds}</h4>
    `;

    // Check if the timer has reached zero
    if (seconds <= 0) {
      clearInterval(timerInterval); // Stop the timer
      timerDisplay.textContent = "Time is Up!";
      timerContainer.className="time-completed"
    }

    // Show the delete button while the timer is running
  }, 1000); // Update every 1000 milliseconds (1 second)

}
