import { addTodo } from "./addTodo.js";
import { createTodoListItem } from "./createTodoListItem.js";
import { tasks } from "./tasksData.js";

const form = document.querySelector("#newtask-form");
const taskInput = document.querySelector("#newtask-input");
const taskList = document.querySelector("#task-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const task = addTodo(taskText);
    tasks.push(task);
    taskInput.value = "";
    taskInput.focus();

    const taskListItem = createTodoListItem(task);

    taskList.prepend(taskListItem);
  }
});
