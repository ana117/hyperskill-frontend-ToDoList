let taskList = document.getElementById("task-list");
let taskInput = document.getElementById("input-task");
let addBtn = document.getElementById("add-task-button");

addBtn.addEventListener("click", function () {
    let newCheckbox = document.createElement("input");	  // create input
    newCheckbox.setAttribute("type", "checkbox");   	  // create checkbox
    newCheckbox.classList.add("check");			          // set class to "check"
    newCheckbox.setAttribute("onclick", "checkTask(this)"); // add onclick function

    let newTask = document.createElement("span");   // create span
    newTask.classList.add("task");			        // set class to "task"
    newTask.textContent = taskInput.value;		    // set content to input

    let newDel = document.createElement("button");   // create button
    newDel.setAttribute("type", "submit");           // set to submit type
    newDel.classList.add("delete-btn");              // set class to "delete-btn"
    newDel.setAttribute("onclick", "delTask(this)"); // add onclick function

    let newItem = document.createElement("li");     // create li
    newItem.appendChild(newCheckbox);               // append li content
    newItem.appendChild(newTask);
    newItem.appendChild(newDel);

    taskList.appendChild(newItem);
    taskInput.value = "";                           // clear input field

    updateStoredTask();
})

function delTask(e) {
    let parent = e.parentNode;      // get current task parent (li)
    taskList.removeChild(parent);   // remove li from ul
    updateStoredTask();
}

function checkTask(e) {
    let task = e.parentNode.querySelector("span");  // get current task
    task.classList.toggle("strike-task");          // toggle strike-task
    updateStoredTask();
}

function getStoredTask() {
    return localStorage.getItem("tasks") || [];
}

function updateStoredTask() {
    let storedTask = taskList.innerHTML;
    localStorage.setItem("tasks", storedTask);
}

window.onload = function () {
    if (getStoredTask()) {
        taskList.innerHTML = getStoredTask();
    }
}