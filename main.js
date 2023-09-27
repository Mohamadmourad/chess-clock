let seconds0 = 0;
let minutes0 = 3;
let seconds1 = 0;
let minutes1 = 3;
let seconds = 0;
let minutes = 3;
let timeArray = [3,0]//minutes , seconds;

let clickCount0 = 0;
let clickCount1 = 0;
let interval0 = '';
let interval1 = '';
let turnCount = 0;
let turn = 0;
let pauseCounter = 0;

let secondNow = 0;
let minuteNow = 0;
let intervalNow = 0;



document.getElementById('button1').onclick = () => {
    seconds0 += timeArray[1];
    if(seconds0  >=60){
        seconds0  = 0;
    }
    document.getElementById('second0').innerHTML =  seconds0.toString().padStart(2, '0');
    interval0 = setInterval(clock,1000);
    clearInterval(interval1);
    whichTurn();
    document.getElementById('button1').disabled = true;
    document.getElementById('button2').disabled = false;
    clickSound();
}

document.getElementById('button2').onclick = () => {
    seconds1 += timeArray[1];
    if(seconds1  >=60){
        seconds1  = 1;
    }
    document.getElementById('second1').innerHTML =  seconds1.toString().padStart(2, '0');
    interval1 = setInterval(clock,1000);
    clearInterval(interval0);
    whichTurn();
    document.getElementById('button2').disabled = true;
    document.getElementById('button1').disabled = false;
    clickSound();
}

document.getElementById('timeControle').onchange = () => {
    let time = document.getElementById('timeControle').value;
    let timeArray = timeControle(time);
    changes();
}

document.getElementById('pause').onclick = () => {
if(pauseCounter%2 == 0){
    clearInterval(interval0);
    clearInterval(interval1);
    document.getElementById('pause').classList.remove("fa-pause");
    document.getElementById('pause').classList.add("fa-play")
}
else{
    document.getElementById('pause').classList.add("fa-pause");
    document.getElementById('pause').classList.remove("fa-play")
    if(turn == 0)
    interval0 = setInterval(clock,1000);
else
interval1 = setInterval(clock,1000);
}
pauseCounter++;
}

document.getElementById('reset').onclick = () => {
    clearInterval(interval0);
    clearInterval(interval1);
    changes();
    document.getElementById('button1').disabled = false;
    document.getElementById('button2').disabled = false;
     clickCount0 = 0;
 clickCount1 = 0;
 interval0 = '';
 interval1 = '';
 turnCount = 0;
 turn = 0;
 pauseCounter = 0;
}


function clock(){
    if(turn == 0){
        secondNow = seconds0;
        minuteNow = minutes0;
        intervalNow = "interval0";
    }
    else{
        secondNow = seconds1;
        minuteNow = minutes1;
        intervalNow = "interval1";
    }
    if(secondNow  <=0 ){
        secondNow  = 60;
        minuteNow--; 
    }
        secondNow --;
        
        if(secondNow  <=0 ){
            secondNow  = 60;
            minuteNow--; 
        }
    
    let htmlSecond = "second"+turn;
    let htmlMinute = "minute"+turn;
    document.getElementById(htmlSecond).innerHTML = secondNow .toString().padStart(2, '0');
    document.getElementById(htmlMinute).innerHTML = minuteNow;
    if(secondNow  >60){
        secondNow  = 1;
        minuteNow++; 
    }
    if(minuteNow<0){
        clearInterval(intervalNow);
    }

    //give the values back
    if(turn == 0){
        seconds0= secondNow ;
        minutes0 = minuteNow;
    }
    else{
        seconds1 = secondNow;
        minutes1 = minuteNow;
    }
    
}

function whichTurn(){
    if(turnCount % 2 == 0){
        turn = "0";
    }

    else{
        turn = "1";
    }
    turnCount++;
}

function timeControle(input){
    if(input == 30)
    timeArray = [3,0]
    else if(input == 32)
    timeArray = [3,2]
    else if(input == 50)
    timeArray = [5,0]
    else if(input == 53)
    timeArray = [5,3]
    else if(input == 100)
    timeArray = [10,0]
    else if(input == 105)
    timeArray = [10,5]
    return timeArray;
}

function changes(){
    document.getElementById('minute0').innerHTML = timeArray[0];
    document.getElementById('minute1').innerHTML = timeArray[0];
    document.getElementById('second0').innerHTML = timeArray[1] .toString().padStart(2, '0');
    document.getElementById('second1').innerHTML = timeArray[1] .toString().padStart(2, '0');
     seconds0 = timeArray[1];
 minutes0 = timeArray[0];
 seconds1 = timeArray[1];
 minutes1 = timeArray[0];
 seconds = timeArray[1];
 minutes = timeArray[0];
}

function clickSound(){
    let audio = new Audio("clickAudio.mp3");
    audio.play();
}
