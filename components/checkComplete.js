const checkComplete = () => {
  const i = document.createElement("i");

  i.classList.add("far", "fa-check-square", "icon");

  i.addEventListener("click", completeTask);

  return i;
};

const completeTask = (e) => {
  const elem = e.target;

  elem.classList.toggle("fas");
  elem.classList.toggle("completeIcon");

  elem.classList.toggle("far");
};

export default checkComplete;