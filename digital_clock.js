function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    let meridiem;
    if(hours>=12){
        meridiem = "PM";
    }else{
        meridiem = "AM";
    }
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const time = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = time;
}

updateClock();
setInterval(updateClock,1000);