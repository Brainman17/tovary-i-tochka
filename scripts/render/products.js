class Products {
  render() {
    let productsList = "";
    let productsMissingList = "";
    let totalPrice = 0;
    let roundedPrice = 0;

    PRODUCT.forEach((object) => {
      totalPrice = object.count * object.unitPrice;

      const discountedPrice = totalPrice - (totalPrice * object.discount) / 100;
      roundedPrice = Math.ceil(discountedPrice);

      productsList += `
        <article class="card basket__card" >
         <div class="card__wrap">
              <div class="card__wrap_checkbox card__wrap_position_relative">
                <div class="card__wrap_checkbox-input">
                  <input type="checkbox" class="basket__checkbox" id="option-${object.id}" />
                  <label class="basket__checkbox_label" for="option-${object.id}"> </label>
                </div>
                <img
                  src=${object.image}
                  alt="photo"
                  class="card__photo"
                />
                <span class="card__photo-small">${object.sizeDescription}</span>
              </div>
              <div class="card__wrap_description">
                <div class="card__wrap_price-small">
                  <p class="card__price">
                      ${totalPrice}
                    <span class="card__currency">сом</span>
                  </p>
                  <p class="card__sub-price"><span class="card__sub-number">${totalPrice}</span> сом</p>
                </div>
                <h3 class="card__title">${object.title}</h3>
                <div class="card__wrap_choise">
                  <p class="card__choise card__choise_description_color">${object.colorDescription}</p>
                  <p class="card__choise card__choise_description_size">${object.sizeDescription}</p>
                </div>
                <span class="card__caption">${object.stock}</span>
                <span class="card__caption"
                  >${object.manufacturer}
                  <img
                    src="./images/info.svg"
                    alt="info"
                    class="card__info-icon"
                /></span>
              </div>
            </div> 
            <div class="card__wrap">
              <div class="card__wrap_counter">
                <div class="counter">
                  <div class="counter__wrap">
                    <div class="counter__sign counter__sign_decrement">
                      &#8722;
                    </div>
                    <div class="counter__value">${object.count}</div>
                    <div class="counter__sign counter__sign_increment">
                      &#43;
                    </div>
                  </div>
                  <span class="counter__rest">Осталось <span class="counter__rest-value">${object.count}</span> шт.</span>
                </div>
                <div class="card__wrap_icons card__icons_position_absolute">
                  <div class="card__icons card__icons_like"></div>
                  <div class="card__icons card__icons_basket"></div>
                </div>
              </div>
              <div class="card__wrap_price">
                <p class="card__price ">
                <span class="card__price-value">${roundedPrice}</span> 
                  <span class="card__currency">сом</span>
                </p>
                <p class="card__sub-price"><span class="card__sub-number">${totalPrice}</span> сом</p>
              </div>
            </div>
          </article> 
        `;

      productsMissingList += `
        <article class="card miss__card">
            <div class="miss__card_wrap">
            <div class="card__wrap_position_relative">
                <img
                src=${object.image}
                alt="photo"
                class="card__photo card__grayscale"
                 />
                <span class="card__photo-small">${object.sizeDescription}</span>
            </div>
            
            <div class="miss__wrap_description">
                <h3 class="miss__subtitle miss__grayscale">
                ${object.title}
                </h3>
                <div class="card__wrap_choise">
                <p class="card__choise miss__grayscale">${object.colorDescription}</p>
                <p class="card__choise miss__grayscale">${object.sizeDescription}</p>
                </div>
            </div>
            </div>
                <div class="miss__wrap_icons">
                    <div class="miss__card-icons miss__card-icons_type_like"></div>
                    <div class="miss__card-icons miss__card-icons_type_basket" ></div>
                </div>
        </article>   
          `;
    });

    ROOT_PRODUCTS.innerHTML = productsList;
    ROOT_MISS_PRODUCTS.innerHTML = productsMissingList;
  }
}

const productsPage = new Products();

productsPage.render();
