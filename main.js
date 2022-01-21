const menuToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__list");
const navLinks = document.querySelectorAll(".nav__link");
const cardButtons = document.querySelectorAll(".card__cta-btn");
const sidebarLinks = document.querySelectorAll(".sidebar__link");
const articles = document.querySelectorAll(".article");
const sections = document.querySelectorAll(".js-section");

const delta = 20;

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

function updateLinks(links, sections, updateUrl) {
  if (links.length === 0 || sections.length === 0) {
    return;
  }
  
  // deactivate all links
  links.forEach((link) => {
    link.classList.remove("active");
  });

  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const curY = section.offsetTop + section.offsetHeight - delta;

    if (window.scrollY <= curY) {
      const link = links[i];
      link.classList.add("active");
      if (updateUrl) {
        const urlHash = "/docs/" + link.getAttribute("href").replace("#", "");
        window.history.pushState(null, "", urlHash);
      }

      // required link was found and updated, exit
      break;
    }
  }
}

window.addEventListener("scroll", () => {
  updateLinks(navLinks, sections, false);
  updateLinks(sidebarLinks, articles, true);
});