import { removeTodo } from "./removeTodo.js";

const createTodoListItem = (task) => {
  if (task.id) {
    const liElem = document.createElement("li");
    liElem.classList.add("app__task-item");
    liElem.setAttribute("data-id", task.id);

    const labelElem = document.createElement("label");
    labelElem.classList.add("app__task-label");
    labelElem.setAttribute("for", task.id);

    const checkboxContainer = document.createElement("div");
    checkboxContainer.classList.add("app__task-container");

    const checkboxElem = document.createElement("input");
    checkboxElem.type = "checkbox";
    checkboxElem.classList.add("app__task-checkbox");
    checkboxElem.setAttribute("id", task.id);

    const taskTextElem = document.createElement("p");
    taskTextElem.classList.add("app__task-desc");
    taskTextElem.textContent = task.text;

    checkboxContainer.appendChild(checkboxElem);
    checkboxContainer.appendChild(taskTextElem);

    labelElem.appendChild(checkboxContainer);

    const btnsContainer = document.createElement("div");
    btnsContainer.classList.add("app__task-controllers");

    const btnEditElem = document.createElement("button");
    btnEditElem.classList.add("app__task-btn", "app__task-btn_edit");

    const btnRemoveElem = document.createElement("button");
    btnRemoveElem.classList.add("app__task-btn", "app__task-btn_remove");
    btnRemoveElem.addEventListener("click", () => {
      removeTodo(task.id);
    });

    btnsContainer.appendChild(btnEditElem);
    btnsContainer.appendChild(btnRemoveElem);

    labelElem.appendChild(btnsContainer);

    liElem.appendChild(labelElem);

    return liElem;
  }
};

export { createTodoListItem };
