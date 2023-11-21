const cardList = [...document.querySelectorAll("[data-card-tid]")];

cardList.forEach((card) => {
  const quantityElement = card.querySelector(".counter__value");
  const plusButton = card.querySelector(".counter__sign_increment");
  const minusButton = card.querySelector(".counter__sign_decrement");
  const discountedPriceElement = card.querySelector(".card__price-value");
  const priceElement = card.querySelector(".card__sub-number");

  let discountedPrice = Number(discountedPriceElement.textContent);
  let price = Number(priceElement.textContent);
  let quantity = Number(quantityElement.textContent);

  // console.log("discountedPrice => ", discountedPrice);
  // console.log("price => ", price);
  // console.log("quantity => ", quantity);

  const unitPrice = price / quantity;
  const percent = ((price - discountedPrice) / price) * 100;

  plusButton.addEventListener("click", () => {
    quantity += 1;
    price = Math.ceil(unitPrice * quantity);
    discountedPrice = Math.ceil(price - (percent / 100) * price);
    console.log(discountedPrice);

    quantityElement.textContent = quantity;
  });

  priceElement.textContent = price;
  discountedPriceElement.textContent = discountedPrice;

  minusButton.addEventListener("click", () => {
    quantity -= 1;
    price = Math.ceil(unitPrice * quantity);
    discountedPrice = Math.ceil(price - (percent / 100) * price);
    console.log(discountedPrice);

    quantityElement.textContent = quantity;
    priceElement.textContent = price;
    discountedPriceElement.textContent = discountedPrice;
  });
});
