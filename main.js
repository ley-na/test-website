const menuToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__list");
const navLink = document.querySelectorAll(".nav__link");

menuToggle.addEventListener("click", changeMenuState);

navLink.forEach(link => link.addEventListener("click", changeMenuState));

function changeMenuState() {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
}

