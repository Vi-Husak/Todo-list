import createElem from "../helpers/createElem.js";
import onSubmitForm from "../api/onSubmitForm.js";

export default (ul) => {
  const form = createElem("form", {
    attrs: [{ key: "id", value: "newtask-form" }],
    classNames: "app__newtask-form",
  });

  const inputTask = createElem("input", {
    classNames: "app__newtask-input",
    attrs: [
      { key: "type", value: "text" },
      { key: "name", value: "newtasks" },
      { key: "id", value: "newtask-input" },
      { key: "placeholder", value: "Add a new task" },
    ],
  });

  const submitButton = createElem("button", {
    attrs: [{ key: "type", value: "submit" }],
    textContent: "Add",
    classNames: "app__newtask-button",
  });

  form.append(inputTask);
  form.append(submitButton);

  form.addEventListener("submit", (e) => onSubmitForm(e, ul));

  return form;
};
