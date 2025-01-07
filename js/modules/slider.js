const newItemsSlider = new Swiper('#newItemsSlider', {
    speed: 300,
    spaceBetween: 5,
    slidesPerView: 1.3,
    centeredSlides: true,
    navigation: {
        nextEl: '#newItemsSlider .swiper-button-next',
        prevEl: '#newItemsSlider .swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 767px
        767: {
            centeredSlides: false,
            slidesPerView: 3,
        },
        // when window width is >= 1023px
        1023: {
            centeredSlides: false,
            slidesPerView: 4,
        },

    }
});
const bestsellersSlider = new Swiper('#bestsellersSlider', {
    speed: 300,
    spaceBetween: 5,
    slidesPerView: 1.3,
    centeredSlides: true,
    navigation: {
        nextEl: '#bestsellersSlider .swiper-button-next',
        prevEl: '#bestsellersSlider .swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 767px
        767: {
            centeredSlides: false,
            slidesPerView: 3,
        },
        // when window width is >= 1023px
        1023: {
            centeredSlides: false,
            slidesPerView: 4,
        },

    }
});


const youWillLikeIt = new Swiper('#youWillLikeIt', {
    speed: 300,
    spaceBetween: 5,
    slidesPerView: 1.3,
    centeredSlides: true,
    navigation: {
        nextEl: '#youWillLikeIt .swiper-button-next',
        prevEl: '#youWillLikeIt .swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 767px
        767: {
            centeredSlides: false,
            slidesPerView: 3,
        },
        // when window width is >= 1023px
        1023: {
            centeredSlides: false,
            slidesPerView: 4,
        },

    }
});
const recentlyWatched = new Swiper('#recentlyWatched', {
    speed: 300,
    spaceBetween: 5,
    slidesPerView: 1.3,
    centeredSlides: true,
    navigation: {
        nextEl: '#recentlyWatched .swiper-button-next',
        prevEl: '#recentlyWatched .swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 767px
        767: {
            centeredSlides: false,
            slidesPerView: 3,
        },
        // when window width is >= 1023px
        1023: {
            centeredSlides: false,
            slidesPerView: 4,
        },

    }
});
