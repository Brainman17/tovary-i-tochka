const counterWrapList = document.querySelectorAll(".counter__wrap");

counterWrapList.forEach((counterWrap) => {
  const quantityElement = counterWrap.querySelector(".counter__value");
  const plusButton = counterWrap.querySelector(".counter__sign_increment");
  const minusButton = counterWrap.querySelector(".counter__sign_decrement");

  plusButton.addEventListener("click", () => {
    let quantity = Number(quantityElement.textContent);
    quantity += 1;
    quantityElement.textContent = quantity;
  });

  minusButton.addEventListener("click", () => {
    let quantity = Number(quantityElement.textContent);
    quantity -= 1;
    quantityElement.textContent = quantity;
  });
});
