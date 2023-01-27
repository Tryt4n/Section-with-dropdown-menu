const hamburgerBtn = document.querySelector("[data-btn-hamburger]");
const closeBtn = document.querySelector("[data-btn-close]");
const backgroundShadow = document.querySelector("[data-background-shadow]");
const navigationList = document.querySelector("[data-navigation-list]");
const detailsLists = document.querySelectorAll("[data-details]");

export function slideMobileList() {
  slideInMobileList();
  slideOutMobileList();
}

document.addEventListener("DOMContentLoaded", function () {
  handleDefaultStates();
});

window.addEventListener("resize", () => {
  handleDefaultStates();
});

function slideInMobileList() {
  hamburgerBtn.addEventListener("click", () => {
    backgroundShadow.classList.add("background-shadow");
    handleSlides(0, true, false);
  });
}

function slideOutMobileList() {
  closeBtn.addEventListener("click", () => {
    backgroundShadow.classList.remove("background-shadow");
    handleSlides(100, false, true);
  });
  backgroundShadow.addEventListener("click", (e) => {
    if (e.target === backgroundShadow) {
      backgroundShadow.classList.remove("background-shadow");
      handleSlides(100, false, true);
    }
  });
}

function handleSlides(translate, btn, closingBtn = true) {
  navigationList.style.translate = `${translate}%`;
  hamburgerBtn.setAttribute("aria-hidden", btn);
  closeBtn.setAttribute("aria-hidden", closingBtn);
}

function handleDefaultStates() {
  if (window.innerWidth <= 768) {
    backgroundShadow.classList.remove("background-shadow");
    handleSlides(100, false);

    detailsLists.forEach((list) => {
      if (list.open) {
        list.open = false;
      }
    });
  } else {
    backgroundShadow.classList.remove("background-shadow");
    handleSlides(0, true);
  }
  // Closing detailsLists after another interaction. Only in wide screens.
  detailsLists.forEach((list) => {
    document.addEventListener("click", (e) => {
      if (e.target !== list && window.innerWidth > 768) {
        list.open = false;
      }
    });
  });
}
