let taskList = document.getElementById("task-list");
let taskInput = document.getElementById("input-task");
let addBtn = document.getElementById("add-task-button");

addBtn.addEventListener("click", function () {
    let newCheckbox = document.createElement("input");	// create input
    newCheckbox.setAttribute("type", "checkbox");   	// create checkbox
    newCheckbox.classList.add("check");			        // set class to "check"

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
})

function delTask(e) {
    let parent = e.parentNode;      // get current task parent (li)
    taskList.removeChild(parent);   // remove li from ul
}