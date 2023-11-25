const infoIconList = document.querySelectorAll(".card__info-icon");
const freeSignature = document.querySelectorAll(".delivery__caption_span");
const cardCaptionList = document.querySelectorAll(".card_position_relative");
const priceList = document.querySelectorAll(".card__wrap_price-small");
const priceValue = document.querySelector(".popup__price-value");
const percentValue = document.querySelector(".popup__percent-value");
const infoPopup = document.querySelector(".popup__info");
const signaturePopup = document.querySelector(".popup__stock");
const discountedPopup = document.querySelector(".popup__count");

// Попап, если доставка бесплатная
freeSignature.forEach((item) => {
  item.addEventListener("mouseenter", function () {
    signaturePopup.style.display = "block";
    const offsetTop = this.offsetTop;
    const offsetLeft = this.offsetLeft;

    signaturePopup.style.position = "absolute";
    signaturePopup.style.left = offsetLeft - 120 + "px";
    signaturePopup.style.top = offsetTop + 30 + "px";
  });
});

freeSignature.forEach((item) => {
  item.addEventListener("mouseleave", () => {
    signaturePopup.style.display = "none";
  });
});

// Попап, показывающий юр.адрес и название компании
cardCaptionList.forEach((wrapCaption) => {
  const icon = wrapCaption.querySelector(".card__info-icon");

  icon.addEventListener("mouseover", function () {
    const coordinates = icon.getBoundingClientRect();
    if (this.parentElement.textContent.includes("Мегапрофстиль")) {
      infoPopup.firstElementChild.textContent = "OOO «МЕГАПРОФСТИЛЬ»";
      infoPopup.lastElementChild.textContent =
        " 129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34";
    } else if (this.parentElement.textContent.includes("Вайлдберриз")) {
      infoPopup.firstElementChild.textContent = "OOO «ВАЙЛДБЕРРИЗ»";
      infoPopup.lastElementChild.textContent =
        " 142181, Московская обл, г.о. Подольск, д Коледино, тер. Индустриальный парк Коледино, д. 6, стр. 1";
    }

    infoPopup.style.display = "block";
    infoPopup.style.position = "absolute";
    infoPopup.style.top = coordinates.top + window.scrollY + 25 + "px";
    infoPopup.style.left = coordinates.right + window.scrollX - 150 + "px";
  });

  icon.addEventListener("mouseout", () => {
    infoPopup.style.display = "none";
  });
}); // Попап, показывающий сумму скидки и сумму процента разницы

priceList.forEach((wrap) => {
  const salePrice = wrap.querySelector(".card__price-value");
  const price = wrap.querySelector(".card__sub-number");

  price.addEventListener("mouseover", function () {
    const salePriceNumber = +salePrice.textContent.replaceAll(" ", "");
    const priceNumber = +price.textContent.replaceAll(" ", "");

    const percent = Math.ceil(
      ((priceNumber - salePriceNumber) / priceNumber) * 100
    );
    const numberDifference = new Intl.NumberFormat("ru-RU").format(
      salePriceNumber - priceNumber
    );

    const coordinates = this.getBoundingClientRect();

    priceValue.textContent = numberDifference;
    percentValue.textContent = percent;

    discountedPopup.style.display = "block";
    discountedPopup.style.position = "absolute";
    discountedPopup.style.top = coordinates.top + window.scrollY + 25 + "px";
    discountedPopup.style.left = coordinates.left + window.scrollX - 30 + "px";
  });

  price.addEventListener("mouseout", () => {
    discountedPopup.style.display = "none";
  });
});
