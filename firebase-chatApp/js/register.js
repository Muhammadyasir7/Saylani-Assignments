import { auth,createUserWithEmailAndPassword,provider,signInWithPopup,GoogleAuthProvider,doc, setDoc,db } from "./firebase.js";

const createUser = ()=>{
  event.preventDefault()
    let userName = document.getElementById("registerName");
    let phoneNumber = document.getElementById("registerUsernameNum");
    let email = document.getElementById("registerEmail");
    let userPass = document.getElementById("registerPassword");
    let confirmPass = document.getElementById("registerRepeatPassword");
    let password;
    if(userPass.value === confirmPass.value){
        password = confirmPass.value
    }


    createUserWithEmailAndPassword(auth, email.value, password,userName,phoneNumber)
  .then(async(userCredential) => {
    // Signed up 
    const user = userCredential.user;
    await setDoc(doc(db, "users", user.uid), {
      usersName : userName.value,
      email: user.email,
      userPhone : phoneNumber.value,
    });

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
  