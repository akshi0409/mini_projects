var clock = document.getElementById('clock');
var hexcol = document.getElementById('hexcolor')
showtime();


function showtime() {
    var currtime = new Date();
    var hours = currtime.getHours();
    var minutes = currtime.getMinutes();
    var seconds = currtime.getSeconds();
    var meridian = 'AM';
    if (hours > 12) {
        meridian = 'PM';
    }
    if (hours > 12) {
        hours = hours - 12;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    var clockstr = hours + ":" + minutes + ":" + seconds + " " + meridian;
    var hexclr = '#' + hours + minutes + seconds;
    clock.textContent = clockstr;
    document.body.style.backgroundColor = hexclr;
}
setInterval(showtime, 1000);
var alarm = document.getElementById('partyTimeButton');
alarm.addEventListener('click', alarmOn);
var audio = new Audio('alarm.mp3');

function ringbell() {
    audio.play();
}
var c1 = 0;
var c2 = 0;
var c3 = 0;

function setAlarm() {
    var wakeuptime = document.getElementById('wakeUpTimeSelector');
    console.log(wakeuptime.value);
    var waketime = wakeuptime.value;
    var currtime = new Date();
    var hours = currtime.getHours();

    console.log(hours);
    if ((waketime == hours) && (c1 === 0)) {
        c1++;
        ringbell();
    }
    var lunchtime = document.getElementById('lunchTimeSelector');
    console.log(lunchtime.value);
    var luntime = lunchtime.value;
    var currtime = new Date();
    var hours = currtime.getHours();
    if ((luntime == hours) && (c2 === 0)) {
        ringbell();
        c2 = 1;
    }
    var naptime = document.getElementById('napTimeSelector');
    console.log(naptime.value);
    var napptime = naptime.value;
    var currtime = new Date();
    var hours = currtime.getHours();

    console.log(napptime);
    if ((napptime == hours) && (c3 === 0)) {
        ringbell();
        c3 = 1;
    }
}

function alarmOn() {

    setInterval(setAlarm, 60000);
}