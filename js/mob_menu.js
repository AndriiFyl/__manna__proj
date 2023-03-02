
    (() => {
        const openMenuBurger = document.getElementById("burger");
        const svgOpenBurger = document.querySelector(".icon-burger-menu_mob-tab");
        const heroSection = document.querySelector(".hero__section");
        const closeMenuBtn = document.querySelector(".header_mob-menu_close-btn");
       
        openMenuBurger.addEventListener("click", () => {
            heroSection.classList.add("is-open"); 
                svgOpenBurger.style.fill = "#fcb93f";    
        })

        closeMenuBtn.addEventListener("click", () => {
            heroSection.classList.remove("is-open"); 
             svgOpenBurger.style.fill = "white"
            
        })
})();
