document.addEventListener('DOMContentLoaded', function() {
    var timeDisplay = document.getElementById('timeDisplay');
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();

    timeDisplay.textContent = "The time is " + minutes + " minutes after " + hours + " hours.";
});