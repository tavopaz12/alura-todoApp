import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]");
const createTask = (e) => {
  //PREVENT FORM
  e.preventDefault();

  //CONSTANTS
  const input = document.querySelector("[data-form-input]");
  const list = document.querySelector("[data-list]");
  const taskContent = document.createElement("div");
  const alert = document.querySelector("[data-form-alert]");
  const value = input.value;

  if (value.trim() === "") {
    alert.style.display = "block";
  } else {
    alert.style.display = "none";
    const task = document.createElement("li");
    task.classList.add("card");

    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;

    //ADD ELEMENT
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);

    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
  }

  //CLEAR INPUT
  input.value = "";
};

//EVENT LISTENER FOR ADD TASK
btn.addEventListener("click", createTask);
