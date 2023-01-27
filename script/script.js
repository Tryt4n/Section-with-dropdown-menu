import { slideMobileList, handleDefaultStates } from "./navbar.js";

document.addEventListener("DOMContentLoaded", function () {
  handleDefaultStates();
});

window.addEventListener("resize", () => {
  handleDefaultStates();
});

slideMobileList();
