class Delivery {
  render() {
    let productsDeliveryListFirstPart = "";
    let productsDeliveryListTwoPart = "";
    let productsAdress = "";

    productsAdress += `
      <p class="method__value-subtitle">
          ${DELIVERY_OPTIONS.pickupPoint[0].adress}
      </p>
      <div class="method__wrap_delivery">
          <img src="./images/star.svg" alt="star" class="method__icon" />
          <span class="method__caption">${DELIVERY_OPTIONS.pickupPoint[0].rating}</span>
        <p class="method__caption">Ежедневно с 10 до 21</p>
      </div> `;

    DELIVERY_OPTIONS.productsForDeliveryFirstPart.forEach(
      ({ photoImage, numberOfGoods }) => {
        productsDeliveryListFirstPart += `
        <div class="method__wrap_photo">
            <img
            src=${photoImage}
            alt="photo"
            class="method__photo-delivery"
            />
            <span class="method__photo-value">${numberOfGoods}</span> 
        </div> 
        `;
      }
    );

    DELIVERY_OPTIONS.productsForDeliveryTwoPart.forEach(
      ({ photoImage, numberOfGoods }) => {
        productsDeliveryListTwoPart += `
        <div class="method__wrap_photo">
            <img
            src=${photoImage}
            alt="photo"
            class="method__photo-delivery"
            />
            <span class="method__photo-value">${numberOfGoods}</span>  
        </div>
        `;
      }
    );

    ROOT_ADRESS.innerHTML = productsAdress;
    ROOT_PRODUCTS_DELIVERY_FIRST_PART.innerHTML = productsDeliveryListFirstPart;
    ROOT_PRODUCTS_DELIVERY_TWO_PART.innerHTML = productsDeliveryListTwoPart;
  }
}

const delivery = new Delivery();
delivery.render();
