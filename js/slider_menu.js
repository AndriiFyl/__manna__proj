// смещение слайдера от левого края
let offset = 0;
// получаем доступ к елементу
const sliderLine = document.querySelector('.menu__slider-line');


const quontityImg = document.querySelectorAll(".menu__img").length;
console.log(quontityImg);
// получаем доступ к кнопке
document.querySelector('.btn__arrow_right').addEventListener('click', function () {
    offset += 520;
    sliderLine.style.left = offset + 'px';
        if (offset > (quontityImg * 520) - 1560) {
        offset = 0;
    }
    sliderLine.style.left = - offset + 'px';
});


document.querySelector('.btn__arrow_left').addEventListener('click', function () {
    offset -= 520;
    sliderLine.style.left = offset + 'px';
        if (offset < 0) {
        offset = (quontityImg * 520) - 1560;
    }
    sliderLine.style.left = - offset + 'px';
});



