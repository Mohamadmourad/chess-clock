let seconds = 0;
let minutes = 3;
let clickCount = 0;
let interval = setInterval(clock,1050);

document.getElementById('button').onclick = () => {
    interval;
}


function clock(){
    clickCount++;
    if(clickCount > 1){
        seconds--;
    }
    document.getElementById('second').innerHTML = seconds.toString().padStart(2, '0');
    document.getElementById('minute').innerHTML = minutes;
    if(seconds == 0){
        seconds = 60;
        minutes--; 
    }
    if(minutes<0){
        clearInterval(interval);
    }
}