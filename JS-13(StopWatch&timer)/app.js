let main = document.getElementById("mainDiv");
let hour = 0;
let min = 0;
let sec = 0;

let timer = false
let count = 0;
let setTime;

let stopDiv = document.getElementById("stopwatch");
stopDiv.addEventListener("click",function(){
    main.innerHTML = `
            <span class="num" id="hourss">0</span>
            <span>H</span>
            <span class="num" id="min">0</span>
            <span>M</span>
            <span class="num" id="sec">00</span>
            <span>S</span>
            <span class="num" id="timeNum">00</span>
    `
    document.getElementById("bottomDiv").innerHTML = `
            <button onclick="start()" id="startBtn">START</button>
            <button onclick="stop()">STOP</button>
            <button onclick="reset()">RESET</button>
    `
}
)

function start(){
    timer = true;
    setTime = setInterval(stopwatch,10)
    let btnStart = document.getElementById("startBtn");
    btnStart.setAttribute("disabled","disabled")
    return setTime
}

function stop(){
    timer =false;
    clearInterval(setTime)
    var btnStart = document.getElementById("startBtn");
    btnStart.removeAttribute("disabled")
}
function reset(){
    sec =0;
    min = 0;
    count = 0;
    hour = 0
    var timeNum = document.getElementById("timeNum")
    timeNum.innerHTML = count;
    var second = document.getElementById('sec')
    second.innerHTML = sec;
    var mints= document.getElementById("min");
    mints.innerHTML = min
    var hourss= document.getElementById("hourss");
    hourss.innerHTML = hour;
    var btnStart = document.getElementById("startBtn");
    btnStart.removeAttribute("disabled")
    clearInterval(setTime)
}


function stopwatch(){
    if(timer == true){
                count += 1;
                let timeNum = document.getElementById("timeNum")
                timeNum.innerHTML = count
                if(count == 99){
                    count = 0;
                    var second = document.getElementById('sec')
                    sec += 1;
                    second.innerHTML = sec;
                }
        
                if(sec == 59 && count == 59){
                    count = 0;
                    sec = 0;
        
                    var mints= document.getElementById("min");
                    min += 1;
                    mints.innerHTML = min
                }
                if(min == 59 && sec == 59 && count == 59){
                    count = 0;
                    sec = 0;
                    min = 0;
        
                    var hourss= document.getElementById("hourss");
                    hour += 1;
                    hourss.innerHTML = hour;
        
                }
            }     
}



let timers = document.getElementById("timers");
timers.addEventListener("click",function(){
    
    main.innerHTML = `
    <input type="number" id="hourTimer" class="num-inp" maxlength="2" value="05" min="0" max="99" placeholder="05">
    <span>H</span>
    <input type="number" id="minTimer" class="num-inp" maxlength="2" value="00" max="99" placeholder="00">
    <span>M</span>
    <input type="number" id="secTimer" class="num-inp" maxlength="2" value="00" max="99" placeholder="00">
    <span>S</span>
    `
    document.getElementById("bottomDiv").innerHTML = `
    <button onclick="timerFunc()" id="timerStart">START</button>
    <button onclick="stopTimer()">STOP</button>
    <button onclick="resetTimer()">RESET</button>
    `
})
let setTimr;
let hourTimer;
let minTimer;
let secTimer;


function timerFunc(){
    hourTimer = document.getElementById("hourTimer")
    minTimer = document.getElementById("minTimer")
    secTimer = document.getElementById("secTimer")

    setTimr = setInterval(function timerStart(){
        if (hourTimer.value.length > 2) {
            hourTimer.value = hourTimer.value.slice(1);
        }
        else if (minTimer.value.length > 2) {
            minTimer.value = minTimer.value.slice(1);
        }
        else if (secTimer.value.length > 2) {
            secTimer.value = secTimer.value.slice(1);
        }
        else{
        if (secTimer.value > 0) {
            secTimer.value -= 1;
        } else {
            if (minTimer.value > 0) {
                minTimer.value -= 1;
                secTimer.value = 59;
            } else {
                if (hourTimer.value > 0) {
                    hourTimer.value -= 1;
                    minTimer.value = 59;
                    secTimer.value = 59;
                } else {
                    clearInterval(setTimr);
                    alert("Timer Complete");
                    let timerStart = document.getElementById("timerStart");
                    timerStart.removeAttribute("disabled");
                }
            }
        }
        
        if(hourTimer.value == 0 && minTimer.value == 0 && secTimer.value == 0){
            alert("Timer Complete");
            clearInterval(setTimr)
            timerStart.removeAttribute("disabled");

        }
    }
        let timerStart = document.getElementById("timerStart");
        timerStart.setAttribute("disabled","disabled")
    },1000)
}
function stopTimer(){
    clearInterval(setTimr)
    let timerStart = document.getElementById("timerStart");
    timerStart.removeAttribute("disabled")
}
function resetTimer(){
    clearInterval(setTimr);
    hourTimer.value = "05";
    minTimer.value = "00";
    secTimer.value = "00";
    let timerStart = document.getElementById("timerStart");
    timerStart.removeAttribute("disabled")
}