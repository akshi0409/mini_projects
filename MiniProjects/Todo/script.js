var todoInput = document.getElementById('todo-input');
var todoButton = document.getElementById('todo-submit');
var todoList = document.getElementById('todo-list');
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', delTodo);
console.log("hello");

function addTodo(event) {
    event.preventDefault();
    console.log("hello");
    console.log(todoInput.value);
    //create a new div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create a list
    const newtodo = document.createElement('li');
    newtodo.innerHTML = todoInput.value;
    newtodo.classList.add('todo-item');
    todoDiv.appendChild(newtodo);
    //create mark button
    const markbtn = document.createElement('button');
    markbtn.innerHTML = '<i class="fas fa-check"></i>';
    markbtn.classList.add("mark-btn");
    todoDiv.appendChild(markbtn);
    //create delete button
    const delbtn = document.createElement('button');
    delbtn.innerHTML = '<i class="fas fa-trash"></i>'
    delbtn.classList.add("del-btn");
    todoDiv.appendChild(delbtn);
    todoList.appendChild(todoDiv);
    todoInput.value = "";
}

function delTodo(e) {
    const item = e.target;
    if (item.classList[0] === 'del-btn') {
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function() {
            todo.remove();
        })
    }
    if (item.classList[0] === 'mark-btn') {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}