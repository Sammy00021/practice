
var taskInput = document.getElementById("task-input");
var addButton = document.getElementById("add-button");
var taskList = document.getElementById("task-list");

function addTask() {
  var task = taskInput.value;
  if (task) {
    var li = document.createElement("li");
    var text = document.createTextNode(task);
    li.appendChild(text);
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

function deleteTask(event) {
  var target = event.target;
  var parent = target.parentElement;
  parent.removeChild(target);
}

addButton.addEventListener("click", addTask);

taskList.addEventListener("click", deleteTask);
