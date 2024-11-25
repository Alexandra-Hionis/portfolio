// Import Swiper styles
import "swiper/swiper-bundle.css";

// Import Swiper functionality
import Swiper from "swiper/bundle";

// Swiper for projects
const swiper = new Swiper(".swiper-all-projects", {
  centeredSlides: true,
  spaceBetween: 40,
  slidesPerView: "1",
  simulateTouch: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      grabCursor: false,
      simulateTouch: false,
    },
  },
});
