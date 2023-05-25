// Swiper for projects
var swiper = new Swiper(".swiper-all-projects", {
  centeredSlides: true,
  spaceBetween: 40,
  slidesPerView: "1.5",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      centeredSlides: false,
      slidesPerView: "1",
    },
  },
});

// About swiper
var swiper = new Swiper(".swiper-about", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
