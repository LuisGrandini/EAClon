        // get all for region/language elements
        const specialDivRegional = document.getElementById("special-div-regional");
        const specialDivLanguage = document.getElementById("special-div-language");
        const divRegion = document.getElementById("div-region");
        const divLanguage = document.getElementById("div-language");
        const divFooterClickBackgroud = document.getElementById("click-event-footer");

        // add event listener region
        specialDivRegional.addEventListener("click", () => {
            divRegion.style.display = "flex";
            divLanguage.style.display = "none";
            divFooterClickBackgroud.style.display = "block"
        })
    
        specialDivLanguage.addEventListener("click", () => {
            divLanguage.style.display = "flex";
            divRegion.style.display = "none";
            divFooterClickBackgroud.style.display = "block";
        })

        divFooterClickBackgroud.addEventListener("click", () => {
            divRegion.style.display = "none";
            divLanguage.style.display = "none";
            divFooterClickBackgroud.style.display = "none";
        })