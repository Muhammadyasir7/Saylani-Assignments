import { collection, query, getDocs,db } from "./firebase.js";


const userlist = async ()=>{
    let userData = document.getElementById("user-list")
    const q = collection(db, "users")
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.data());
  userData.innerHTML += 
    `
    <li class="user-icon"><i class="fas fa-user "></i></li>
    <p class="m-0">${doc.data().email}</p>
    `
});
    
}
userlist()