import createElem from "../helpers/createElem.js";
import deleteButtonListener from "../api/deleteButtonListener.js";
import editButtonListener from "../api/editButtonListener.js";
import onChangeCheckbox from "../api/onChangeCheckbox.js";

export default ({ id, text, checked }) => {
  const li = createElem("li", {
    attrs: [{ key: "data-id", value: id }],
    classNames: "app__task-item",
  });

  const label = createElem("label", {
    attrs: [{ key: "for", value: id }],
    classNames: "app__task-label",
  });

  const checkbox = createElem("input", {
    attrs: [
      { key: "type", value: "checkbox" },
      { key: "id", value: id },
      { key: "checked", value: checked },
    ],
    classNames: "app__task-checkbox",
  });
  checkbox.addEventListener("change", ({ target }) =>
    onChangeCheckbox(id, target)
  );

  const p = createElem("p", {
    textContent: text,
    classNames: "app__task-desc",
  });

  const checkboxContainer = createElem("div", {
    classNames: "app__task-container",
  });

  checkboxContainer.appendChild(checkbox);
  checkboxContainer.appendChild(p);

  const buttonsContainer = createElem("div", {
    classNames: "app__task-controllers",
  });

  const editButton = createElem("button", {
    classNames: ["app__task-btn", "app__task-btn_edit"],
  });
  editButton.addEventListener("click", () =>
    editButtonListener(id, li, buttonsContainer)
  );

  const removeButton = createElem("button", {
    classNames: ["app__task-btn", "app__task-btn_remove"],
  });
  removeButton.addEventListener("click", () => deleteButtonListener(id, li));

  buttonsContainer.appendChild(editButton);
  buttonsContainer.appendChild(removeButton);

  label.appendChild(checkboxContainer);
  label.appendChild(buttonsContainer);

  li.appendChild(label);

  return li;
};
