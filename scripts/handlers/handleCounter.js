const cardList = [...document.querySelectorAll("[data-card-tid]")];
const totalGoodsElement = document.querySelector(".result__goods");
const totalSumElement = document.querySelector(".result__total-sum");
const totalSaleSumElement = document.querySelector(".result__sale-sum");
const totalSaleElement = document.querySelector(".result__discount");
const saleCostList = [...document.querySelectorAll(".card__price-value")];
const costList = [...document.querySelectorAll(".card__sub-number")];

const handleDisableButtons = (currentCount, minusButton, plusButton, rest) => {
  currentCount <= 1
    ? (minusButton.disabled = true)
    : (minusButton.disabled = false);

  if (rest && currentCount === 2) {
    plusButton.disabled = true;
  } else {
    plusButton.disabled = false;
  }
};

cardList.forEach((card) => {
  const quantityElement = card.querySelector(".counter__value");
  const salePriceElement = card.querySelector(".card__price-value");
  const priceElement = card.querySelector(".card__sub-number");
  const plusButton = card.querySelector(".counter__sign_increment");
  const minusButton = card.querySelector(".counter__sign_decrement");
  const restInscription = card.querySelector(".counter__rest");

  // Приводим к числу
  let discountedPrice = +salePriceElement.textContent.replaceAll(" ", "");
  let price = +priceElement.textContent.replaceAll(" ", "");
  let quantity = +quantityElement.textContent.replaceAll(" ", "");
  const priceDifference = price - discountedPrice;

  handleDisableButtons(quantity, minusButton, plusButton, restInscription);

  // Узнаем процент разницы и цену за единицу товара
  const unitPrice = price / quantity;
  const percent = ((price - discountedPrice) / price) * 100;
  showPopupSale(priceDifference, percent, priceElement);

  plusButton.addEventListener("click", function () {
    quantity += 1;
    price = Math.ceil(unitPrice * quantity);
    discountedPrice = Math.ceil(price - (percent / 100) * price);
    const priceDifference = price - discountedPrice;

    handleDisableButtons(quantity, minusButton, this, restInscription);

    quantityElement.textContent = quantity;
    priceElement.textContent = new Intl.NumberFormat("ru-RU").format(price);
    salePriceElement.textContent = new Intl.NumberFormat("ru-RU").format(
      discountedPrice
    );

    card.dataset["count"] = +card.dataset["count"] + 1;
    card.dataset["cost"] = Math.ceil(price);
    card.dataset["salecost"] = Math.ceil(discountedPrice);
    card.dataset["sale"] = Math.ceil(
      +card.dataset["cost"] - +card.dataset["salecost"]
    );
    getTotalCartCost();
    showPopupSale(priceDifference, percent, priceElement);
  });

  minusButton.addEventListener("click", function () {
    quantity -= 1;
    price = Math.ceil(unitPrice * quantity);
    discountedPrice = Math.ceil(price - (percent / 100) * price);
    const priceDifference = price - discountedPrice;

    handleDisableButtons(quantity, this, plusButton, restInscription);

    quantityElement.textContent = quantity;
    priceElement.textContent = new Intl.NumberFormat("ru-RU").format(price);
    salePriceElement.textContent = new Intl.NumberFormat("ru-RU").format(
      discountedPrice
    );

    card.dataset["count"] = Math.ceil(+card.dataset["count"] - 1);
    card.dataset["cost"] = Math.ceil(+card.dataset["cost"] - unitPrice);
    card.dataset["salecost"] = Math.ceil(discountedPrice);
    card.dataset["sale"] = Math.ceil(
      +card.dataset["cost"] - +card.dataset["salecost"]
    );
    getTotalCartCost();
    showPopupSale(priceDifference, percent, priceElement);
  });
});
