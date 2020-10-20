const NewYear = new Date("1 Jan 2021");

const days_html = document.getElementById("days")
const hour_html = document.getElementById("hour")
const mins_html = document.getElementById("mins")
const sec_html = document.getElementById("sec")

function HowManyTime(){
    const today = new Date();
    const NewYearsDay = new Date(NewYear);
    const totalTime = (NewYearsDay - today) / 1000;
    const days = Math.floor(totalTime / 3600 / 24);
    const hours = Math.floor(totalTime / 3600) % 24;
    const mins = Math.floor (totalTime / 60) % 60;
    const sec = Math.floor (totalTime % 60);

    days_html.innerHTML = days
    hour_html.innerHTML = formatTime(hours)
    mins_html.innerHTML = formatTime(mins)
    sec_html.innerHTML = formatTime(sec)
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

HowManyTime()

setInterval(HowManyTime, 1000)