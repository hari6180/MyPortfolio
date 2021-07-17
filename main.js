"use strict";

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

// Handle click on "contact me" button on home
const contactButton = document.querySelector(".home__contact");
contactButton.addEventListener("click", () => {
  scrollIntoView("#contact");
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Show "arrow up" button when scrolling down
const arrowBtn = document.querySelector(".arrow-btn");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowBtn.classList.add("visible");
    arrowBtn.addEventListener("click", (event) => {
      event.preventDefault;
      scrollIntoView("#home");
    });
  } else {
    arrowBtn.classList.remove("visible");
  }
});

const all = document.querySelector(".all");
const webBasic = document.querySelector(".basic-web");
const react = document.querySelector(".react");
const fullStack = document.querySelector(".full-stack");
const projects = document.querySelectorAll(".project");

all.addEventListener("click", () => {
  projects.forEach((project) => {
    project.classList.remove("hide");
  });
});

webBasic.addEventListener("click", () => {
  VisibleProjects("basic-web");
});

react.addEventListener("click", () => {
  VisibleProjects("react");
});

fullStack.addEventListener("click", () => {
  VisibleProjects("full-stack");
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

function VisibleProjects(data) {
  projects.forEach((project) => {
    if (project.dataset.project === data) {
      project.classList.remove("hide");
    } else {
      project.classList.add("hide");
    }
  });
}
