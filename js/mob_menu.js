
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




//     (() => {
//         const openMenuBurger = document.getElementById("burger");
//         const heroSection = document.querySelector(".hero__section");
//         const closeMenuBtn = document.querySelector(".header_mob-menu_close-btn");
//         openMenuBurger.addEventListener("click", () => {
//             heroSection.classList.add("open");  
//         })
//         closeMenuBtn.addEventListener("click", () => {
//            heroSection.classList.remove("open"); 
//         })
// })();
