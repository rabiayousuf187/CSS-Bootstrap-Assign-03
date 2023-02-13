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

// Slider 2
var swiper = new Swiper('#resize2', {
    slidesPerView: 4,
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

// Slider 2
var swiper = new Swiper('#resize3', {
    slidesPerView: 4,
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

