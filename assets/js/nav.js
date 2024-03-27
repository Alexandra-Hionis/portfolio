const navSocials = document.querySelector(".nav-socials");

let xSocials = document.getElementById("plus-icon-socials");

const navMenu = document.querySelector(".nav-pages");
const xPages = document.getElementById("plus-icon-pages");

// Socials navigation +
function toggleNavSocials() {
  navSocials.classList.toggle("openSocials");

  if (navSocials.classList.contains("openSocials")) {
    xSocials.style.transform = "rotate(45deg)";
  } else {
    xSocials.style.transform = "rotate(90deg)";
  }
}
xSocials.addEventListener("click", toggleNavSocials);

// Pages/links navigation +
function toggleNavPages() {
  navMenu.classList.toggle("openPages");

  if (navMenu.classList.contains("openPages")) {
    xPages.style.transform = "rotate(45deg)";
  } else {
    xPages.style.transform = "rotate(90deg)";
  }
}
xPages.addEventListener("click", toggleNavPages);
