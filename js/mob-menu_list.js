(() => {
    const menuItem = document.getElementById("mob-menu_list_opener");
    const menuList = document.querySelector(".mob-menu_list_wrapper");
    const closeBtn = document.querySelector(".mob-list_close-btn");

    menuItem.addEventListener("click", () => {  
        menuList.style.transform = "translateX(100%)";
    })
    
    closeBtn.addEventListener("click", () => {
        menuList.style.transform = "translateX(0)";
        menuList.style.transition = "transform .6s"
    })

}
)()