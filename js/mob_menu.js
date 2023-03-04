
    (() => {
        const openMenuBurger = document.getElementById("burger");
        const svgOpenBurger = document.querySelector(".icon-burger-menu_mob-tab");
        const common_section = document.querySelector(".section_for_menu");
        const closeMenuBtn = document.querySelector(".header_mob-menu_close-btn");
       
        openMenuBurger.addEventListener("click", () => {
            common_section.classList.add("is-open"); 
                svgOpenBurger.style.fill = "#fcb93f";    
        })

        closeMenuBtn.addEventListener("click", () => {
            common_section.classList.remove("is-open"); 
             svgOpenBurger.style.fill = "white"
            
        })
})();