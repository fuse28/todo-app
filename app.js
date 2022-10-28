const add = document.getElementById("add");
const input = document.getElementById("input");
const todoList = document.getElementById("todoLists");
const hidden = document.getElementById("hidden");
const editTodoBtn = document.getElementById("editBtn");

let lists = [];

function addTodo() {
  lists.push(input.value);
  input.value = "";
  localStorage.setItem("todos", JSON.stringify(lists));
  console.log(lists);
  display();
  //adding todolist to the dom
}

function display() {
  let todoItems = localStorage.getItem("todos");

  let html = "";

  lists.forEach((list, ind) => {
    html += `
      <div>
      <p>${list}</>
      <button onclick="deleteList(${ind})">delete</button>
      <button onclick="editList(${ind})">Edit</button>
      </div>

      `;
  });

  todoList.innerHTML = html;
}

function deleteList(ind) {
  let todoItems = localStorage.getItem("todos");
  lists = JSON.parse(todoItems);
  lists.splice(ind, 1);
  localStorage.setItem("todos", JSON.stringify(lists));
  display();
}

function editList(ind) {
  hidden.value = ind;
  let todoItems = localStorage.getItem("todos");
  lists = JSON.parse(todoItems);
  input.value = lists[ind];
  add.style.display = "none";
  editTodoBtn.style.display = "block";
  localStorage.setItem("todos", JSON.stringify(lists));
  editTodoBtn.addEventListener("click", (e) => {
    let todoItems = localStorage.getItem("todos");
    let id = hidden.value;
    lists[id] = input.value;
    add.style.display = "block";
    editTodoBtn.style.display = "none";
    input.value = "";
    localStorage.setItem("todos", JSON.stringify(lists));
    display();
  });
}
