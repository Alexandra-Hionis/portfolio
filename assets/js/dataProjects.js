const projects = [
  {
    imgSrc: "assets/images/sunnyd-seltzers.png",
    alt: "image of sunnyd cocktails website",
    h2ProjectName: "SunnyD Seltzers",
    buttonProjectLink: "/sunnyd-cocktails.html",
    buttonText: "view project",
    buttonRepoLink: "",
    buttonRepoText: "",
  },
  {
    imgSrc: "assets/images/funfetti.jpg",
    alt: "image of funfetti website",
    h2ProjectName: "Funfetti",
    buttonProjectLink: "/funfetti.html",
    buttonText: "view project",
    buttonRepoLink: "",
    buttonRepoText: "",
  },
  {
    imgSrc: "assets/images/honeygo-pediatrics.jpg",
    alt: "image of Honeygo Pediatrics website",
    h2ProjectName: "Honeygo Pediatrics",
    buttonProjectLink: "/honeygo-pediatrics.html",
    buttonText: "view project",
    buttonRepoLink: "https://github.com/Alexandra-Hionis/honeygo-pediatrics",
    buttonRepoText: "github",
  },
  {
    imgSrc: "assets/images/chanhassen-dinner-theatre-weddings.png",
    alt: "image of chanhassen dinner theatres wedding and events website",
    h2ProjectName: "Chanhassen Dinner theatre weddings & events",
    buttonProjectLink: "/chanhassen-theatre.html",
    buttonText: "View Project",
    buttonRepoLink: "",
    buttonRepoText: "github",
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
  {
    imgSrc: "assets/images/career-prep.png",
    alt: "image of Career prep and professional development website",
    h2ProjectName: "Career Prep and Professional Development <br> coming soon",
    buttonProjectLink: "",
    buttonText: "Coming Soon",
    buttonRepoLink: "https://github.com/Alexandra-Hionis/career-coaching",
    buttonRepoText: "github",
  },
];

for (var i = 0; i < projects.length; i++) {
  document.querySelector(".swiper-projects").innerHTML += `
<div class="swiper-slide">
    <img src="${projects[i].imgSrc}" alt="${projects[i].alt}"> 
    <div>
        <h2>${projects[i].h2ProjectName}</h2>
        <a class="button" href="${projects[i].buttonProjectLink}">${projects[i].buttonText}</a>
        <a class="button" target="_blank" href="${projects[i].buttonRepoLink}">${projects[i].buttonRepoText}</a>
        </div>
    </div>`;
}
// Hide all buttons if href="" is blank
const buttons = document.getElementsByClassName("button");
for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  if (button.getAttribute("href") === "") {
    button.style.display = "none";
  }
}
