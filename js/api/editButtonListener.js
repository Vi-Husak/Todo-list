import createElem from "../helpers/createElem.js";
import saveTodo from "./saveTodo.js";

export default (id, li, buttonsContainer) => {
  const p = li.querySelector(".app__task-desc");
  const text = p.textContent;
  const buttons = buttonsContainer.querySelectorAll("button");

  li.classList.add("active");
  li.addEventListener("click", (e) => {
    e.preventDefault();
  });

  p.setAttribute("contenteditable", "true");

  //create new buttons
  const saveButton = createElem("button", {
    classNames: ["app__task-btn", "app__task-btn_save"],
  });
  const cancelButton = createElem("button", {
    classNames: ["app__task-btn", "app__task-btn_cancel"],
  });

  saveButton.addEventListener("click", () => {
    saveTodo(id, p.textContent);

    buttonsContainer.replaceChild(buttons[0], saveButton);
    buttonsContainer.replaceChild(buttons[1], cancelButton);
    p.setAttribute("contenteditable", "false");
    li.classList.remove("active");
  });
  cancelButton.addEventListener("click", () => {
    p.textContent = text;

    buttonsContainer.replaceChild(buttons[0], saveButton);
    buttonsContainer.replaceChild(buttons[1], cancelButton);
    p.setAttribute("contenteditable", "false");
    li.classList.remove("active");
  });

  buttonsContainer.replaceChild(saveButton, buttons[0]);
  buttonsContainer.replaceChild(cancelButton, buttons[1]);
};
