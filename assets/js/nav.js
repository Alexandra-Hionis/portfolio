// Get the elements
const navSocials = document.querySelector(".nav-socials");
const xSocials = document.getElementById("plus-icon-socials");
const navMenu = document.querySelector(".nav-pages");
const xPages = document.getElementById("plus-icon-pages");

// Socials navigation toggle
function toggleNavSocials() {
  if (navSocials) {
    // Check if navSocials exists
    navSocials.classList.toggle("openSocials");

    if (navSocials.classList.contains("openSocials")) {
      if (xSocials) {
        // Check if xSocials exists
        xSocials.style.transform = "rotate(45deg)";
      }
    } else {
      if (xSocials) {
        // Check if xSocials exists
        xSocials.style.transform = "rotate(90deg)";
      }
    }
  }
}

// Check if xSocials exists before adding event listener
if (xSocials) {
  xSocials.addEventListener("click", toggleNavSocials);
}

// Pages/links navigation toggle
function toggleNavPages() {
  if (navMenu) {
    // Check if navMenu exists
    navMenu.classList.toggle("openPages");

    if (navMenu.classList.contains("openPages")) {
      if (xPages) {
        // Check if xPages exists
        xPages.style.transform = "rotate(45deg)";
      }
    } else {
      if (xPages) {
        // Check if xPages exists
        xPages.style.transform = "rotate(90deg)";
      }
    }
  }
}

// Check if xPages exists before adding event listener
if (xPages) {
  xPages.addEventListener("click", toggleNavPages);
}
