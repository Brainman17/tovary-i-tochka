const productsArrowUp = document.querySelector(".basket__arrow-up");
const missProductsArrowUp = document.querySelector(".basket__miss-arrow-up");
const productsArrowDown = document.querySelector(".basket__arrow-down");
const products = document.querySelector(".basket__wrap_card");
const missProducts = document.querySelector(".miss__card-wrap");
const productsCheckbox = document.querySelector(".basket__wrap_checkbox");
const hiddenSection = document.querySelector(".basket__hidden-section");
const hiddenGoods = document.querySelector(".basket__hidden-goods");
const hiddenPrice = document.querySelector(".basket__hidden-price");
const totalCount = document.querySelector(".result__sale-sum");
const totalGoods = document.querySelector(".result__goods");
const missProductsArrowDown = document.querySelector(
  ".basket__miss-arrow-down"
);

// Показ/скрытие карточек
productsArrowUp.addEventListener("click", function () {
  products.style.display = "none";
  productsArrowDown.style.display = "block";
  this.style.display = "none";
  productsCheckbox.style.display = "none";
  hiddenSection.style.display = "block";
  hiddenPrice.textContent = totalCount.textContent;
  hiddenGoods.textContent = totalGoods.textContent;
});

productsArrowDown.addEventListener("click", function () {
  products.style.display = "flex";
  productsArrowUp.style.display = "block";
  hiddenSection.style.display = "none";
  this.style.display = "none";
  productsCheckbox.style.display = "block";
});

// Показ/скрытие отсутствующих карточек
missProductsArrowUp.addEventListener("click", function () {
  this.style.display = "none";
  missProducts.style.display = "none";
  missProductsArrowDown.style.display = "block";
});

missProductsArrowDown.addEventListener("click", function () {
  this.style.display = "none";
  missProducts.style.display = "block";
  missProductsArrowUp.style.display = "block";
});
