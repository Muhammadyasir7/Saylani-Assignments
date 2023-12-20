//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use

//   const firebaseConfig = {
//     apiKey: "AIzaSyDhcTso2FGaOf_RlNLvLLELEPJad4SJqY8",
//     authDomain: "todo-list-1f00b.firebaseapp.com",
//     projectId: "todo-list-1f00b",
//     storageBucket: "todo-list-1f00b.appspot.com",
//     messagingSenderId: "832962452170",
//     appId: "1:832962452170:web:7d97d37d6cf4c54218b233"
//   };

  // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
let count = 1
let addBtn = document.getElementById("addList");
addBtn.addEventListener("click",()=>{
    let todoInput = document.getElementById("todo-input").value;
    let todoList = document.getElementById("todo-list");

    if(todoInput.trim() !== ""){
        todoList.innerHTML += `
        <li id = "${count}">
            <span>${todoInput}</span>
            <div class="todo-icons">
                <sec>
                    <button id="editBtn"><i class="fas fa-edit"></i></button>
                    <button id="delBtn"><i class="fas fa-trash-alt"></i></button>
                 </sec>
            </div>
        </li>
        `
        count++;
    }
        
}
)

let updateBtn = document.getElementById("editBtn");
let deleteBtn = document.getElementById("delBtn");

deleteBtn && deleteBtn.addEventListener("click", ()=>{
    console.log(deleteBtn.parentNode.parentNode.parentNode.id)
    console.log("aa")
})
        