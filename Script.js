const Clock = document.getElementById("clock");

function clock(){
    const date = new Date;
    Clock.innerHTML = timeformat(date);
    function timeformat(date){
        let hours = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
        let amOrpm = hours >= 12 ? "Pm" : "Am";
        hours = (hours % 12);
        hours= formatzero(hours);
        min= formatzero(min);
        sec=formatzero(sec);


        return `${hours}:${min}:${sec} ${amOrpm}`;
    }
    function formatzero(time){
        time = time.toString();
        return time.length < 2 ? "0"+time : time;
    }
}

clock();
setInterval(clock,1000);