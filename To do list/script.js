// Get the input field and the list
const inputField = document.getElementById("myInput");
const taskList = document.getElementById("myUL");

// Function to add a new task
function addTask() {
    const taskText = inputField.value.trim();
    if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.innerText = taskText;
        taskList.appendChild(listItem);
        inputField.value = "";
    }
}

// Event listener for the "Add" button
document.querySelector(".addBtn").addEventListener("click", addTask);
