const counterRestList = document.querySelectorAll(".counter__rest-value");
const cardPriceList = document.querySelectorAll(".card__price-value");
const cardDiscoundPriceList = document.querySelectorAll(".card__sub-number");
const cardChoiseList = document.querySelectorAll(".card__choise");
const cardSmallSizeList = document.querySelectorAll(".card__photo-small");

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

cardDiscoundPriceList.forEach((discoundPrice) => {
  let numberString = discoundPrice.textContent.toString();

  if (numberString.length > 4) {
    numberString = numberString.slice(0, 1) + " " + numberString.slice(1);
    numberString = numberString.slice(0, 5) + " " + numberString.slice(5);
  }

  discoundPrice.textContent = numberString;
});

cardChoiseList.forEach((choise) => {
  if (choise.textContent === "null") {
    choise.remove();
  }
});

cardSmallSizeList.forEach((size) => {
  if (size.textContent !== "null") {
    let numberSize = size.textContent.slice(8);
    size.textContent = numberSize;
  } else {
    size.remove();
  }
});
