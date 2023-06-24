//Объект валидации
const formValidationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-submit',
    inactiveButtonClass: 'popup__button-submit_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }
  
  
//Вывод ошибки валидации
function showInputError(evt, validationConfig) {
  const input = evt.target;
  const inputId = input.id;
  const errorElement = document.querySelector(`#${inputId}-error`);

  if (input.validity.valid) {
    input.classList.remove(validationConfig.inputErrorClass)
    errorElement.textContent = '';
  } else {
    input.classList.add(validationConfig.inputErrorClass);
    errorElement.textContent = input.validationMessage;
  }
}

//Выключение/включение сабмита формы
function toggleButtonSubmit(form, validationConfig) {
  const buttonSubmint = form.querySelector(validationConfig.submitButtonSelector);
  const isFormValid = form.checkValidity();

  buttonSubmint.disabled = !isFormValid;
  buttonSubmint.classList.toggle('popup__button-submit_disabled', !isFormValid);
}

//слушатель всех инпутов
function addInputListners(form, validationConfig) {
  const inputList = Array.from(form.querySelectorAll(validationConfig.inputSelector));

  inputList.forEach(function (item) {
    item.addEventListener('input', (evt) => {
      showInputError(evt, validationConfig)
    })
  });
}
//Валидация всех форм
function enableValidation(validationConfig) {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));

  formList.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    form.addEventListener('input', () => {
        toggleButtonSubmit(form, validationConfig);
    });

    addInputListners(form, validationConfig);
    toggleButtonSubmit(form, validationConfig);
  });
}  

//Включение валидации
enableValidation(formValidationConfig);