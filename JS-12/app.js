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
        // var userData = []
        var userData = {
            userName: firstName.trim()+" "+lastName.trim(),
            userEmail: email.trim(),
            userPhoneNum: phoneNum,
            userPass: loginPass,
            userConfirmPass: confirmPass,
            imgSrc : ""
        }
        sendData = localStorage.setItem("userData",JSON.stringify(userData))
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



function showDetails(){
    var getUserInfo = JSON.parse(localStorage.getItem("userData"));
    var show= document.getElementById("show");
    document.getElementById("show").style.display = "block";
    document.querySelector(".ql-toolbar").style.display= "none";
    document.getElementById("editor").style.display = "none"

    show.innerHTML =`
    <div class="card">
    <h3>Profile</h3>
        <img class="card-img-top" src="images/blank-profile-picture-973460_960_720.webp" id="profileId" alt="Profile image cap">
        <label for="input-img" class="choose">Choose Pic</label>
        <input type="file" accept="image/jpeg, image/png, image/jpg" id="input-img">
        <hr/>
        <div class="card-body">
          <h5 class="card-title">Name : ${getUserInfo.userName}</h5>
          <h5 class="card-title">Email : ${getUserInfo.userEmail}</h5>
          <h5 class="card-title">Contact No : ${getUserInfo.userPhoneNum}</h5>
          <h5 class="card-title">Email : ${getUserInfo.userEmail}</h5>
        </div>
    </div>
    `
}

function blog(){
    document.getElementById("show").style.display = "none";
    document.querySelector(".ql-toolbar").style.display= "block";
    document.getElementById("editor").style.display = "block"
}


var profilePic = document.getElementById("profileId")
var inputImg  = document.getElementById("input-img")
var profilePic;
// inputImg.onchange = function(){
//     // console.log(profilePic.src)
//     profilePic = profilePic.src =URL.createObjectURL(inputImg.files[0])
//     // console.log(profilePic)
//     // sendData += localStorage.setItem("userData",JSON.stringify(userData))
    
// }
function logOut(){
    window.location.href = "./index.html"
}

let toolbaroptions = [
    ["bold","italic","underline","strike"],
    [{header:[1,2,3,4,5,6,false]}],
    [{list: "ordered"},{list: "bullet"}],
    [{script: "sub"},{script:"super"}],
    [{indent: "+1"},{indent: "-1"}],
    [{align:[]}],
    [{size:["small","large","huge",false]}],
    ["image","link", "video","formula"],
    [{color:[]},{background:[]}],
    [{font:[]}],
    ["code-block","blockquote"]
]
let quill = new Quill('#editor',{
    modules:{
        toolbar: toolbaroptions,
    },
    theme: "snow",
    placeholder: "Write your thoughts here"
})

function postData(){
    console.log(quill.root.innerHTML)
    var postSec = document.getElementById("post-sec");
    postSec.innerHTML += quill.root.innerHTML
    
    document.querySelector('.ql-editor').innerHTML = ""
}