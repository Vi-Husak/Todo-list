import { saveTodo } from "./saveTodo.js";

const editTodo = (id) => {
  const liElem = document.querySelector(`li[data-id='${id}']`);

  const textElem = liElem.querySelector(".app__task-desc");

  const textValue = textElem.textContent;

  const btnsContainer = liElem.querySelector(".app__task-controllers");

  const btnEditElem = btnsContainer.querySelector(".app__task-btn_edit");
  const btnRemoveElem = btnsContainer.querySelector(".app__task-btn_remove");

  liElem.classList.add("active");
  liElem.addEventListener("click", (e) => {
    e.preventDefault();
  });

  textElem.setAttribute("contenteditable", "true");

  const btnSaveTask = document.createElement("button");
  btnSaveTask.classList.add("app__task-btn", "app__task-btn_save");

  const btnResetTask = document.createElement("button");
  btnResetTask.classList.add("app__task-btn", "app__task-btn_cancel");

  btnSaveTask.addEventListener("click", () => {
    saveTodo(id);

    btnsContainer.replaceChild(btnEditElem, btnSaveTask);
    textElem.setAttribute("contenteditable", "false");
    liElem.classList.remove("active");
  });

  btnResetTask.addEventListener("click", () => {
    textElem.textContent = textValue;

    btnsContainer.replaceChild(btnRemoveElem, btnResetTask);
    textElem.setAttribute("contenteditable", "false");
    liElem.classList.remove("active");
  });

  btnsContainer.replaceChild(btnSaveTask, btnEditElem);

  btnsContainer.replaceChild(btnResetTask, btnRemoveElem);
};

export { editTodo };
