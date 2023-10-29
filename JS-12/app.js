function saveDetail(){
    event.preventDefault();
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var phoneNum = document.getElementById("phonenum").value;
    var loginPass = document.getElementById("loginpass").value
    var confirmPass = document.getElementById("confirmpass").value;
    var emailRegix = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    var phoneRegix = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/ ;
    var sendData;
    
    if(firstName.trim() === ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your First Name!',
          })
    }
    else if(lastName.trim() === ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your Last Name!',
          })
    }
    else if(!emailRegix.test(email)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your Correct Phone num!',
          })
    }
    else if(!phoneRegix.test(phoneNum)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your Correct Phone num!',
          })
    }
    else if(loginPass.trim() === ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Password!',
          })
    }
    else if(confirmPass !== loginPass){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Password Not Matched!',
          })
    }
    else{
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Sign up successfully',
            showConfirmButton: false,
            timer: 1500
          })
        
        var userData = {
            userName: firstName.trim()+" "+lastName.trim(),
            userEmail: email.trim(),
            userPhoneNum: phoneNum,
            userPass: loginPass,
            userConfirmPass: confirmPass,
        }
        sendData += localStorage.setItem("userData",JSON.stringify(userData))
        // JSON.parse(localStorage.getItem("userData"))
        // if(getUserInfo === sendData){
        //     alert("You are already registered")
        // }
        setTimeout(()=>{
            window.location.href ="./dashboard.html"
        },2000)
    }  
}

function loginPage(){
    var userInput = document.getElementById("userInput").value;
    var userPassword = document.getElementById("userPass").value;
    var getUserInfo = JSON.parse(localStorage.getItem("userData"));

    if(!getUserInfo){
        Swal.fire({
            icon: 'error',
            title: 'User Not Found'
        })
        setTimeout(()=>{
            window.location.href ="./signup.html"
        },2000)
    }
    console.log(getUserInfo)
    if(userInput !== getUserInfo.userEmail){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email Not Correct!',
          })
    }
    else if(userPassword !== getUserInfo.userPass){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Password Not Matched!',
          })
    }
    else{
        setTimeout(()=>{
            window.location.href ="./dashboard.html"
        },2000)
    }
}