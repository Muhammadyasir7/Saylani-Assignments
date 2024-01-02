import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut ,signInWithPopup,GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


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
const provider = new GoogleAuthProvider();

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
    console.log(error)
    // ..
  });
}

const register = document.getElementById("register");
register && register.addEventListener("click",createUser)


const login = ()=>{
    const email = document.getElementById("loginName")
    const password = document.getElementById("loginPassword")
signInWithEmailAndPassword(auth, email.value, password.value)

  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Login Successfully",
      showConfirmButton: false,
      timer: 1500
    });
    setTimeout(()=>{
      location.href = "chatui.html"
    },2000)
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `${errorMessage}`,
    });
  });
}
const signIn = document.getElementById("signIn");
signIn && signIn.addEventListener("click", login)


const registerGoogleAcc = ()=>{
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Login Successfully",
      showConfirmButton: false,
      timer: 1500
    });
    setTimeout(()=>{
      location.href = "chatui.html"
    },2000)
    console.log(user)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorMessage)
    // ...
  });
}
const registerWithGoogle = document.getElementById("signUpWithGoogle");
registerWithGoogle && registerWithGoogle.addEventListener("click",registerGoogleAcc)

const signOutBtn = ()=>{
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log("signout succes",auth.currentUser)
    location.href = "/index.html"
    
  }).catch((error) => {
    // An error happened.
    console.log("Err")

  });
}
const signOutFunc = document.getElementById("signOut");
signOutFunc && signOutFunc.addEventListener("click", signOutBtn)