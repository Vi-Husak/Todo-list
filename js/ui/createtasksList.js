import createElem from "../helpers/createElem.js";
import createTaskItem from "./createTaskItem.js";

export default (tasks) => {
  const ul = createElem("ul", {
    classNames: "app__task-list",
  });

  tasks.forEach((task) => {
    const li = createTaskItem(task);

    ul.prepend(li);
  });

  return ul;
};
