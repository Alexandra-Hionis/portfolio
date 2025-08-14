const projects = [
  {
    imgSrc: "assets/images/honeygo-pediatrics.jpg",
    alt: "image of Honeygo Pediatrics website",
    h2ProjectName: "Honeygo Pediatrics",
    buttonProjectLink: "/honeygo-pediatrics.html",
    buttonText: "view project",
    buttonRepoLink: "https://github.com/Alexandra-Hionis/honeygo-pediatrics",
    buttonRepoText: "github",
  },
  // {
  //   imgSrc: "assets/images/sunnyd-seltzers.png",
  //   alt: "image of sunnyd cocktails website",
  //   h2ProjectName: "SunnyD Seltzers",
  //   buttonProjectLink: "/sunnyd-cocktails.html",
  //   buttonText: "view project",
  //   buttonRepoLink: "",
  //   buttonRepoText: "",
  // },

  // {
  //   imgSrc: "assets/images/white-lily.jpg",
  //   alt: "image of white lily website",
  //   h2ProjectName: "White Lily",
  //   buttonProjectLink: "/white-lily.html",
  //   buttonText: "view project",
  //   buttonRepoLink: "",
  //   buttonRepoText: "",
  // },
  // {
  //   imgSrc: "assets/images/martha-white.jpg",
  //   alt: "image of martha white website",
  //   h2ProjectName: "Martha White",
  //   buttonProjectLink: "/martha-white.html",
  //   buttonText: "view project",
  //   buttonRepoLink: "",
  //   buttonRepoText: "",
  // },
  {
    imgSrc: "assets/images/chanhassen-dinner-theatre-weddings.png",
    alt: "image of chanhassen dinner theatres wedding and events website",
    h2ProjectName: "Chanhassen Dinner theatre weddings & events",
    buttonProjectLink: "/chanhassen-theatre.html",
    buttonText: "View Project",
    buttonRepoLink: "",
    buttonRepoText: "",
  },
  {
    imgSrc: "assets/images/litoplas.png",
    alt: "image of litoplas pricing app",
    h2ProjectName: "Litoplas Pricing App",
    buttonProjectLink: "/litoplas.html",
    buttonText: "View Project",
    buttonRepoLink: "",
    buttonRepoText: "",
  },
  // {
  //   imgSrc: "assets/images/broad-city-quiz.png",
  //   alt: "image of Broad City Quiz",
  //   h2ProjectName: "Broad City Quiz",
  //   buttonProjectLink: "/broad-city.html",
  //   buttonText: "View Project",
  //   buttonRepoLink: "https://github.com/Alexandra-Hionis/broad-city-quiz",
  //   buttonRepoText: "github",
  // },
  // {
  //   imgSrc: "assets/images/tip-calculator.png",
  //   alt: "image of Tip Calculator",
  //   h2ProjectName: "Tip Calculator",
  //   buttonProjectLink: "/tip-calculator.html",
  //   buttonText: "View Project",
  //   buttonRepoLink: "https://github.com/Alexandra-Hionis/Tip-Calculator",
  //   buttonRepoText: "github",
  // },
  {
    imgSrc: "assets/images/fireside.png",
    alt: "image of Fireside Services",
    h2ProjectName: "Fireside Services",
    buttonProjectLink: "/fireside-services.html",
    buttonText: "View Project",
    buttonRepoLink: "",
    buttonRepoText: "",
  },
  {
    imgSrc: "assets/images/dance-party.png",
    alt: "image of Dance Party App",
    h2ProjectName: "Dance Party App",
    buttonProjectLink: "/dance-party.html",
    buttonText: "View Project",
    buttonRepoLink: "https://github.com/Alexandra-Hionis/dance-party",
    buttonRepoText: "github",
  },
  // {
  //   imgSrc: "assets/images/funfetti.jpg",
  //   alt: "image of funfetti website",
  //   h2ProjectName: "Funfetti",
  //   buttonProjectLink: "/funfetti.html",
  //   buttonText: "view project",
  //   buttonRepoLink: "",
  //   buttonRepoText: "",
  // },
];

const swiperProjects = document.querySelector(".swiper-projects");

if (swiperProjects) {
  // Ensure that the swiper-projects container exists
  // Loop through each project and add it to the DOM
  for (let i = 0; i < projects.length; i++) {
    swiperProjects.innerHTML += `
      <div class="swiper-slide">
        <img src="${projects[i].imgSrc}" alt="${projects[i].alt}">
        <h2>${projects[i].h2ProjectName}</h2>
        <div class="swiper-slide__button-container">
          <a class="button" href="${projects[i].buttonProjectLink}">${projects[i].buttonText}</a>
          <a class="button" target="_blank" href="${projects[i].buttonRepoLink}">${projects[i].buttonRepoText}</a>
        </div>
      </div>`;
  }

  // Hide buttons if href is empty
  const buttons = document.getElementsByClassName("button");
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    if (button.getAttribute("href") === "") {
      button.style.display = "none";
    }
  }
} else {
  console.warn(
    "Swiper projects container not found. Make sure the .swiper-projects element exists in the DOM."
  );
}
