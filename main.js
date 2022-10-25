import { addTask } from "./components/addTask.js";
import { readTasks } from "./components/readTaks.js";

const btn = document.querySelector("[data-form-btn]");

//EVENT LISTENER FOR ADD TASK
btn.addEventListener("click", addTask);

readTasks();
