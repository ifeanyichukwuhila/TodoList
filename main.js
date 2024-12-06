const todos = [];
const todoList = document.getElementById("todos");
const todoInput = document.getElementById("textInput");
const inputBtn = document.getElementById("add");

function addTodo(e) {
  e.preventDefault();
  let textValue = todoInput.value;
  todos.push(textValue);
  todoList.innerHTML = "";
  renderTodos();
}
inputBtn.addEventListener("click", addTodo);

function deleteTodo(index) {
  todos = todos.filter((todo, i) => {
    return i === index ? false : true;
  });
  todoList.innerHTML = "";
  renderTodos();
}

function editTodo(index) {
  
  todoList.value =
}


//create todos or list items
function renderTodos() {
  todos.forEach((todo, i) => {
    let currentHTML = todoList.innerHTML;
    let newHTML = `<div class="todoItem">
                <p>${i + 1}. ${todo}</p>
                <div class="actions">
                 <i onclick="editTodo(${i})"  class="fa-solid fa-pen"></i>
                 <i onClick="deleteTodo(${i})" class="fa-solid fa-trash-can"></i>
                 
                    
                </div>
             </div>`;
    let amendedHTML = currentHTML + newHTML;
    todoList.innerHTML = amendedHTML;
  });
}

renderTodos();
