
const inputField = document.getElementById("myInput");
const taskList = document.getElementById("myUL");

function addTask() {
    const taskText = inputField.value.trim();
    if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.innerText = taskText;
        taskList.appendChild(listItem);
        inputField.value = "";
    }
}

document.querySelector(".addBtn").addEventListener("click", addTask);
