class Recipient {
  render() {
    let recipientHTML = "";

    recipientHTML += `
    <div class="method__wrap">
            <h2 class="method__title">Получатель</h2>
          </div>
          <div class="method__receiver">
            <div class="method__wrap_one">
              <div class="input__group">
                <input
                  type="text"
                  placeholder=""
                  id="name"
                  class="input__receiver input__receiver_name"
                />
                <label for="name">Имя</label>
                <span class="error error__name"></span>
              </div>
              <div class="input__group">
                <input
                  type="text"
                  placeholder=""
                  id="surname"
                  class="input__receiver input__receiver_surname"
                />
                <label for="surname">Фамилия</label>
                <span class="error error__surname"></span>
              </div>
            </div>
            <div class="method__wrap_two">
              <div class="input__group">
                <input
                  type="email"
                  id="email"
                  placeholder=""
                  class="input__receiver input__receiver_email"
                />
                <label for="email">Почта</label>
                <span class="error error__email"></span>
              </div>
              <div class="input__group">
                <input
                  type="text"
                  class="input__receiver input__receiver_phone"
                  id="tel"
                  placeholder=""
                  required
                />
                <label for="tel">Телефон</label>
                <span class="error error__phone"></span>
              </div>
              <div class="input__group">
                <input
                  type="text"
                  class="input__receiver input__receiver_tax-number"
                  id="tax"
                  placeholder=""
                />
                <label for="tax">ИНН</label>
                <span class="error error__tax"></span>
                <span class="input__span">Для таможенного оформления</span>
              </div>
            </div>
          </div>
    `;

    ROOT_RECIPIENT.innerHTML = recipientHTML;
  }
}

const recipient = new Recipient();
recipient.render();
