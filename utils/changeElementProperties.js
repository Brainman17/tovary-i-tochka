const counterRestList = document.querySelectorAll(".counter__rest-value");
const cardPriceList = document.querySelectorAll(".card__price-value");
const cardDiscountedPriceList = document.querySelectorAll(".card__sub-number");
const cardChoiseList = document.querySelectorAll(".card__choise");
const cardSmallSizeList = document.querySelectorAll(".card__photo-small");
const counterValueList = document.querySelectorAll(".counter__value");
const photosForDeliveryList = document.querySelectorAll(".method__wrap_photo");

counterValueList.forEach((count) => {
  if (count.textContent === "2") {
    count.nextElementSibling.disabled = true;
  } else if (count.textContent === "1") {
    count.previousElementSibling.disabled = true;
  }
});

counterRestList.forEach((rest) => {
  if (rest.textContent > 2) {
    rest.parentElement.remove();
  }
});

cardPriceList.forEach((price) => {
  let numberString = price.textContent.toString();

  // Если число больше 4 символов
  if (numberString.length > 4) {
    // Вставляем пробел после первой цифры
    numberString = numberString.slice(0, 1) + " " + numberString.slice(1);
    // Вставляем пробел после четвёртой цифры
    numberString = numberString.slice(0, 5) + " " + numberString.slice(5);
    // Уменьшаем шрифт
    price.parentElement.classList.add("card__price_big");
  }

  price.textContent = numberString;
});

// Если количество товаров на доставку - 1, то убрать span
cardDiscountedPriceList.forEach((discoundPrice) => {
  let numberString = discoundPrice.textContent.toString();

  if (numberString.length > 4) {
    numberString = numberString.slice(0, 1) + " " + numberString.slice(1);
    numberString = numberString.slice(0, 5) + " " + numberString.slice(5);
  }

  discoundPrice.textContent = numberString;
});

// Если количество товаров на доставку - 1, то убрать span
cardChoiseList.forEach((choise) => {
  if (choise.textContent === "null") {
    choise.remove();
  }
});

// Если количество товаров на доставку - 1, то убрать span
cardSmallSizeList.forEach((size) => {
  if (size.textContent !== "null") {
    let numberSize = size.textContent.slice(8);
    size.textContent = numberSize;
  } else {
    size.remove();
  }
});

// Если количество товаров на доставку - 1, то убрать span
photosForDeliveryList.forEach((photo) => {
  if (photo.lastElementChild.textContent === "1") {
    photo.lastElementChild.remove();
  }
});
