import { saveTodo } from "./saveTodo.js";

const editTodo = (id) => {
  const liElem = document.querySelector(`li[data-id='${id}']`);

  const textElem = liElem.querySelector(".app__task-desc");

  const btnsContainer = liElem.querySelector(".app__task-controllers");
  const btnEditElem = liElem.querySelector(".app__task-btn_edit");

  liElem.classList.add("active");
  liElem.addEventListener("click", (e) => {
    e.preventDefault();
  });

  textElem.setAttribute("contenteditable", "true");

  const btnRemoveSave = document.createElement("button");
  btnRemoveSave.classList.add("app__task-btn", "app__task-btn_save");
  btnRemoveSave.addEventListener("click", () => {
    saveTodo(id);

    btnsContainer.replaceChild(btnEditElem, btnRemoveSave);
    textElem.setAttribute("contenteditable", "false");
    liElem.classList.remove("active");
  });

  btnsContainer.replaceChild(btnRemoveSave, btnEditElem);
};

export { editTodo };
