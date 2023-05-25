//Contact

class Contact extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="contact" id="contact">
    <h1>Contact</h1>
    <hr size="2" color="black" />
    <h2>Have a question or want to work together?</h2>
    <p> Please feel free to reach out! You can find me on Upwork for any Freelance request. 
      <br>You can also reach out via email. I typically respond within 24 hours.</p>
      <a href="mailto:alexandra.hionis@gmail.com"><div class="contact__info">
      <img src="assets/images/envelope-regular.svg" alt="envelope icon"/>
     <p>LET'S CONNECT</a>
  </section>
        `;
  }
}

customElements.define("contact-component", Contact);
