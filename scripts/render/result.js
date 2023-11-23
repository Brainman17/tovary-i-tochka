class Result {
  render() {
    let resultHTML = "";
    let totalPrice = 0;
    let totalGoods = 0;
    let totalDiscountedPrice = 0;
    let totalDiscount = 0;

    PRODUCT.forEach(({ count, unitPrice, discount }) => {
      let unitTotalPrice = count * unitPrice;
      let priceWithDiscount =
        unitTotalPrice - (unitTotalPrice * discount) / 100;
      let discountPrice = (unitTotalPrice * discount) / 100;

      totalPrice += unitTotalPrice;
      totalGoods += count;
      totalDiscountedPrice += priceWithDiscount;
      totalDiscount += discountPrice;
    });

    let str1 = String(totalPrice);
    let str2 = String(totalDiscountedPrice);
    let str3 = String(totalDiscount);

    const handleBigNumbers = (string) => {
      if (string.length === 6) {
        let chars = string.split("");
        chars.splice(3, 0, " ").join("");
        const newStr = chars.join("");
        return newStr;
      } else if (string.length > 4) {
        string = string.slice(0, 1) + " " + string.slice(1);
        string = string.slice(0, 5) + " " + string.slice(5);
      }
      return string;
    };

    totalPrice = handleBigNumbers(str1);
    totalDiscountedPrice = handleBigNumbers(str2);
    totalDiscount = handleBigNumbers(str3);

    resultHTML += `
    <div class="result__wrap">
    <div>
      <h3 class="result__title">Итого</h3>
      <p class="result__caption"><span class="result__goods">${totalGoods}</span> товара</p>
      <p class="result__caption">Скидка</p>
      <p class="result__caption">Доставка</p>
    </div>
    <div>
      <p class="result__sum"><span class="result__sale-sum">${totalDiscountedPrice}</span> сом</p>
      <p class="result__caption result__caption_right"><span class="result__total-sum">${totalPrice}</span> сом</p>
      <p class="result__caption result__caption_right"><span class="result__discount">−${totalDiscount}</span> сом</p>
      <p class="result__caption result__caption_right">Бесплатно</p>
    </div>
    </div>
    <div class="delivery">
      <div class="result__wrap result__wrap_display_none">
        <h4 class="result__subtitle">Доставка в пункт выдачи</h4>
        <img
          src="./images/pencil.svg"
          alt="pencil"
          class="delivery__pencil"
        />
      </div>
    </div>
    <p class="delivery__address">Бишкек, улица Ахматбека Суюмбаева, 12/1</p>
    <time class="delivery__date">5–8 фев</time>
    <div class="result__wrap delivery__note">
      <img
        src="./images/result-check.svg"
        alt="result-check"
        class="delivery__check"
      />
      <p class="delivery__caption">
        Обратная доставка товаров на&nbsp;склад при отказе &mdash;
        <span class="delivery__caption_span">бесплатно</span>
      </p>
    </div>
    <div class="payment">
      <div class="result__wrap result__wrap_display_none">
        <h4 class="result__subtitle">Оплата картой</h4>
        <img
          src="./images/pencil.svg"
          alt="pencil"
          class="payment__pencil"
        />
      </div>
      <div class="payment__wrap">
        <img
          src="./images/mir.svg"
          alt="bank-card"
          class="payment__card-image card-result"
        />
        <span class="payment__card-number"
          >1234 12&bull;&bull; &bull;&bull;&bull;&bull; 1234</span
        >
      </div>
      <form class="payment__label">
        <input type="checkbox" id="payment" class="payment__checkbox" />
        <label for="payment" class="payment__checkbox_caption"
          >Списать оплату сразу</label
        >
        <p class="payment__caption">
          Спишем оплату с&nbsp;карты при получении
        </p>
      </form>
    </div>
    <button type="submit" class="result__btn">Заказать</button>
    <input
      type="checkbox"
      id="rule"
      class="result__agreement-checkbox"
      checked
    />
    <label for="rule" class="result__agreement-caption">
      <span class="result__agreement-caption"
        >Соглашаюсь<span class="result__agreement-caption_underline"
          >с правилами пользования торговой площадкой</span
        >и<span class="result__agreement-caption_underline">возврата</span>
      </span>
    </label>`;

    ROOT_RESULT.innerHTML = resultHTML;
  }
}

const result = new Result();
result.render();
