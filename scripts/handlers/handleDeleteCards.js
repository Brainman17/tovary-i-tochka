const cardBasketList = document.querySelectorAll(".card__icons_basket");
const missCardBasketList = document.querySelectorAll(
  ".miss__card-icons_type_basket"
);
const popupCartList = document.querySelectorAll(".popup__cart");

cardBasketList.forEach((basketIcon) => {
  basketIcon.addEventListener("click", (evt) => {
    const card = evt.target.closest(".card");
    card.remove();
  });
});

missCardBasketList.forEach((basketIcon) => {
  basketIcon.addEventListener("click", (evt) => {
    const card = evt.target.closest(".miss__card");
    card.remove();
  });
});

popupCartList.forEach((cart) => {
  cart.addEventListener("click", function () {
    const adress = this.closest("label");
    adress.remove();
  });
});
