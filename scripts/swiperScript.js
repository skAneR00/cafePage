import Swiper from '../node_modules/swiper/swiper-bundle.mjs';

Swiper.use([Swiper.Navigation, Swiper.Pagination]);

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});