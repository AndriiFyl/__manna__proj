
    (() => {
        const openMenuBurger = document.getElementById("burger");
        const headerMenu = document.querySelector(".header_mob-tab");
        const closeMenuBtn = document.querySelector(".header_mob-menu_close-btn");
        openMenuBurger.addEventListener("click", () => {
            headerMenu.classList.add("open");  
        })
        closeMenuBtn.addEventListener("click", () => {
           headerMenu.classList.remove("open"); 
        })
})();

