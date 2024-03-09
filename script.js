//fetching div from index.html to add timers to it.
const timeDisplay = document.getElementById("time-display");
let timer = null;
//creating timer start variable
let startTime = 0;
//creating timer end variable
let elapsedTime = 0;
//it will true while timer is running, false otherwise timer stops and reset
let timeRunning = false;
//starting the timer
function start(){
    if(!timeRunning){
        startTime = Date.now() - elapsedTime;
        //updating the timer every 10 milisecond
        timer = setInterval(update, 10);
        timeRunning = true;
    }
}
//stopping the timer
function stop(){
    if(timeRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        timeRunning = false;
    }
}
//reseting the timer
function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    timeRunning = false;    
    timeDisplay.textContent = "00:00:00:00";
}
//data to be updated
function update(){
    
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
//converting decimal miliseconds value round value
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);
//adding padding of extra zero 
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");
// adding data to the timer-display div by template literal
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
