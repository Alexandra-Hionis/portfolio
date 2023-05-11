var swiper = new Swiper(".swiperIntro", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Socials navigation +
function toggleNavSocials() {
  const navMenu = document.querySelector(".nav-socials");

  const xSocials = document.getElementById("plus-icon-socials");

  navMenu.classList.toggle("openSocials");

  if (navMenu.classList.contains("openSocials")) {
    xSocials.style.transform = "rotate(45deg)";
  } else {
    xSocials.style.transform = "rotate(90deg)";
  }
}
// Pages/links navigation +
function toggleNavPages() {
  const navMenu = document.querySelector(".nav-pages");
  const xPages = document.getElementById("plus-icon-pages");

  navMenu.classList.toggle("openPages");

  if (navMenu.classList.contains("openPages")) {
    xPages.style.transform = "rotate(45deg)";
  } else {
    xPages.style.transform = "rotate(90deg)";
  }
}
