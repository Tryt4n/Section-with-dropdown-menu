import { slideMobileList, handleDefaultStates } from "./navbarSection.js";

document.addEventListener("DOMContentLoaded", function () {
  handleDefaultStates();
});

window.addEventListener("resize", () => {
  handleDefaultStates();
});

slideMobileList();
