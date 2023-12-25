import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore,collection,onSnapshot,addDoc,doc,serverTimestamp,query, orderBy,deleteDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


  const firebaseConfig = {
    apiKey: "AIzaSyDhcTso2FGaOf_RlNLvLLELEPJad4SJqY8",
    authDomain: "todo-list-1f00b.firebaseapp.com",
    projectId: "todo-list-1f00b",
    storageBucket: "todo-list-1f00b.appspot.com",
    messagingSenderId: "832962452170",
    appId: "1:832962452170:web:7d97d37d6cf4c54218b233"
  };

//   Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);


// let getAllTodoList =  async() =>{
//   let todoList = document.getElementById("todo-list");
//   const q = query(collection(db, "yasirList"),orderBy("timestamp","desc"));
//   const unsubscribe = onSnapshot(q, async(querySnapshot) => {
//     todoList.innerHTML = ""
//     querySnapshot.forEach((doc) => {
//       const todoId = doc.id;
//       todoList.innerHTML += `
//       <li id= "${todoId}">
//           <span>${doc.data().todoValue}</span>
//           <div class="todo-icons">
//               <sec>
//                   <button id="editBtn"><i class="fas fa-edit"></i></button>
//                   <button id="delBtn_${todoId}" onclick ="delBtn('${todoId}')")"><i class="fas fa-trash-alt"></i></button>
//                </sec>
//           </div>      
//       </li>
//       `
//     });
//     function delBtn(todoId){
//       console.log("sdf")
//     }
//   });
  
// }

// let addBtn = document.getElementById("addList");
// addBtn.addEventListener("click",async ()=>{
//     let todoInput = document.getElementById("todo-input");
//     if(todoInput.value.trim() !== ""){
//         const docRef = await addDoc(collection(db, "yasirList"), {
//             todoValue : todoInput.value,
//             timestamp : new serverTimestamp()
//           });
//           console.log("Document written with ID: ", docRef.id);

//         todoInput.value = "";
//       }
//     }
// )


// // let updateBtn = document.getElementById("editBtn");
// // let deleteBtn = document.getElementById("delBtn");

// // deleteBtn && deleteBtn.addEventListener("click", ()=>{
// //     console.log(deleteBtn.parentNode.parentNode.parentNode.id)
// //     console.log("aa")
// // })

  
// getAllTodoList()

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to handle the deletion of a todo item
async function delBtn(todoId) {
  console.log("Delete button clicked for ID:", todoId);

  await deleteDoc(doc(db, "yasirList", todoId));
}

function updateBtn(todoId){
  console.log("upd")
}

let getAllTodoList = async () => {
  let todoList = document.getElementById("todo-list");
  const q = query(collection(db, "yasirList"), orderBy("timestamp", "desc"));
  const unsubscribe = onSnapshot(q, async (querySnapshot) => {
    todoList.innerHTML = "";
    querySnapshot.forEach((doc) => {
      const todoId = doc.id;
      todoList.innerHTML += `
        <li id="${todoId}">
          <span>${doc.data().todoValue}</span>
          <div class="todo-icons">
            <sec>
              <button id="editBtn_${todoId}"><i class="fas fa-edit"></i></button>
              <button id="delBtn_${todoId}"><i class="fas fa-trash-alt"></i></button>
            </sec>
          </div>
        </li>
      `;
    });
  });

  // Event delegation to handle click event for dynamically created delete buttons
  todoList.addEventListener("click", (event) => {
    if (event.target.matches("[id^='delBtn_']")) {
      const todoId = event.target.id.split("_")[1]; // Extracting todoId from button ID
      delBtn(todoId); // Call your delete function passing the todoId
    }
    else if (event.target.matches("[id^='editBtn_']")) {
      const todoId = event.target.id.split("_")[1]; // Extracting todoId from button ID
      updateBtn(todoId); // Call your delete function passing the todoId
    }
  });
}

let addBtn = document.getElementById("addList");
addBtn.addEventListener("click", async () => {
  let todoInput = document.getElementById("todo-input");
  if (todoInput.value.trim() !== "") {
    const docRef = await addDoc(collection(db, "yasirList"), {
      todoValue: todoInput.value,
      timestamp : new serverTimestamp()
    });
    console.log("Document written with ID: ", docRef.id);
    todoInput.value = "";
  }
});

getAllTodoList();
