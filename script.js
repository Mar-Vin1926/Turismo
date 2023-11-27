var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredDldes:true,
    loop:true,
    spaceBetween: 30,
    grabCursor:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints : {
        991: {
            slidesPerView: 3
        }
    }
});