function addTask() {
    let taskInput = document.getElementById("taskInput");
    let text = taskInput.value;

    console.log(text);

    let taskList = document.getElementById("taskList");

    let li = document.createElement("li");
    li.className = "todo-item";
    li.textContent = text;
    taskInput.value = "";

    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";

    editBtn.onclick = function () {
        let newText = prompt("Edit task:", text);

        if (newText !== null) {
            li.firstChild.textContent = newText;
        }
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.onclick = function () {
        let confirmDelete = confirm("Are you sure you want to delete this task?");
        if (confirmDelete) {
            li.remove();
        }
    }

    li.appendChild(editBtn);

    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    console.log(taskList);

}

function clearAll() {
    let taskList = document.getElementById("taskList");

    taskList.innerHTML = "";
}
