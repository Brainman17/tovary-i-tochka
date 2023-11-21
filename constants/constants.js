const PRODUCT = [
  {
    id: 1,
    image: "./images/photo_1.jpg",
    title: "Футболка UZcotton мужская",
    colorDescription: "Цвет: белый",
    sizeDescription: "Размер: 56",
    stock: "Коледино WB",
    manufacturer: "OOO Вайлдберриз",
    unitPrice: 1051,
    discount: 50.33301617507136,
    count: 1,
  },
  {
    id: 2,
    image: "./images/photo_2.jpg",
    title:
      "Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",
    colorDescription: "Цвет: прозрачный",
    sizeDescription: null,
    stock: "КолединоWB",
    manufacturer: "OOO Мегапрофстиль",
    unitPrice: 11500.235,
    discount: 8.695474483782288,
    count: 200,
  },
  {
    id: 3,
    image: "./images/photo_3.jpg",
    title:
      "Карандаши цветные Faber-Castell &laquo;Замок&raquo;, набор 24&nbsp;цвета, заточенные, шестигранные,Faber-Castell",
    colorDescription: null,
    sizeDescription: null,
    stock: "КолединоWB",
    manufacturer: "OOO Мегапрофстиль",
    unitPrice: 475,
    discount: 48,
    count: 2,
  },
];

const DELIVERY_OPTIONS = {
  pickupPoint: [
    {
      adress: "Бишкек, улица Ахматбека Суюмбаева, 12/1",
      rating: 4.99,
    },
    {
      adress: "Бишкек, улица Жукеева-Пудовкина, 77/1",
      rating: 4.99,
    },
    {
      adress: "Бишкек, улица Табышалиева, д. 57",
      rating: 4.99,
    },
  ],
  productsForDeliveryFirstPart: [
    {
      photoImage: "./images/photo_1.jpg",
      numberOfGoods: 0,
    },
    {
      photoImage: "./images/photo_2.jpg",
      numberOfGoods: 184,
    },
    {
      photoImage: "./images/photo_3.jpg",
      numberOfGoods: 2,
    },
  ],
  productsForDeliveryTwoPart: [
    {
      photoImage: "./images/photo_2.jpg",
      numberOfGoods: 16,
    },
  ],
};
