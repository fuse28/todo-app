const add = document.getElementById("add");
const input = document.getElementById("input");
const hidden = document.getElementById("hidden");
const todoEditBtn = document.getElementById("editBtn");
const todoList = document.getElementById("todoLists");

let lists = [];

function addTodo() {
  lists.push(input.value);
  input.value = "";

  localStorage.setItem("todos", JSON.stringify(lists));
  display();
}

function display() {
  let todoItems = localStorage.getItem("todos");

  let html = "";

  lists.forEach((list, id) => {
    html += `
                <div>
                <p>${list}</p>
                <button onclick="deleteList(${id})">delete</button>
                
                <button onclick="edit(${id})">edit</button>
                
                </div>
        
        
        
        `;
  });
  todoList.innerHTML = html;
}

function deleteList(id) {
  let todoList = localStorage.getItem("todos");
  lists = JSON.parse(todoList);
  lists.splice(id, 1);

  localStorage.setItem("todos", JSON.stringify(lists));
  display();
}

function edit(id) {
  let todoList = localStorage.getItem("todos");
  hidden.value = id;
  lists = JSON.parse(todoList);
  input.value = lists[id];
  add.style.display = "none";
  todoEditBtn.style.display = "block";
  input.value = "";
  localStorage.setItem("todos", JSON.stringify(lists));
  display();

  todoEditBtn.addEventListener("click", () => {
    let todoList = localStorage.getItem("todos");
    let id = hidden.value;
    lists[id] = input.value;
    add.style.display = "block";
    todoEditBtn.style.display = "none";
    localStorage.setItem("todos", JSON.stringify(lists));
    display();
  });
}
