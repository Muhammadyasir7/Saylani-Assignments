
let nextTime = document.getElementById("nextTime")

setInterval(()=>{
    nextTime.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
},1000)