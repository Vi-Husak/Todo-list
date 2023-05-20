import removeTodo from "./removeTodo.js";

export default (id, li) => {
  removeTodo(id);
  li.remove();
};
