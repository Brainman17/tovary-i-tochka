const totalGoodsEl = document.querySelector(".result__goods");
const totalSumEl = document.querySelector(".result__total-sum");
const totalSaleSumEl = document.querySelector(".result__sale-sum");
const totalSaleEl = document.querySelector(".result__discount");
const salePriceList = [...document.querySelectorAll(".card__price-value")];
const cardCountList = [...document.querySelectorAll(".card__sub-number")];
const counterList = [...document.querySelectorAll(".counter__value")];
const checkboxInputList = document.querySelectorAll(".basket__checkbox");
const allCheckbox = document.querySelector(".basket__checkbox-all");

const getTotalCartCost = () => {
  let allCards = [...document.querySelectorAll("[data-card-tid]")];

  let totalCount = 0;
  let saleCost = 0;
  let cost = 0;
  let sale = 0;

  allCards = allCards.filter((check) => {
    const allCheckedCards = check.querySelector("input").checked;
    if (allCheckedCards) {
      allCheckbox.checked = true;
    } else {
      allCheckbox.checked = false;
    }
    return allCheckedCards;
  });

  allCards.forEach((card) => {
    totalCount += +card.dataset.count;
    saleCost += +card.dataset.salecost;
    cost += +card.dataset.cost;
    sale += +card.dataset.sale;
  });

  const saleWithMinus = sale === 0 ? sale : -sale;

  totalSumEl.textContent = new Intl.NumberFormat("ru-RU").format(cost);
  totalSaleSumEl.textContent = new Intl.NumberFormat("ru-RU").format(saleCost);
  totalGoodsEl.textContent = new Intl.NumberFormat("ru-RU").format(totalCount);
  totalSaleEl.textContent = new Intl.NumberFormat("ru-RU").format(
    saleWithMinus
  );
};

checkboxInputList.forEach((inp) =>
  inp.addEventListener("change", getTotalCartCost)
);
