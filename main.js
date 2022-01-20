const menuToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__list");
const navLinks = document.querySelectorAll(".nav__link");
const cardButtons = document.querySelectorAll(".card__cta-btn");

menuToggle.addEventListener("click", changeMenuState);

navLinks.forEach(link => link.addEventListener("click", changeMenuState));

function changeMenuState() {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
}

cardButtons.forEach(button => button.addEventListener("click", () => {
  const card = button.closest(".card__container");
  card.classList.toggle("flipped");
}))