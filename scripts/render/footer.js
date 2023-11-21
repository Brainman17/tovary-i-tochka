class Footer {
  render() {
    let footerHTML = "";

    footerHTML += `
    <footer class="footer">
      <p class="footer__caption">
        &copy;&nbsp;2023&nbsp;ООО &laquo;Товары и&nbsp;точка&raquo;
      </p>
    </footer>
    <div class="footer__menu">
      <img
        src="./images/home-footer-icon.svg"
        alt="home-footer-icon"
        class="footer__menu-icon"
      />
      <img
        src="./images/search-footer-icon.svg"
        alt="search-footer-icon"
        class="footer__menu-icon"
      />
      <div class='footer__basket-container'>
        <span class="footer__menu-icon_span-count">${PRODUCT.length}</span>
        <img
          src="./images/basket-footer-icon.svg"
          alt="basket-footer-icon"
          class="footer__menu-icon"
        />
      </div>
      
      <img
        src="./images/like-footer-icon.svg"
        alt="like-footer-icon"
        class="footer__menu-icon"
      />
      <img
        src="./images/person-footer-icon.svg"
        alt="person-footer-icon"
        class="footer__menu-icon"
      />
    </div>`;

    ROOT_FOOTER.innerHTML = footerHTML;
  }
}

const footer = new Footer();
footer.render();
