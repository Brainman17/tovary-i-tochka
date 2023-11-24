const cardList = [...document.querySelectorAll("[data-card-tid]")];
const totalGoodsElement = document.querySelector(".result__goods");
const totalSumElement = document.querySelector(".result__total-sum");
const totalSaleSumElement = document.querySelector(".result__sale-sum");
const totalSaleElement = document.querySelector(".result__discount");
const saleCostList = [...document.querySelectorAll(".card__price-value")];
const costList = [...document.querySelectorAll(".card__sub-number")];

// const plusButton = document.querySelectorAll(".counter__sign_increment");

cardList.forEach((card) => {
  const quantityElement = card.querySelector(".counter__value");
  const salePriceElement = card.querySelector(".card__price-value");
  const priceElement = card.querySelector(".card__sub-number");
  const plusButton = card.querySelector(".counter__sign_increment");
  const minusButton = card.querySelector(".counter__sign_decrement");

  // Приводим к числу
  let discountedPrice = +salePriceElement.textContent.replaceAll(" ", "");
  let price = +priceElement.textContent.replaceAll(" ", "");
  let quantity = +quantityElement.textContent.replaceAll(" ", "");

  // Узнаем процент разницы и цену за единицу товара
  const unitPrice = price / quantity;
  const percent = ((price - discountedPrice) / price) * 100;

  plusButton.addEventListener("click", () => {
    quantity += 1;

    price = Math.ceil(unitPrice * quantity);
    discountedPrice = Math.ceil(price - (percent / 100) * price);

    quantityElement.textContent = quantity;
    priceElement.textContent = new Intl.NumberFormat("ru-RU").format(price);
    salePriceElement.textContent = new Intl.NumberFormat("ru-RU").format(
      discountedPrice
    );
  });

  minusButton.addEventListener("click", () => {
    quantity -= 1;
    price = Math.ceil(unitPrice * quantity);
    discountedPrice = Math.ceil(price - (percent / 100) * price);

    quantityElement.textContent = quantity;
    priceElement.textContent = new Intl.NumberFormat("ru-RU").format(price);
    salePriceElement.textContent = new Intl.NumberFormat("ru-RU").format(
      discountedPrice
    );
  });
});
