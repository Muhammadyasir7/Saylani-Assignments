var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

var showPass = document.getElementById("showPass");

function genPass(){
    var pass = "";
    for(var i = 0; i<15; i++){
        pass += chars[Math.floor(Math.random()* chars.length)]

    }
    console.log(pass.length)
showPass.innerText = pass
}

var showAlert = document.getElementById("showAlert");

function validatePass(){
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,20}$/;

    var inputPass = document.getElementById("inputPass");
    if(inputPass.value.match(passw)){
        showAlert.innerHTML = "Password is Perfect"
    }
    else{
        showAlert.innerHTML ="Password is weak"
    }
}
