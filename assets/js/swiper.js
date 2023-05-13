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
