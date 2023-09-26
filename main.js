let seconds0 = 0;
let minutes0 = 3;
let seconds1 = 0;
let minutes1 = 3;
let seconds = 0;
let minutes = 3;


let clickCount0 = 0;
let clickCount1 = 0;
let interval0 = '';
let interval1 = '';
let turnCount = 0;
let turn = 0;

let secondNow = 0;
let minuteNow = 0;
let intervalNow = 0;
let clickCountNow = 0;


document.getElementById('button1').onclick = () => {
    interval0 = setInterval(clock,1000);
    clearInterval(interval1);
    whichTurn();
    document.getElementById('button1').disabled = true;
    document.getElementById('button2').disabled = false;
}

document.getElementById('button2').onclick = () => {
    interval1 = setInterval(clock,1000);
    clearInterval(interval0);
    whichTurn();
    document.getElementById('button2').disabled = true;
    document.getElementById('button1').disabled = false;
}


function clock(){
    if(turn == 0){
        secondNow = seconds0;
        minuteNow = minutes0;
        clickCountNow = clickCount0;
        intervalNow = "interval0";
    }
    else{
        secondNow = seconds1;
        minuteNow = minutes1;
        clickCountNow = clickCount1;
        intervalNow = "interval1";
    }

    clickCountNow ++;
    if(clickCountNow  > 1){
        secondNow --;
    }
    let htmlSecond = "second"+turn;
    let htmlMinute = "minute"+turn;
    document.getElementById(htmlSecond).innerHTML = secondNow .toString().padStart(2, '0');
    document.getElementById(htmlMinute).innerHTML = minuteNow;
    if(secondNow  <=0 ){
        secondNow  = 60;
        minuteNow--; 
    }
    if(minuteNow<0){
        clearInterval(intervalNow);
        clickCountNow=0;
    }

    //give the values back
    if(turn == 0){
        seconds0= secondNow ;
        minutes0 = minuteNow;
        clickCount0 = clickCountNow ;
    }
    else{
        seconds1 = secondNow;
        minutes1 = minuteNow;
        clickCount1 = clickCountNow ;
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

