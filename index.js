const SecondsEl = document.getElementById("seconds")
const MinutesEl = document.getElementById("Minutes")
const HoursEl = document.getElementById("hours")



function Time() {

    const Time = new Date(); 
    const sec = Time.getSeconds();
    if (sec < 10) {
        const crtSec = "0" + sec;
        SecondsEl.innerText = crtSec
    }
    else {
        SecondsEl.innerText = sec;
    }
    const minus = Time.getMinutes();
    MinutesEl.innerHTML = minus + "<p class='inline'>:</p>";

    const hrs = Time.getHours();
    if (hrs > 12) {
        const CrtTime = hrs - 12;
        HoursEl.innerHTML = CrtTime + "<p class='inline'> :</p>";
         if(CrtTime < 10){
           HoursEl.innerHTML = "0" + CrtTime;
        }
    }
    else {
        HoursEl.innerHTML = "0" + hrs + "<p class='inline'> :</p>";
    }
}
setInterval(Time, 1000);
Time();




    //For Day's

const MondayEl    = document.getElementById("Monday")
const TuesdayEl   = document.getElementById("Tuesday")
const WednesdayEl = document.getElementById("Wednesday")
const ThrusdayEl  = document.getElementById("Thrusday")
const FridayEl    = document.getElementById("Friday")
const SaturdaydEl = document.getElementById("Saturday")
const SundayEl    = document.getElementById("Sunday")


let Days = new Date().getDay();
switch (Days) {
    case 1:
        MondayEl.style.setProperty('opacity','1');
        break;

    case 2:
        ThrusdayEl.style.setProperty('opacity',1);
        break;

    case 3:
        WednesdayEl.style.setProperty('opacity','1') // works
        break;

    case 4:
        ThrusdayEl.style.setProperty('opacity','1')
        break;

    case 5:
        FridayEl.style.setProperty('opacity','1')
        break;

    case 6:
        SaturdaydEl.style.setProperty('opacity','1')
        break;

    case 7:
        SundayEl.style.setProperty('opacity','1')
        break;
}


















