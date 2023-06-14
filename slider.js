var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    });

var swiper = new Swiper(".blogs-slider", {
      slidesPerView: 3,
      loop: true,
      centerInsufficientSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
      // when window width is >= 320px
      800: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      
  }
    });
