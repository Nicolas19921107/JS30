const SetHour = document.getElementById("Hour");
const SetMinute = document.getElementById("Minute");
const SetSecond = document.getElementById("Second");
console.log("測試小時", SetHour);

var time = new Date();
var HourTime = time.getHours();
var MinTime = time.getMinutes();
var SecTime = time.getSeconds();
console.log("現在時間", time);
console.log("小時", HourTime);
console.log("分", MinTime);
console.log("秒", SecTime);

var HourAngle = (HourTime * (360 / 12)) + (MinTime * (360 / (60 * 12)));
var MinAngle = MinTime * (360 / 60) + SecTime * (360 / (60 * 60));
var SecAngle = SecTime * (360 / 60);
// console.log("小時角度", HourAngle);
// console.log("分角度", MinAngle);
console.log("秒角度", SecAngle);


var NumPos = document.querySelectorAll(`.ClockNumber div`)
// console.log("位置", NumPos);
for (let i = 0; i < NumPos.length; i++) {
    NumPos[i].style.transform = `rotate(${i * 30.3}deg)`;
    NumPos[i].firstChild.style.transform = `rotate(${i * -30.3}deg)`;
}

function AddAngle() {
    HourAngle += 360 / (12 * 60 * 60);
    MinAngle += 360 / (60 * 60);
    SecAngle += 360 / 60;
    SetHour.style.transform = `rotate(${HourAngle}deg)`;
    SetMinute.style.transform = `rotate(${MinAngle}deg)`;
    SetSecond.style.transform = `rotate(${SecAngle}deg)`;
    // console.log(SecAngle);
}

setInterval(AddAngle, 1000);