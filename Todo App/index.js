const input = document.getElementsByClassName("input");
const addButton = document.getElementsByClassName("addButton");
const container = document.querySelector(".container");
console.dir(container);
console.dir(addButton);
console.dir(input);
const editButton = document.getElementsByClassName("editButton");
const deleteButton = document.getElementsByClassName("deleteButton");
const updateButton = document.getElementsByClassName("updateButton");

const todoArr = [];
let globalId;

addButton[0].addEventListener("click", (event) => {
  if (!input[0].value) {
    alert("Please enter text");
  } else {
    todoArr.push(input[0].value);
    console.log(todoArr);
    input[0].value = "";
    displayTodos();
  }
});

function displayTodos() {
  let html = " ";

  todoArr.forEach((todo, idx) => {
    html += `
        <div class="cont-div">
        <p class="item_input">${todo}</p>
        <button class="editButton" onClick="editTodo(${idx})">Edit</button>
        <button class="deleteButton" onClick="deleteTodo(${idx})">Delete</button>
        </div>
        `;
  });

  container.innerHTML = html;
}

function editTodo(index) {
  globalId = index;
  input[0].value = todoArr[index];
  addButton[0].style.display = "none";
  updateButton[0].style.display = "block";
}


updateButton[0].addEventListener("click", () => {
  todoArr[globalId] = input[0].value;
  input[0].value = "";
  addButton[0].style.display = "block";
  updateButton[0].style.display = "none";

  displayTodos();
});

function deleteTodo(index) {
  todoArr.splice(index, 1);
  displayTodos();
}

//whenever we getElementByClassName it always comes with an array and we can see that by console.dir().
//Example console.dir(input).

// container.appendChild(span)
// container.appendChild(div);
// div.appendChild(span);

// function addToList(){

//     var div = document.createElement("div");

// //     container.appendChild(span)
// // span.innerHTML= input[0].value;

// // const editBtn= document.createElement("button")
// // editBtn.classList.add("editButton")
// // div.classList.add("editButton")

// div.innerHTML= `<span class="item_input">${input[0].value}</span>
// <button class="editButton" >Edit</button>
// <button class="deleteButton" >Delete</button>
// `;
// container.appendChild(div);

// input[0].value="";

// }

// button.addEventListener("click", addToList)
