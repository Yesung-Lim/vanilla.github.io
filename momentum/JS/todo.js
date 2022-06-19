const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos"; //saving key of localStorage
let todos = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function removeToDo(event) {
    const selectedNode = event.target.parentNode;
    todos = todos.filter((item) => selectedNode.id !== String(item.id));
    saveToDos();
    toDoList.removeChild(selectedNode);
}

function appendToDo(toDoObject) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.id = toDoObject.id;
    span.innerText = toDoObject.value;
    button.innerText = "❌";
    button.addEventListener("click", removeToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function loadToDos() {
    const savedToDos = localStorage.getItem(TODOS_KEY);

    if(savedToDos !== null) {
        todos = JSON.parse(savedToDos);
        todos.forEach((item) => appendToDo(item));
    }
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDoObject = {
        value: toDoInput.value,
        id: Date.now(),
    };
    toDoInput.value = "";
    todos.push(newToDoObject);
    appendToDo(newToDoObject);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
loadToDos();