import createElem from "../helpers/createElem.js";
import createForm from "./createForm.js";
import createtasksList from "./createtasksList.js";

export default (tasksData) => {
  const modal = createElem("div");

  const appHeading = createElem("h1", {
    textContent: "Todo App",
    classNames: "app__heading",
  });
  const list = createtasksList(tasksData);
  const form = createForm(list);

  modal.appendChild(appHeading);
  modal.appendChild(form);
  modal.appendChild(list);

  return modal;
};
