import { tasks } from "./tasksData.js";

const saveTodo = (id) => {
  const index = tasks.findIndex((task) => task.id === id);

  if (index !== -1) {
    const liElem = document.querySelector(`li[data-id='${id}']`);

    const textElem = liElem.querySelector(".app__task-desc");

    tasks[index].text = textElem.textContent;
  }
};

export { saveTodo };
