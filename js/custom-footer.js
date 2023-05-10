// custom Footer
class customFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<footer>
      <ul>
        <li><a href="https://instagram.com/" target='_blank'><img src="../img/ig.png" alt="Tiktok"></a></li>
        <li><a href="https://www.tiktok.com/" target='_blank'><img src="../img/tiktok.png" alt="Instagram"></a></li>
      </ul>
      <p>Copyright © 2023 - ML-Strength</p>
    </footer>
    
    `;
    }
  }
  customElements.define('custom-footer', customFooter);