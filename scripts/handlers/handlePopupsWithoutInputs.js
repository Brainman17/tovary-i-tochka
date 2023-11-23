const infoIcon = document.querySelectorAll(".card__info-icon");
const freeSignature = document.querySelectorAll(".delivery__caption_span");
const discountedPrice = document.querySelectorAll(".card__sub-price");
const priceList = document.querySelectorAll(".card__sub-number");
const priceValue = document.querySelector(".popup__price-value");
const percentValue = document.querySelector(".popup__percent-value");
const infoPopup = document.querySelector(".popup__info");
const signaturePopup = document.querySelector(".popup__stock");
const discountedPopup = document.querySelector(".popup__count");

const handleShowPopup = (nodeList, popup) => {
  nodeList.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      popup.style.display = "block";
      popup.style.position = "absolute";
      popup.style.left = item.offsetLeft - 120 + "px";
      popup.style.top = item.offsetTop + item.offsetHeight + "px";
    });
  });

  nodeList.forEach((item) => {
    item.addEventListener("mouseleave", () => {
      popup.style.display = "none";
    });
  });
};

handleShowPopup(infoIcon, infoPopup);
handleShowPopup(freeSignature, signaturePopup);
handleShowPopup(discountedPrice, discountedPopup);

priceList.forEach((element) => {
  element.addEventListener("mouseover", function () {
    const price = this.textContent.replaceAll(" ", "");

    const parentElement = this.parentElement.parentNode;
    const discountedPrice = parentElement.firstElementChild.firstElementChild;
    const discountedPriceNumber = +discountedPrice.textContent
      .split(" ")
      .join("");

    const priceNumber = +price.split(" ").join("");

    const percent = Math.ceil(
      ((priceNumber - discountedPriceNumber) / priceNumber) * 100
    );

    const numberDifference = new Intl.NumberFormat("ru-RU").format(
      discountedPriceNumber - priceNumber
    );

    priceValue.textContent = numberDifference;
    percentValue.textContent = percent;
    discountedPopup.style.display = "block";
  });

  element.addEventListener("mouseout", () => {
    discountedPopup.style.display = "none";
  });
});
