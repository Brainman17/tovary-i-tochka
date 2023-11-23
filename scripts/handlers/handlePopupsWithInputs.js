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
  const selectedRadio = document.querySelector('input[name="card"]:checked');

  paymentCardInResult.src = selectedRadio.nextElementSibling.src;
  paymentCardInMethod.src = selectedRadio.nextElementSibling.src;

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
});

pickupButton.addEventListener("click", () => {
  pickupChapter.classList.remove("visibility");
  courierChapter.classList.add("visibility");
});
