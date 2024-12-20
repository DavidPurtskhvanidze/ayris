const newItemsSlider = new Swiper('#newItemsSlider', {
    speed: 300,
    spaceBetween: 5,
    slidesPerView: 4,
    navigation: {
        nextEl: '#newItemsSlider .swiper-button-next',
        prevEl: '#newItemsSlider .swiper-button-prev',
    }
});
const bestsellersSlider = new Swiper('#bestsellersSlider', {
    speed: 300,
    spaceBetween: 5,
    slidesPerView: 4,
    navigation: {
        nextEl: '#bestsellersSlider .swiper-button-next',
        prevEl: '#bestsellersSlider .swiper-button-prev',
    }
});
