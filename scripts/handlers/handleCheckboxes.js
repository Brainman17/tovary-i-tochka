const basket = document.querySelector(".basket");
const checkboxes = basket.querySelectorAll("input[type = 'checkbox']");
const paymentCheckbox = document.querySelector(".payment__checkbox");
const paymentCheckboxCaption = document.querySelector(".payment__caption");
const orderBtn = document.querySelector(".result__btn");
const totalSum = document.querySelector(".result__sum");

// Обработка чекбокса "списать оплату"
paymentCheckbox.addEventListener("change", (event) => {
  if (event.target.checked) {
    orderBtn.textContent = "Оплатить " + totalSum.textContent;
    paymentCheckboxCaption.style.display = "none";
  } else {
    orderBtn.textContent = "Заказать";
    paymentCheckboxCaption.style.display = "block";
  }
});

const checkAll = (myCheckbox) => {
  if (myCheckbox.checked === true) {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = true;
    });
  } else {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }
};
