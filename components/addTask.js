import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";

export const addTask = (e) => {
  e.preventDefault();

  const list = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]");
  const calendar = document.querySelector("[data-form-date]");

  const date = calendar.value;
  const value = input.value;
  const dateFormat = moment(date).format("DD/MM/YYYY");

  const taskObj = {
    value,
    dateFormat,
  };

  const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  taskList.push(taskObj);
  localStorage.setItem("tasks", JSON.stringify(taskList));

  //CLEAR INPUT
  input.value = "";
  calendar.value = "";

  const task = createTask(taskObj);
  list.appendChild(task);
};

export const createTask = ({ value, dateFormat }) => {
  const taskContent = document.createElement("div");
  const alert = document.querySelector("[data-form-alert]");

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

    const dateElement = document.createElement("span");
    dateElement.innerHTML = dateFormat;

    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon());

    return task;
  }
};
