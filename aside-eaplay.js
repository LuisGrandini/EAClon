//Declaración de variables asignadas a las diferentes partes del aside menu.

const sidebarEaPlay = document.querySelector(".ea-play-menu");
const sidebarBackground = document.querySelector(".ea-play-menu-background");
const sidebarButton = document.querySelector("#aside-opener-btn");
const sidebarHiddenButton = document.querySelector(".ea-app-card");
const sidebarHiddenEaPlay = document.querySelector(".ea-play-menu-hidden-info");
const sidebarSelectInfo = document.querySelector(".ea-play-menu-select-info");
const sidebarSecondSelectInfo = document.querySelector(".second-select");
const sidebarSecondHiddenButtonA = document.querySelector(".first-price-card");
const sidebarSecondHiddenButtonB = document.querySelector(".second-price-card");
const sidebarHiddenPriceMenuA = document.querySelector("#first-subhidden-menu");
const sidebarHiddenPriceMenuB = document.querySelector("#second-subhidden-menu");
const sidebarLastHiddenButtonA = document.querySelector(".price-anual-card");
const sidebarLastHiddenInfoA = document.querySelector("#anual-end-sale-ea-play");
const sidebarLastHiddenButtonB = document.querySelector(".price-monthly-card");
const sidebarLastHiddenInfoB = document.querySelector("#monthly-end-sale-ea-play");
const sidebarLastHiddenButtonC = document.querySelector(".price-anual-card-pro");
const sidebarLastHiddenInfoC = document.querySelector("#anual-end-sale-ea-play-pro");
const sidebarLastHiddenButtonD = document.querySelector(".price-monthly-card-pro");
const sidebarLastHiddenInfoD = document.querySelector("#monthly-end-sale-ea-play-pro");



//Conjunto de funciones donde le damos el nuevo estilo a los elementos de ese aside menu tan fachero.
function openSidebar() {
 sidebarEaPlay.style.display = "flex";
}
function openHiddenSidebar(){
    sidebarHiddenEaPlay.style.display = "inherit";
    sidebarHiddenButton.style.border = "4px solid var(--electronic-tag)";
    sidebarSelectInfo.style.display = "none";
}
function openHiddenPriceA(){
    sidebarHiddenPriceMenuB.style.display = "none";
    sidebarHiddenPriceMenuA.style.display = "inherit";
    sidebarSecondHiddenButtonA.style.border = "4px solid var(--electronic-tag)";
    sidebarSecondHiddenButtonB.style.border = "2px solid var(--light-color-smooth-transparency)"
    sidebarSecondSelectInfo.style.display = "none";
    sidebarLastHiddenInfoC.style.display = "none";
}
function openHiddenPriceB(){
    sidebarHiddenPriceMenuA.style.display = "none";
    sidebarHiddenPriceMenuB.style.display = "inherit";
    sidebarSecondHiddenButtonB.style.border = "4px solid var(--electronic-tag)";
    sidebarSecondHiddenButtonA.style.border = "2px solid var(--light-color-smooth-transparency)";
    sidebarLastHiddenButtonA.style.border = "2px solid var(--light-color-smooth-transparency)"
    sidebarLastHiddenButtonC.style.border = "2px solid var(--light-color-smooth-transparency)"
    sidebarSecondSelectInfo.style.display = "none";
    sidebarLastHiddenInfoA.style.display = "none" ;
}

function openHiddenPriceDataA(){
    sidebarLastHiddenInfoA.style.display = "block" ;
    sidebarLastHiddenButtonA.style.border = "4px solid var(--electronic-tag)";
    sidebarLastHiddenInfoB.style.display = "none" ;
    sidebarLastHiddenButtonB.style.border = "2px solid var(--light-color-smooth-transparency)"
}
function openHiddenPriceDataB(){
    sidebarLastHiddenInfoB.style.display = "block" ;
    sidebarLastHiddenButtonB.style.border = "4px solid var(--electronic-tag)";
    sidebarLastHiddenInfoA.style.display = "none" ;
    sidebarLastHiddenButtonA.style.border = "2px solid var(--light-color-smooth-transparency)";
}

function openHiddenPriceDataC(){
    sidebarLastHiddenInfoC.style.display = "block";
    sidebarLastHiddenButtonC.style.border = "4px solid var(--electronic-tag)";
    sidebarLastHiddenInfoD.style.display = "none";
    sidebarLastHiddenButtonD.style.border = "2px solid var(--light-color-smooth-transparency)";

}
function openHiddenPriceDataD(){
    sidebarLastHiddenInfoD.style.display = "block";
    sidebarLastHiddenButtonD.style.border = "4px solid var(--electronic-tag)";
    sidebarLastHiddenInfoC.style.display = "none";
    sidebarLastHiddenButtonC.style.border = "2px solid var(--light-color-smooth-transparency)";
}


function closeSidebar(){
    sidebarEaPlay.style.display = "none";
    sidebarHiddenEaPlay.style.display = "none";
    sidebarHiddenPriceMenuA.style.display = "none";
    sidebarHiddenPriceMenuB.style.display = "none";
    sidebarLastHiddenInfoA.style.display = "none";
    sidebarLastHiddenInfoC.style.display = "none";
    sidebarHiddenButton.style.border = "2px solid var(--light-color-smooth-transparency)";
    sidebarSecondHiddenButtonA.stlye.border = "2px solid var(--light-color-smooth-transparency)";
    sidebarSecondHiddenButtonB.stlye.border = "2px solid var(--light-color-smooth-transparency)";
}

sidebarButton.addEventListener("click", openSidebar);
sidebarHiddenButton.addEventListener("click", openHiddenSidebar);
sidebarSecondHiddenButtonA.addEventListener("click", openHiddenPriceA);
sidebarSecondHiddenButtonB.addEventListener("click", openHiddenPriceB);
sidebarLastHiddenButtonA.addEventListener("click", openHiddenPriceDataA);
sidebarLastHiddenButtonB.addEventListener("click", openHiddenPriceDataB);
sidebarLastHiddenButtonC.addEventListener("click", openHiddenPriceDataC);
sidebarLastHiddenButtonD.addEventListener("click", openHiddenPriceDataD);
sidebarBackground.addEventListener("click", closeSidebar);
