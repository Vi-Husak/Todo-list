import createModal from "../ui/createModal.js";
import { tasks } from "./tasksData.js";

const app = document.querySelector("#app");

const modal = createModal(tasks);

app.appendChild(modal);
