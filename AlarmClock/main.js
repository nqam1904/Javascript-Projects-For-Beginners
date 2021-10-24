var timer = document.getElementById("timer");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var ampm = document.getElementById("ampm");
var setAlarm = document.getElementById("setAlarm");

var curentTime;
var alarmElement;
var activeAlarm = false;
var sound = new Audio("alarm.mp3");
sound.loop = true;
function showTime() {
  var time = new Date();
  curentTime = time.toLocaleTimeString("en-US");
  timer.textContent = curentTime;
  setTimeout(showTime, 1000);
  if (curentTime === alarmElement) {
    sound.play();
  }
}
showTime();
function addHours(id) {
  var select = id;
  var min = 12;
  for (i = 0; i <= min; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "" + i : i);
  }
}
function addMinSec(id) {
  var select = id;
  var min = 59;
  for (i = 0; i <= min; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i);
  }
}
addHours(hours);
addMinSec(seconds);
addMinSec(minutes);

setAlarm.onclick = () => {
  if (!activeAlarm) {
    hours.disabled = true;
    minutes.disabled = true;
    seconds.disabled = true;
    ampm.disabled = true;

    alarmElement =
      hours.value +
      ":" +
      minutes.value +
      ":" +
      seconds.value +
      " " +
      ampm.value;
    setAlarm.textContent = "Clear Alarm";
    activeAlarm = true;
  } else {
    setAlarm.textContent = "Set Alarm";
    activeAlarm = false;
    hours.disabled = false;
    minutes.disabled = false;
    seconds.disabled = false;
    ampm.disabled = false;
    sound.pause();
  }
};
