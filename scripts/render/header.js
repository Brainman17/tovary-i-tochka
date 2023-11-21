class Header {
  render() {
    let headerHTML = "";

    headerHTML += `
        <img
        src="./images/burger.svg"
        alt="burger-menu"
        class="header__burger-menu"
        />
        <img
            src="./images/burger-small.svg"
            alt="burger-menu"
            class="header__burger-menu_small"
        />
        <h1 class="header__title">Товары и точка</h1>
        <img
            src="./images/search-small.svg"
            alt="input-search"
            class="input__search-icon_small"
        />
        <form class="header__form">
            <input type="text" placeholder="Я ищу..." class="input" />
            <img
            src="./images/search-icon.svg"
            alt="input-search"
            class="input__search-icon"
            />
        </form>
        <div class="header__tab">
            <img
            src="./images/person-icon.svg"
            alt="person-icon"
            class="header__tab_icon"
            />
            <span class="header__tab_caption">Профиль</span>
        </div>
        <div class="header__tab">
            <span class="header__tab_span-count">${PRODUCT.length}</span>
            <img
            src="./images/basket-icon.svg"
            alt="basket-icon"
            class="header__tab_icon header__tab_icon-basket"
            />
            <span class="header__tab_caption">Корзина</span>
        </div>
      `;

    ROOT_HEADER.innerHTML = headerHTML;
  }
}

const header = new Header();
header.render();
