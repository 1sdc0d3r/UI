const hamburgerMenu = document.getElementById("hamburgerMenu");
// * select the dropdown img/button

const hamburgerMenuContent = document.getElementById("navDropDown");
// * select the menu items of the dropdown container

const mainWindow = document.querySelector("main");

hamburgerMenu.addEventListener("click", () =>
  hamburgerMenuContent.classList.toggle("show")
);

// window.addEventListener("click", () => mainWindow.classList.toggle("show"));
