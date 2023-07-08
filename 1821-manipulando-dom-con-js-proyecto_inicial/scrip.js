(() => {
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
    const contenedor = `
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    list.appendChild(task);

    //task.innerHTML = contenedor;
    task.appendChild(taskContent);
  };

  btn.addEventListener("click", createTask);

  const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i;
  };

  const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("far");
    element.classList.toggle("completeIcon");
  };
})();
