const Clock = document.getElementById("clock");

function clock()
{
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
        hours = (hours % 12) || 12;
        return `${hours}:${min}:${sec} ${amOrpm}`;
    }
    function formatzero(time){
        time = time.toString();
        return time.length < 2 ? "0"+time : time;
    }
};
clock();
setInterval(clock,1000);
//------------------------------------------------------------------------------------------

const playertext = document.querySelector("#playertext");
const bottext = document.querySelector("#bottext");
const resulttext = document.querySelector("#resulttext");
const choicebtn = document.querySelectorAll(".choicebtn")
let player;
let bot;
let result;

choicebtn.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    botturn(); 
    playertext.textContent = `Player: ${player}`;
    bottext.textContent = `Bot: ${bot}`;
    resulttext.textContent = Winner();
}));

function botturn(){
    const randnum = Math.floor(Math.random() * 3) + 1;
    switch(randnum){
        case 1:
            bot = "Rock";
            break;
        case 2:
            bot = "Paper";
            break;
        case 3:
            bot = "Secroirs";
            break;
    }
}
function Winner()
{
    if (bot == player){
        return "Draw";
    }
    else if (bot == "Rock"){
        return (player == "Paper") ? "You Won" : "You Lose";
    }
    else if (bot == "Paper"){
        return (player == "Secroirs") ? "You Won" : "You Lose";
    }
    else if (bot == "Secroirs"){
        return (player == "Rock") ? "You Won" : "You Lose";
    }

}