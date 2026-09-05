// function addTask() {
//     let taskInput = document.getElementById("taskInput");
//     let dateInput = document.getElementById("dateInput");

//     let text = taskInput.value;
//     let selectedDate = dateInput.value;

//     if (text === "") {
//         alert("Please enter a task!");
//         return;
//     }

//     if (selectedDate === "") {
//         alert("Please select a date for your task!");
//         return;
//     }

//     let taskList = document.getElementById("taskList");

//     // Create list item
//     let li = document.createElement("li");
//     li.className = "todo-item";

//     // Create task text
//     let taskText = document.createElement("span");
//     taskText.textContent = text;

//     // Create date
//     let taskDate = document.createElement("span");
//     taskDate.textContent = selectedDate;

//     li.appendChild(taskText);
//     li.appendChild(taskDate);

//     // Clear inputs
//     taskInput.value = "";
//     dateInput.value = "";

//     // Edit button
//     let editBtn = document.createElement("button");
//     editBtn.textContent = "Edit";
//     editBtn.className = "edit-btn";

//     // editBtn.onclick = function () {
//     //     let newText = prompt("Edit task:", taskText.textContent);

//     //     if (newText !== null && newText.trim() !== "") {
//     //         taskText.textContent = newText.trim();
//     //     }
//     // };

//     editBtn.onclick = function () {
//     // 1. Send the task data back up to the main inputs
//     taskInput.value = taskText.textContent;
//     dateInput.value = taskDate.textContent;

//     // 2. Find the Add button safely (looks for an ID, fallback to the button tag)
//     let addBtn = document.getElementById("addBtn") || document.querySelector("button[onclick='addTask()']");
    
//     if (!addBtn) {
//         alert("Error: Main Add button could not be found in the HTML!");
//         return;
//     }

//     // 3. Change button text to guide the user
//     addBtn.textContent = "Update Task";

//     // 4. Overwrite behavior to swap out the old item only when they save
//     addBtn.onclick = function () {
//         if (taskInput.value.trim() === "" || dateInput.value === "") {
//             alert("Fields cannot be empty!");
//             return;
//         }

//         // Remove the old list item now
//         li.remove();

//         // Reset the button back to original state
//         addBtn.textContent = "Add Task";
//         addBtn.onclick = addTask;

//         // Run the creation logic for the updated item
//         addTask();
//     };

//     taskInput.focus();
// };



//     // Delete button
//     let deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     deleteBtn.className = "delete-btn";

//     deleteBtn.onclick = function () {
//         let confirmDelete = confirm(
//             "Are you sure you want to delete this task?"
//         );

//         if (confirmDelete) {
//             li.remove();
//         }
//     };

//     // Add buttons
//     li.appendChild(editBtn);
//     li.appendChild(deleteBtn);

//     // Add task to list
//     taskList.appendChild(li);
// }



// function clearAll() {
//     let taskList = document.getElementById("taskList");

//     taskList.innerHTML = "";
// }

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let dateInput = document.getElementById("dateInput");

    let text = taskInput.value;
    let selectedDate = dateInput.value;

    if (text === "") {
        alert("Please enter a task!");
        return;
    }

    if (selectedDate === "") {
        alert("Please select a date for your task!");
        return;
    }

    let taskList = document.getElementById("taskList");

    // Create list item
    let li = document.createElement("li");
    li.className = "todo-item";

    // --- NEW: Create a div wrapper for the content ---
    let contentDiv = document.createElement("div");
    contentDiv.className = "task-content";

    // Create task text
    let taskText = document.createElement("span");
    taskText.textContent = text;
    taskText.className = "task-text";

    // Create date
    let taskDate = document.createElement("span");
    taskDate.textContent = selectedDate;
    taskDate.className = "task-date";

    // Append text and date to the CONTENT div wrapper
    contentDiv.appendChild(taskText);
    contentDiv.appendChild(taskDate);

    // --- NEW: Create a div wrapper for the action buttons ---
    let actionsDiv = document.createElement("div");
    actionsDiv.className = "task-actions";

    // Clear inputs
    taskInput.value = "";
    dateInput.value = "";

    // Edit button
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";

    editBtn.onclick = function () {
        taskInput.value = taskText.textContent;
        dateInput.value = taskDate.textContent;

        let addBtn = document.getElementById("addBtn") || document.querySelector("button[onclick='addTask()']");
        
        if (!addBtn) {
            alert("Error: Main Add button could not be found in the HTML!");
            return;
        }

        addBtn.textContent = "Update Task";

        addBtn.onclick = function () {
            if (taskInput.value.trim() === "" || dateInput.value === "") {
                alert("Fields cannot be empty!");
                return;
            }

            li.remove();
            addBtn.textContent = "Add Task";
            addBtn.onclick = addTask;
            addTask();
        };

        taskInput.focus();
    };

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.onclick = function () {
        let confirmDelete = confirm("Are you sure you want to delete this task?");
        if (confirmDelete) {
            li.remove();
        }
    };

    // --- NEW: Append buttons to the ACTIONS div wrapper ---
    actionsDiv.appendChild(editBtn);
    actionsDiv.appendChild(deleteBtn);

    // --- NEW: Append both div containers to the parent list item ---
    li.appendChild(contentDiv);
    li.appendChild(actionsDiv);

    // Add task to list
    taskList.appendChild(li);
}

function clearAll() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
}
