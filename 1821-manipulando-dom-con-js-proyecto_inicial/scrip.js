const btn=document.querySelector("[data-form-btn]");



const createTask = (evento)=>{
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
    const contenedor = `
    <div>
      <i class="far fa-check-square icon"></i>
      <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    task.innerHTML = contenedor;
    input.value = "";
    task.classList.add("card");
    list.appendChild(task);
    console.log(contenedor);
}

btn.addEventListener("click", createTask)