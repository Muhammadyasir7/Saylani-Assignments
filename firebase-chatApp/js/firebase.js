import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,GoogleAuthProvider,signInWithPopup,GoogleAuthProvider   } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyBNf3est7oknSdpUPdhxWXjtRpXkuDz9ao",
    authDomain: "chatapp-9b056.firebaseapp.com",
    projectId: "chatapp-9b056",
    storageBucket: "chatapp-9b056.appspot.com",
    messagingSenderId: "483056362811",
    appId: "1:483056362811:web:5c445aab589c2ee801c31e"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const createUser = ()=>{
    let userName = document.getElementById("registerName");
    let phoneNum = document.getElementById("registerUsernameNum");
    let email = document.getElementById("registerEmail");
    let userPass = document.getElementById("registerPassword");
    let confirmPass = document.getElementById("registerRepeatPassword");
    let password;
    if(userPass.value === confirmPass.value){
        password = confirmPass.value
    }


    createUserWithEmailAndPassword(auth, email.value, password,userName,phoneNum)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

const register = document.getElementById("register");
register.addEventListener("click",createUser)


const login = ()=>{
    const email = document.getElementById("loginName")
    const password = document.getElementById("loginPassword")
signInWithEmailAndPassword(auth, email.value, password.value)

  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    location.href = "chatui.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage, "sdfs")
  });
}
const signIn = document.getElementById("signIn");
signIn.addEventListener("click", login)
