const menuToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__list");
const navLinks = document.querySelectorAll(".nav__link");
const cardButtons = document.querySelectorAll(".card__cta-btn");
const sidebarLinks = document.querySelectorAll(".sidebar__link");
const articles = document.querySelectorAll(".article");
const sections = document.querySelectorAll(".js-section");

menuToggle.addEventListener("click", changeMenuState);

navLinks.forEach(link => link.addEventListener("click", changeMenuState));

function changeMenuState() {
  menuToggle.classList.toggle("is-open");
  navMenu.classList.toggle("is-open");
}

cardButtons.forEach(button => button.addEventListener("click", () => {
  const card = button.closest(".card__container");
  card.classList.toggle("flipped");
}));

function updateSidebarLinks() {
  if (sidebarLinks.length === 0 || articles.length === 0) {
    return;
  }

  sidebarLinks.forEach((link) => {
    link.classList.remove("active");
  });

  let prevY = 0;

  for (let i = 0; i < articles.length; i++) {
    const article = articles[i];
    const curY = article.offsetTop + article.offsetHeight;

    if (prevY <= scrollY && scrollY <= curY) {
      const link = sidebarLinks[i];

      link.classList.add("active");

      const urlHash = "/docs/" + link.getAttribute("href").replace("#", "");
      //window.history.pushState(null, "", urlHash);

      // required link was found and updated, exit
      break;
    }

    // link was not found, update position for the next iteration
    prevY = curY;
  }
}

function updateTopLinks() {
  if (navLinks.length === 0 || sections.length === 0) {
    return;
  }
  
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  let prevY = 0;

  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const curY = section.offsetTop + section.offsetHeight;

    if (prevY <= scrollY && scrollY < curY) {
      const link = navLinks[i];
      link.classList.add("active");
      // required link was found and updated, exit
      break;
    }
  }
}

window.addEventListener("scroll", () => {
  updateSidebarLinks();
  updateTopLinks();
});