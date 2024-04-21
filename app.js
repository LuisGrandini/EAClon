/* BLACK HEADER MENU */

const blackHeader = document.querySelector(".black-header-section");
const navbar = document.querySelector("nav");
const body = document.querySelector("body");
const helpSection = document.getElementById("help-section");
const userSection = document.getElementById("user-section");

const helpBtn = document.querySelector(".link-deplegable-help");
const userBtn = document.querySelector(".link-deplegable");

const helpCloseBtn = document.querySelector(".help-btn-close");
const closeBtn = document.querySelector(".btn-close");

userBtn.addEventListener("click", toggleUserSection);
closeBtn.addEventListener("click", toggleUserSection);

function toggleUserSection() {
  if (helpSection.classList.contains("open")) {
    helpSection.classList.remove("open");
  }
  userSection.classList.toggle("open");
}

function toggleHelpSection() {
  if (userSection.classList.contains("open")) {
    userSection.classList.remove("open");
  }
  helpSection.classList.toggle("open");
}

helpBtn.addEventListener("click", toggleHelpSection);
helpCloseBtn.addEventListener("click", toggleHelpSection);

/* LATERAL BAR TODOS JUEGOS */

const todosJuegosLateral = document.querySelector(".todoJuegos-section");
const overlayElement = document.querySelector(".overlay");
const btnMenuJuegosLateral = document.querySelector(".menu-todosJuegos");
const closeTodosJuegosBtn = document.querySelector(".todosJuegos-btn-close");

function lateralMenuJuegos() {
  todosJuegosLateral.style.transform = "translateX(0)";
  overlayElement.style.display = "block";
  body.style.overflow = "hidden";
  blackHeader.style.position = "fixed";
  navbar.style.transform = "translateY(40px)";
}

function closeLateralJuegos() {
  todosJuegosLateral.style.transform = "translateX(-100%)";
  overlayElement.style.display = "none";
  body.style.overflow = "auto";
  blackHeader.style.position = "static";
  navbar.style.transform = "translateY(0)";
}

btnMenuJuegosLateral.addEventListener("click", lateralMenuJuegos);
closeTodosJuegosBtn.addEventListener("click", closeLateralJuegos);
overlayElement.addEventListener("click", closeLateralJuegos);

/*Leteral SideMenu */

const sideMenuElement = document.querySelector(".sideMenu");
const closeSideMenuBtn = document.querySelector(".sideMenu-btn-close");
const openSideMenuBtn = document.querySelector(".menu-hamburger");

function openSideMenu() {
  blackHeader.style.position = "fixed";
  navbar.style.transform = "translateY(40px)";
  sideMenuElement.style.transform = "translateX(0)";
  overlayElement.style.display = "block";
  body.style.overflow = "hidden";
}

function closeSideMenu() {
  blackHeader.style.position = "static";
  navbar.style.transform = "translateY(0)";
  sideMenuElement.style.transform = "translateX(-100%)";
  overlayElement.style.display = "none";
  body.style.overflow = "auto";
}

openSideMenuBtn.addEventListener("click", openSideMenu);
closeSideMenuBtn.addEventListener("click", closeSideMenu);
overlayElement.addEventListener("click", closeSideMenu);

/*JUEGOS*/

const juegosBtn = document.getElementById("juegosBtn");
const juegosContent = document.getElementById("juegosContent");

function juegosToggle() {
  if (juegosContent.classList.contains("open")) {
    juegosContent.classList.remove("open");
    juegosBtn.style.color = "#161616";
  } else {
    juegosContent.classList.add("open");
    juegosBtn.style.color = "#ff4747";

    experienciasContent.classList.remove("open");
    acercaContent.classList.remove("open");
    compromisosContent.classList.remove("open");
    recursosContent.classList.remove("open");
    experienciasBtn.style.color = "#161616";
    acercaBtn.style.color = "#161616";
    compromisosBtn.style.color = "#161616";
    recursosBtn.style.color = "#161616";
  }
}

juegosBtn.addEventListener("click", juegosToggle);

/*Internal juegos content*/
const exploreBtn = document.getElementById("exploreBtn");
const exploreContent = document.getElementById("exploreContent");
const platformBtn = document.getElementById("platformBtn");
const platformContent = document.getElementById("platformContent");

function exploreToggle() {
  if (exploreContent.classList.contains("open")) {
    exploreContent.classList.remove("open");
  } else {
    exploreContent.classList.add("open");
    platformContent.classList.remove("open");
  }
}

function platformToggle() {
  if (platformContent.classList.contains("open")) {
    platformContent.classList.remove("open");
  } else {
    platformContent.classList.add("open");
    exploreContent.classList.remove("open");
  }
}

exploreBtn.addEventListener("click", exploreToggle);
platformBtn.addEventListener("click", platformToggle);

/*EXPERIENCIAS*/

const experienciasBtn = document.getElementById("experienciasBtn");
const experienciasContent = document.getElementById("experienciasContent");

function experienciasToggle() {
  if (experienciasContent.classList.contains("open")) {
    experienciasContent.classList.remove("open");
    experienciasBtn.style.color = "#161616";
  } else {
    experienciasContent.classList.add("open");
    experienciasBtn.style.color = "#ff4747";

    juegosContent.classList.remove("open");
    acercaContent.classList.remove("open");
    compromisosContent.classList.remove("open");
    recursosContent.classList.remove("open");
    juegosBtn.style.color = "#161616";
    acercaBtn.style.color = "#161616";
    compromisosBtn.style.color = "#161616";
    recursosBtn.style.color = "#161616";
  }
}
experienciasBtn.addEventListener("click", experienciasToggle);

/*ACERCA DE*/

const acercaContent = document.getElementById("acercaContent");
const acercaBtn = document.getElementById("acercaBtn");

function acercaToggle() {
  if (acercaContent.classList.contains("open")) {
    acercaContent.classList.remove("open");
    acercaBtn.style.color = "#161616";
  } else {
    acercaContent.classList.add("open");
    acercaBtn.style.color = "#ff4747";

    juegosContent.classList.remove("open");
    experienciasContent.classList.remove("open");
    compromisosContent.classList.remove("open");
    recursosContent.classList.remove("open");
    juegosBtn.style.color = "#161616";
    experienciasBtn.style.color = "#161616";
    compromisosBtn.style.color = "#161616";
    recursosBtn.style.color = "#161616";
  }
}

acercaBtn.addEventListener("click", acercaToggle);

/*COMPROMISOS*/

const compromisosBtn = document.getElementById("compromisosBtn");
const compromisosContent = document.getElementById("compromisosContent");

function compromisosToggle() {
  if (compromisosContent.classList.contains("open")) {
    compromisosContent.classList.remove("open");
    compromisosBtn.style.color = "#161616";
  } else {
    compromisosContent.classList.add("open");
    compromisosBtn.style.color = "#ff4747";

    juegosContent.classList.remove("open");
    experienciasContent.classList.remove("open");
    acercaContent.classList.remove("open");
    recursosContent.classList.remove("open");
    juegosBtn.style.color = "#161616";
    experienciasBtn.style.color = "#161616";
    acercaBtn.style.color = "#161616";
    recursosBtn.style.color = "#161616";
  }
}

compromisosBtn.addEventListener("click", compromisosToggle);

/*RECURSOS*/

const recursosBtn = document.getElementById("recursosBtn");
const recursosContent = document.getElementById("recursosContent");

function recursosToggle() {
  if (recursosContent.classList.contains("open")) {
    recursosContent.classList.remove("open");
    recursosBtn.style.color = "#161616";
  } else {
    recursosContent.classList.add("open");
    recursosBtn.style.color = "#ff4747";

    juegosContent.classList.remove("open");
    experienciasContent.classList.remove("open");
    acercaContent.classList.remove("open");
    compromisosContent.classList.remove("open");
    juegosBtn.style.color = "#161616";
    experienciasBtn.style.color = "#161616";
    acercaBtn.style.color = "#161616";
    compromisosBtn.style.color = "#161616";
  }
}

recursosBtn.addEventListener("click", recursosToggle);
