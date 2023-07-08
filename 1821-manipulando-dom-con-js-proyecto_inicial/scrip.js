import checkComplete from "./Components/checkComplete.js";
import deleteIcon from "./Components/deleteIcon.js";


const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
  evento.preventDefault();
  const input = document.querySelector("[data-form-input]");
  const value = input.value;
  const list = document.querySelector("[data-list]");
  const task = document.createElement("li");
  task.classList.add("card");
  input.value = "";
  //backticks
  const taskContent = document.createElement("div");
  taskContent.appendChild(checkComplete());
  const tittleTask = document.createElement("span");
  tittleTask.classList.add("task");
  tittleTask.innerText = value;
  taskContent.appendChild(tittleTask);

  list.appendChild(task);

  //task.innerHTML = contenedor;
  task.appendChild(taskContent);
  task.appendChild(deleteIcon());
};

btn.addEventListener("click", createTask);
