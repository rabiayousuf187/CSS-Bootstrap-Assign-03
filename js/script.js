
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     spaceBetween: 10,
//     pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//     breakpoints: {
//     "@0.00": {
//         slidesPerView: 1,
//         spaceBetween: 10,
//     },
//     "@0.75": {
//         slidesPerView: 2,
//         spaceBetween: 20,
//     },
//     "@1.00": {
//         slidesPerView: 3,
//         spaceBetween: 40,
//     },
//     "@1.50": {
//         slidesPerView: 4,
//         spaceBetween: 50,
//     },
//     },
// });


// <!-- Initialize Swiper -->

var swiper = new Swiper('#resize1', {
    slidesPerView: 3,
    direction: getDirection(),
    navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
    },
    on: {
    resize: function () {
        swiper.changeDirection(getDirection());
    },
    },
});

function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
}

var swiper = new Swiper('#resize2', {
    slidesPerView: 5,
    direction: getDirection(),
    navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
    },
    on: {
    resize: function () {
        swiper.changeDirection(getDirection());
    },
    },
});

function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
}