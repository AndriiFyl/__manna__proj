(() => {
    let offset = 0; //зміщення слайдера
    const imgs_slider = document.querySelector(".menu_imgs_container");
    const btnLeft = document.querySelector(".btn__arrow_left");
    const btnRight = document.querySelector(".btn__arrow_right");

    btnRight.addEventListener("click", () => {
        offset += 350;
        if (offset > 1050) {
            offset = 0;
        }
        imgs_slider.style.left = -offset + 'px';
    })

    btnLeft.addEventListener("click", () => {
        offset -= 350;
        if (offset < 0) {
            offset = 1050;
        }
        imgs_slider.style.left = -offset + 'px';

    })
})()