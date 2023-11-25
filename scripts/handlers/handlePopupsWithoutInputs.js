const infoIconList = document.querySelectorAll(".card__info-icon");
const freeSignature = document.querySelectorAll(".delivery__caption_span");
const cardCaptionList = document.querySelectorAll(".card_position_relative");
const priceList = document.querySelectorAll(".card__wrap_price-small");
const priceValue = document.querySelector(".popup__price-value");
const percentValue = document.querySelector(".popup__percent-value");
const infoPopup = document.querySelector(".popup__info");
const signaturePopup = document.querySelector(".popup__stock");
const discountedPopup = document.querySelector(".popup__count");

// Показ попапа
const handleShowPopup = (popup, coordinates) => {
  const location = coordinates.getBoundingClientRect();

  popup.style.display = "block";
  popup.style.position = "absolute";
  popup.style.top = location.top + window.scrollY + 25 + "px";
  popup.style.left = location.right + window.scrollX - 150 + "px";
};

// Скрытие попапа
const handleHidePopup = (popup) => {
  popup.style.display = "none";
};

// Попап, если доставка бесплатная
freeSignature.forEach((item) => {
  item.addEventListener("mouseenter", function () {
    handleShowPopup(signaturePopup, this);
  });

  item.addEventListener("mouseleave", () => {
    handleHidePopup(signaturePopup);
  });
});

// Попап, показывающий юр.адрес и название компании
cardCaptionList.forEach((wrapCaption) => {
  const icon = wrapCaption.querySelector(".card__info-icon");

  icon.addEventListener("mouseover", function () {
    if (this.parentElement.textContent.includes("Мегапрофстиль")) {
      infoPopup.firstElementChild.textContent = "OOO «МЕГАПРОФСТИЛЬ»";
      infoPopup.lastElementChild.textContent =
        " 129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34";
    } else if (this.parentElement.textContent.includes("Вайлдберриз")) {
      infoPopup.firstElementChild.textContent = "OOO «ВАЙЛДБЕРРИЗ»";
      infoPopup.lastElementChild.textContent =
        " 142181, Московская обл, г.о. Подольск, д Коледино, тер. Индустриальный парк Коледино, д. 6, стр. 1";
    }

    handleShowPopup(infoPopup, this);
  });

  icon.addEventListener("mouseout", () => {
    handleHidePopup(infoPopup);
  });
});

// Попап, показывающий сумму скидки и сумму процента разницы
const showPopupSale = (sale, percent, price) => {
  price.addEventListener("mouseover", function () {
    priceValue.textContent = -sale;
    percentValue.textContent = Math.ceil(percent);

    handleShowPopup(discountedPopup, this);
  });

  price.addEventListener("mouseout", () => {
    handleHidePopup(discountedPopup);
  });
};
