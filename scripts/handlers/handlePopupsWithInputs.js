const popupCrossPayment = document.querySelector(".popup__cross-payment");
const paymentPopup = document.querySelector(".popup__payment");
const overlay = document.querySelector(".overlay");
const paymentCardInResult = document.querySelector(".card-result");
const paymentCardInMethod = document.querySelector(".card-method");
const paymentSelectionButton = document.querySelector(".popup__btn-payment");
const paymentForm = document.querySelector("#payment-form");
const paymentPencil = document.querySelector(".payment__pencil");
const paymentChangeButton = document.querySelector(".button__change-payment");
const deliveryPencil = document.querySelector(".delivery__pencil");
const deliveryPopup = document.querySelector(".popup__delivery");
const popupCrossDelivery = document.querySelector(".popup__cross-delivery");
const deliveryChangeButton = document.querySelector(".button__change-delivery");
const deliverySelectionButton = document.querySelector(".popup__btn-delivery");
const pickupButton = document.querySelector(".popup__delivery-button-pickup");
const courierButton = document.querySelector(".popup__delivery-button-courier");
const courierChapter = document.querySelector(".courier");
const pickupChapter = document.querySelector(".pickup");
const resultAdressTitle = document.querySelector(".result__delivery-title");
const resultAdress = document.querySelector(".result__delivery-adress");
const methodAdressTitle = document.querySelector(".method__pickup");
const methodAdress = document.querySelector(".method__adress");
const methodRating = document.querySelector(".method__rating");
const methodDate = document.querySelector(".method__date");
const methodIcon = document.querySelector(".method__icon");

// Попап оплаты
paymentForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
});

paymentPencil.addEventListener("click", () => {
  overlay.style.display = "flex";
  paymentPopup.style.display = "block";
});

paymentChangeButton.addEventListener("click", () => {
  overlay.style.display = "flex";
  paymentPopup.style.display = "block";
});

popupCrossPayment.addEventListener("click", () => {
  overlay.style.display = "none";
  paymentPopup.style.display = "none";
});

paymentSelectionButton.addEventListener("click", () => {
  const selectedInput = document.querySelector('input[name="card"]:checked');

  paymentCardInResult.src = selectedInput.parentElement.nextElementSibling.src;
  paymentCardInMethod.src = selectedInput.parentElement.nextElementSibling.src;

  overlay.style.display = "none";
  paymentPopup.style.display = "none";
});

// Попап доставки
deliveryPencil.addEventListener("click", () => {
  overlay.style.display = "flex";
  deliveryPopup.style.display = "block";
});

deliveryChangeButton.addEventListener("click", () => {
  overlay.style.display = "flex";
  deliveryPopup.style.display = "block";
});

popupCrossDelivery.addEventListener("click", () => {
  overlay.style.display = "none";
  deliveryPopup.style.display = "none";
});

courierButton.addEventListener("click", () => {
  pickupChapter.classList.add("visibility");
  courierChapter.classList.remove("visibility");
  pickupButton.classList.remove("popup__delivery-button-pickup");
  courierButton.classList.add("popup__delivery-button-pickup");
});

pickupButton.addEventListener("click", () => {
  courierChapter.classList.add("visibility");
  pickupChapter.classList.remove("visibility");
  pickupButton.classList.add("popup__delivery-button-pickup");
  courierButton.classList.remove("popup__delivery-button-pickup");
});

deliverySelectionButton.addEventListener("click", () => {
  const selectedInput = document.querySelector('input[name="adress"]:checked');
  const wrapAdress =
    selectedInput.parentElement.parentElement.firstElementChild
      .nextElementSibling;

  if (selectedInput.value === "adress-pickup") {
    resultAdressTitle.textContent = "Доставка в пункт выдачи";
    methodAdressTitle.textContent = "Пункт выдачи";

    resultAdress.textContent = wrapAdress.firstElementChild.textContent;
    methodAdress.textContent = wrapAdress.firstElementChild.textContent;
    methodRating.textContent =
      wrapAdress.lastElementChild.firstElementChild.nextElementSibling.textContent;
    methodRating.style.display = "block";
    methodIcon.style.display = "block";
    methodDate.textContent = "Ежедневно с 10 до 21";
  } else if (selectedInput.value === "adress-courier") {
    resultAdressTitle.textContent = "Доставка курьером";
    methodAdressTitle.textContent = "Курьером";
    resultAdress.textContent = wrapAdress.textContent;
    methodAdress.textContent = wrapAdress.textContent;
    methodDate.textContent = "";
    methodRating.style.display = "none";
    methodIcon.style.display = "none";
  }

  overlay.style.display = "none";
  deliveryPopup.style.display = "none";
});
