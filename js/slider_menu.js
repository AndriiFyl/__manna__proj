// смещение слайдера от левого края
let offset = 0;
// получаем доступ к елементу
const sliderLine = document.querySelector('.menu__slider-line');
// получаем доступ к кнопке

const quontityImg = document.querySelectorAll(".menu__img").length;
console.log(quontityImg);

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
        offset = (quontityImg * 520) - 520;
    }
    sliderLine.style.left = - offset + 'px';
});



