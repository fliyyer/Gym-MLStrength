// custom Footer
class customFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<footer>
      <p>Copyright © 2023 - ML-Strength</p>
    </footer>`;
    }
  }
  customElements.define('custom-footer', customFooter);