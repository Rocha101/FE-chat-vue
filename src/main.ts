import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

app.mount("#app");
