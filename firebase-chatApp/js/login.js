import {signInWithEmailAndPassword,signOut,auth} from "./firebase.js"

const login =()=>{
    const email = document.getElementById("loginName")
    const password = document.getElementById("loginPassword")
signInWithEmailAndPassword(auth, email.value, password.value)

  .then(async(userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user.uid,user)

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