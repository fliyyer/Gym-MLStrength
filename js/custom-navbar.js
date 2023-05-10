class customNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<nav class="nav">
      <a href="/" class="logo">ML<span>Strength</span></a>
      <div class="hamburger">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>
      <div class="nav__link hide">
        <a href="/">Home</a>
        <a href="../html/available-time.html">Available Time</a>
        <a href="../html/classes.html">ML Strength Classes</a>
        <a href="../html/gallery.html">Gallery</a>
        <a href="../html/login.html" class="btn-login">Login</a>
      </div>
    </nav>`;

    const hamburger = document.querySelector('.hamburger');
    const navLink = document.querySelector('.nav__link');

    hamburger.addEventListener('click', () => {
      navLink.classList.toggle('hide');
    });
  }
}
customElements.define('custom-navbar', customNavbar);
