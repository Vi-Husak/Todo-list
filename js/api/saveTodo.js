import { tasks } from "./tasksData.js";

export default (id, text) => {
  const index = tasks.findIndex((task) => task.id === id);

  if (index !== -1) {
    tasks[index].text = text;
    // localStorage.setItem("tasks", JSON.stringify(tasks));
  }
};
