const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
    initialSlide:1,

    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    breakpoints:{
     320:{
         slidesPerView: 'auto',
         centeredSlides: true,
         spaceBetween: 30,
     }
    }

    // // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },
    //
    // // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

});
