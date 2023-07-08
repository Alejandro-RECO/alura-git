const deleteIcon = () => {
  const d = document.createElement("i");
  d.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
  d.addEventListener("click", deleteTask);

  return d;
};

const deleteTask = (event) => {
  const parent = event.target.parentElement;
  console.log(parent);
  parent.remove();
};


export default deleteIcon;