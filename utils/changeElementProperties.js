const counterRestList = document.querySelectorAll(".counter__rest-value");
const cardPriceList = document.querySelectorAll(".card__price-value");
const cardDiscountedPriceList = document.querySelectorAll(".card__sub-number");
const cardChoiseList = document.querySelectorAll(".card__choise");
const cardSmallSizeList = document.querySelectorAll(".card__photo-small");
const counterValueList = document.querySelectorAll(".counter__value");
const photosForDeliveryList = document.querySelectorAll(".method__wrap_photo");
const counterWrap = document.querySelectorAll(".counter__wrap");

// Добавляем надпись "Осталось 2 шт"
counterRestList.forEach((rest) => {
  if (rest.textContent > 2) {
    rest.parentElement.remove();
  }
});

// Если сумма больше 4 символов, разделяем на пробелы и уменьшаем число
cardPriceList.forEach((price) => {
  let numberString = price.textContent;

  if (numberString.length > 4) {
    numberString = numberString.slice(0, 1) + " " + numberString.slice(1);
    numberString = numberString.slice(0, 5) + " " + numberString.slice(5);
    price.parentElement.classList.add("card__price_big");
  }

  price.textContent = numberString;
});

// Если сумма скидки больше 4 символов, то только разделяем на пробелы
cardDiscountedPriceList.forEach((discoundPrice) => {
  let numberString = discoundPrice.textContent;

  if (numberString.length > 4) {
    numberString = numberString.slice(0, 1) + " " + numberString.slice(1);
    numberString = numberString.slice(0, 5) + " " + numberString.slice(5);
  }

  discoundPrice.textContent = numberString;
});

// Если у товара нет размера и цвета, то удаляем элемент
cardChoiseList.forEach((choise) => {
  if (choise.textContent === "null") {
    choise.remove();
  }
});

// Переносим размер товара на маленьких разрешениях на карточку
cardSmallSizeList.forEach((size) => {
  if (size.textContent !== "null") {
    let numberSize = size.textContent.slice(8);
    size.textContent = numberSize;
  } else {
    size.remove();
  }
});

// Если у карточек количество товара равно 1, то убираем оранжевую плашку с числом
photosForDeliveryList.forEach((photo) => {
  if (photo.lastElementChild.textContent === "1") {
    photo.lastElementChild.remove();
  }
});
