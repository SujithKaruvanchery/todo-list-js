function addTask() {
    let taskInput = document.getElementById("taskInput");
    let text = taskInput.value;

    console.log(text);

    let taskList = document.getElementById("taskList");

    let li = document.createElement("li");
    li.className = "todo-item";
    li.textContent = text;

    taskList.appendChild(li);

    console.log(taskList);
}

function clearAll() {
    let taskList = document.getElementById("taskList");

    taskList.innerHTML = "";
}