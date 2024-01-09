import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore,collection,onSnapshot,addDoc,doc,serverTimestamp,query, orderBy,deleteDoc,updateDoc  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyDhcTso2FGaOf_RlNLvLLELEPJad4SJqY8",
  authDomain: "todo-list-1f00b.firebaseapp.com",
  projectId: "todo-list-1f00b",
  storageBucket: "todo-list-1f00b.appspot.com",
  messagingSenderId: "832962452170",
  appId: "1:832962452170:web:7d97d37d6cf4c54218b233"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to handle the deletion of a todo item
async function delBtn(todoId) {
  await deleteDoc(doc(db, "yasirList", todoId));
}
let spanId;
function updBtn(evt){
  spanId = evt
  let spanS = document.getElementById(`${spanId}`)
  spanS.innerHTML =`
  <li id="${spanId}">
  <input type="text" id="updateVal">
          <div class="todo-icons">
          <button onclick="newVal()">Update</button>
          </div>
        </li>
  ` 
}
async function newVal(){
  let updateVal = document.getElementById("updateVal").value
    const updateField = doc(db, "yasirList", spanId);
    await updateDoc(updateField, {
      todoValue: updateVal,
      timeStamp : new serverTimestamp()
    });
  }

let getAllTodoList = async () => {
  let todoList = document.getElementById("todo-list");
  const q = query(collection(db, "yasirList"), orderBy("timeStamp", "desc"));
  const unsubscribe = onSnapshot(q, async (querySnapshot) => {
    todoList.innerHTML = "";
    querySnapshot.forEach((doc) => {
      const todoId = doc.id;
      todoList.innerHTML += `
        <li id="${todoId}">
          <span>${doc.data().todoValue}</span>
          <div class="todo-icons">
            <sec>
              <button id="${todoId}" onclick="updBtn('${doc.id}')"><i class="fas fa-edit"></i></button>
              <button id="${todoId}" onclick="delBtn('${doc.id}')"><i class="fas fa-trash-alt"></i></button>
            </sec>
          </div>
        </li>
      `;
    });
  });
}
getAllTodoList();

let addBtn = document.getElementById("addList");
addBtn.addEventListener("click", async () => {
  let todoInput = document.getElementById("todo-input");
  if (todoInput.value.trim() !== "") {
    const docRef = await addDoc(collection(db, "yasirList"), {
      todoValue: todoInput.value,
      timeStamp : new serverTimestamp()
      
    });
    console.log("Document written with ID: ", docRef.id);
    todoInput.value = "";
  }
});



window.updBtn = updBtn;
window.delBtn = delBtn;
window.newVal = newVal;

