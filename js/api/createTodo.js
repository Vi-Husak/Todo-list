import { tasks } from "./tasksData.js";

export default (text) => {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  tasks.push(todo);
  // localStorage.setItem("tasks", JSON.stringify(tasks));

  return todo;
};
