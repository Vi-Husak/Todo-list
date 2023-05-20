import createTodo from "./createTodo.js";
import createTaskItem from "../ui/createTaskItem.js";

export default (e, ul) => {
  e.preventDefault();

  const form = e.target;

  const formData = new FormData(form);

  const todoText = formData.get("newtasks");

  if (todoText && todoText.trim() !== "") {
    const todo = createTodo(todoText.trim());
    form.reset();

    ul.prepend(createTaskItem(todo));
  }
};
