class Payment {
  render() {
    let paymentHTML = "";

    paymentHTML += `
        <div class="method__wrap">
        <h2 class="method__title">Способ оплаты</h2>
        <button class="method__btn-change">Изменить</button>
        </div>
        <div class="method__wrap_payment">
            <img
            src="./images/bank-card.svg"
            alt="bank-card"
            class="payment__card-image"
            />
            <span class="payment__card-number payment__card-number_big"
            >1234 12&bull;&bull; &bull;&bull;&bull;&bull; 1234</span
            >
            <data class="payment__card-data">01/30</data>
        </div>
        <p class="payment__card-number-caption">
            Спишем оплату с карты при получении
        </p>
    `;

    ROOT_PAYMENT.innerHTML = paymentHTML;
  }
}

const payment = new Payment();
payment.render();
