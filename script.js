const toggleMenu = document.querySelector(".toggle__menu");
const headNav = document.querySelector(".header__nav2");
const headear = document.querySelector(".header__nav2");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headNav.classList.toggle("open");
  headNav.classList.toggle("open");
  headers.style="border-bottom:5px solid gray;";
});