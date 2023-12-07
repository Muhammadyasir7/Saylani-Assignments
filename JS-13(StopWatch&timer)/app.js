var main = document.getElementById("mainDiv");
var sec =document.getElementById("sec");
var hour = 0;
var min = 0;
var sec = 0;

var timer = false
var count = 0;
var setTime;

var stopDiv = document.getElementById("stopwatch");
stopDiv.addEventListener("click",function(){
    document.getElementById("mainDiv").innerHTML = `
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
    var btnStart = document.getElementById("startBtn");
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
                var timeNum = document.getElementById("timeNum")
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



function timers(){
    document.getElementById("mainDiv").innerHTML = `
    <input type="number" class="num-inp" maxlength="2" value="05" min="0" max="99" placeholder="05">
    <span>H</span>
    <input type="number" class="num-inp" maxlength="2" value="00" max="99" placeholder="00">
    <span>M</span>
    `
}