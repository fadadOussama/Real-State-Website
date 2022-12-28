/*=============== CHANGE BACKGROUND HEADER ===============*/
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
});

/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper(".popular__container", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll(".value__accordion-item");
accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".value__accordion-header");
  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");
    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }

    toggleItem(item);
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".value__accordion-content");
  const accrodionIcon = item.querySelector(".value__accordion-arrow i");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    accrodionIcon.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    accrodionIcon.style.transform = "rotate(0deg)";
    item.classList.add("accordion-open");
  }
};

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SHOW SCROLL UP ===============*/
window.addEventListener("scroll", () => {
  const scrollUpElement = document.querySelector(".scrollUp");
  this.scrollY > 350
    ? scrollUpElement.classList.add("show-scroll")
    : scrollUpElement.classList.remove("show-scroll");
});

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    themeButton.classList.replace("bx-moon", "bx-sun");
    localStorage.setItem("icon-mode", "bx-sun");
  } else {
    themeButton.classList.replace("bx-sun", "bx-moon");
    localStorage.setItem("icon-mode", "bx-moon");
  }
});

window.addEventListener("load", () => {
  const chosenMode = localStorage.getItem("icon-mode");
  if (chosenMode === "bx-sun") {
    themeButton.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("dark-theme");
  } else {
    themeButton.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("dark-theme");
  }
});
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(
  ".home__title, .popular__container, .subscribe__container, .footer__container"
);
sr.reveal(".home__description, .footer__info", { delay: 500 });
sr.reveal(".home__search", { delay: 600 });
sr.reveal(".home__value", { delay: 700 });
sr.reveal(".home__images", { delay: 800, origin: "bottom" });
sr.reveal(".logos__img", { interval: 100 });
sr.reveal(".values__images, .contact__content", { origin: "left" });
sr.reveal(".value__content, .contact__images", { origin: "right" });
