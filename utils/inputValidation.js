const inputName = document.querySelector(".input__receiver_name");
const errorName = document.querySelector(".error__name");
const inputSurname = document.querySelector(".input__receiver_surname");
const errorSurname = document.querySelector(".error__surname");
const inputEmail = document.querySelector(".input__receiver_email");
const errorEmail = document.querySelector(".error__email");
const inputPhone = document.querySelector(".input__receiver_phone");
const errorPhone = document.querySelector(".error__phone");
const inputTax = document.querySelector(".input__receiver_tax-number");
const errorTax = document.querySelector(".error__tax");
const orderButton = document.querySelector(".result__btn");

let allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", " "];
let allowedTaxNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const showEmptyError = (input, error, message) => {
  if (input.value.length === 0) {
    input.classList.add("error__color");
    return (error.textContent = message);
  } else {
    error.textContent = "";
    input.classList.remove("error__color");
  }
};

const validateName = (name) => {
  // Проверка значения имени/фамилии
  return name.length > 0;
};

const validateEmail = (email) => {
  // Проверка значения email
  const emailRegex = /^[^s@]+@[^s@]+\.[^s@]+$/;
  const isValidEmail = emailRegex.test(email);
  return isValidEmail;
};

const validatePhoneNumber = (phoneNumber) => {
  // Проверка значения номера телефонa
  const phoneRegex = /^\+\d\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/;
  const isValidPhoneNumber = phoneRegex.test(phoneNumber);
  return isValidPhoneNumber;
};

const validateTaxNumber = (taxNumber) => {
  // Проверка ИНН
  return taxNumber.length === 14;
};

orderButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  showEmptyError(inputName, errorName, "Укажите имя");
  showEmptyError(inputSurname, errorSurname, "Введите фамилию");
  showEmptyError(inputEmail, errorEmail, "Укажите электронную почту");
  showEmptyError(inputPhone, errorPhone, "Укажите номер телефона");
  showEmptyError(inputTax, errorTax, "Укажите ИНН");
});

inputName.addEventListener("keypress", () => {
  if (!validateName(inputName)) {
    inputName.classList.remove("error__color");
    errorName.textContent = "";
  }
});

inputSurname.addEventListener("keypress", () => {
  if (!validateName(inputSurname)) {
    inputSurname.classList.remove("error__color");
    errorSurname.textContent = "";
  }
});

inputPhone.addEventListener("blur", (event) => {
  if (!validatePhoneNumber(inputPhone.value)) {
    inputPhone.classList.add("error__color");
    errorPhone.textContent = "Формат: +9 999 999 99 99";
  }
});

inputPhone.addEventListener("keyup", () => {
  if (validatePhoneNumber(inputPhone.value)) {
    inputPhone.classList.remove("error__color");
    errorPhone.textContent = "";
  }
});

inputPhone.addEventListener("keypress", (e) => {
  if (!allowedKeys.includes(e.key)) {
    e.preventDefault();
  }
});

inputEmail.addEventListener("blur", () => {
  if (!validateEmail(inputEmail.value)) {
    inputEmail.classList.add("error__color");
    errorEmail.textContent = "Проверьте адрес электронной почты";
  }
});

inputEmail.addEventListener("keyup", (event) => {
  if (validateEmail(inputEmail.value)) {
    inputEmail.classList.remove("error__color");
    errorEmail.textContent = "";
  }
});

inputTax.addEventListener("blur", (e) => {
  if (!validateTaxNumber(inputTax.value)) {
    inputTax.classList.add("error__color");
    errorTax.textContent = "Проверьте ИНН";
  }
});

inputTax.addEventListener("input", (event) => {
  const value = event.target.value;

  if (value.length > 14) {
    event.target.value = value.slice(0, 14);
  }
});

inputTax.addEventListener("keyup", (e) => {
  if (validateTaxNumber(inputTax.value)) {
    inputTax.classList.remove("error__color");
    errorTax.textContent = "";
  }
});

inputTax.addEventListener("keypress", (e) => {
  if (!allowedTaxNumbers.includes(e.key)) {
    e.preventDefault();
  }
});
