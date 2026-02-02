/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

/*==================== SERVICES MODAL ====================*/

const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
  document.body.classList.add("disable-scroll");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
      document.body.classList.remove("disable-scroll");
    });
  });
});

/*==================== PORTFOLIO SWIPER ====================*/

let swiper = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*==================== PROJECTS SWIPER ====================*/

let projectsSwiper = new Swiper(".projects__slider-container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  slidesPerView: 1,
  centeredSlides: true,
  navigation: {
    nextEl: ".projects__slider-container .swiper-button-next",
    prevEl: ".projects__slider-container .swiper-button-prev",
  },
  pagination: {
    el: ".projects__slider-container .swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  effect: "slide",
  speed: 800,
  watchOverflow: true,
  observer: true,
  observeParents: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  a11y: {
    prevSlideMessage: "Previous project",
    nextSlideMessage: "Next project",
  },
});

/*==================== CERTIFICATES SWIPER ====================*/

let certificatesSwiper = new Swiper(".certificates__slider-container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  slidesPerView: 1,
  centeredSlides: true,
  navigation: {
    nextEl: ".certificates__slider-container .swiper-button-next",
    prevEl: ".certificates__slider-container .swiper-button-prev",
  },
  pagination: {
    el: ".certificates__slider-container .swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  effect: "slide",
  speed: 700,
  watchOverflow: true,
  observer: true,
  observeParents: true,
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// Highlight home section on page load
window.addEventListener("load", () => {
  const homeLink = document.querySelector(".nav__menu a[href='#home']");
  if (homeLink) {
    homeLink.classList.add("active-link");
  }
});

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

//validate if user previously chose a theme
if (selectedTheme) {
  // if theme selected by user previously then we add/remove classes again based on localStorage
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme,
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme,
  );
}
//if initially there is no local storage ie. user has not made a choice and this is first time loading
//then we check if browser/OS is in dark mode and then add dark theme if required by default
else if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  console.log("found dark mode for browser/OS");
  // add dark theme by setting dark theme flags in localStorage
  localStorage.setItem("selected-theme", "dark");
  localStorage.setItem("selected-icon", "uil-moon");
  // add classes for dark theme in DOM
  document.body.classList.add(darkTheme);
  themeButton.classList.add(iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*==================== MOBILE PROJECT TOGGLES ====================*/
const projectToggleBtns = document.querySelectorAll(".project__toggle-btn");

projectToggleBtns.forEach((btn) => {
  // Prevent touch events from triggering swiper
  btn.addEventListener(
    "touchstart",
    (e) => {
      e.stopPropagation();
    },
    { passive: true },
  );

  btn.addEventListener(
    "touchend",
    (e) => {
      e.stopPropagation();
    },
    { passive: true },
  );

  btn.addEventListener("mousedown", (e) => {
    e.stopPropagation();
  });

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const target = btn.dataset.target;
    const projectCard = btn.closest(".project__card");

    if (target === "description") {
      const description = projectCard.querySelector(".project__description");
      description.classList.toggle("show");
      btn.classList.toggle("active");
    } else if (target === "tech") {
      const tech = projectCard.querySelector(".project__tech");
      tech.classList.toggle("show");
      btn.classList.toggle("active");
    }
  });
});

// Auto close tech stack and description on scroll
window.addEventListener("scroll", () => {
  const descriptions = document.querySelectorAll(".project__description.show");
  const techStacks = document.querySelectorAll(".project__tech.show");
  const activeButtons = document.querySelectorAll(
    ".project__toggle-btn.active",
  );

  descriptions.forEach((desc) => desc.classList.remove("show"));
  techStacks.forEach((tech) => tech.classList.remove("show"));
  activeButtons.forEach((btn) => btn.classList.remove("active"));
});
