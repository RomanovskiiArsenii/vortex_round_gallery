const vortexAnimation = (() => {
    //массив слайдов
    const slides = document.getElementsByClassName('slide');

    //интервал
    let animationInterval;

    //количество слайдов
    const slidesQty = slides.length;

    //массив массивов изображений
    const slidesImages = [];

    //в каждый элемент массива вкладываем массив из трех изображений:
    //slide_circle backg img, slide_circle large img, slide_circle small img
    for (let i = 0; i < slidesQty; i++) {
        slidesImages.push(document.getElementsByClassName(`slide_img_${i}`));
    }

    //в каждом массиве массивов изображений
    for (let i = 0; i < slidesImages.length; i++) {
        //каждому его изображению указываем путь на источник изображения
        for (let j = 0; j < slidesImages[i].length; j++) {
            slidesImages[i][j].setAttribute(
                'src',
                `https://github.com/RomanovskiiArsenii/codepen/blob/main/animation/pictures/vortex/images/img_${i}.jpg?raw=true`
            );
        }
    }

    //счетчик итерации
    let index = slides.length - 1;

    const animateCircles = () => {
        //скрыть предшествующий слайд
        slides[index].classList.remove('show');
        slides[index].classList.add('hide');
        index = (index + 1) % slides.length;
        //проявить очередной слайд
        slides[index].classList.remove('hide');
        slides[index].classList.add('show');
    };

    const startAnimation = (interval) => {
        console.log('animation started');
        //запуск анимации с интервалом 8 секунд
        animationInterval = setInterval(animateCircles, interval);
    };

    const stopAnimation = () => {
        console.log('animation stopped');
        clearInterval(animationInterval);
    };

    return {
        startAnimation: startAnimation,
        stopAnimation: stopAnimation,
    };
})();

window.addEventListener('load', vortexAnimation.startAnimation(8000), false);
