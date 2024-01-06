import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut ,signInWithPopup,GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore,doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

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
const db = getFirestore(app);

export{
  doc,
  setDoc,
  db,
  auth,
  createUserWithEmailAndPassword,
  provider,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,signOut
}