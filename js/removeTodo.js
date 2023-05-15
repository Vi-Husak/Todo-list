import { tasks } from "./tasksData.js";
import { removeTodoListItem } from "./removeTodoListItem.js";

const removeTodo = (id) => {
  const index = tasks.findIndex((task) => task.id === id);

  if (index !== -1) {
    tasks.splice(index, 1);
    removeTodoListItem(id);
  }
};

export { removeTodo };
