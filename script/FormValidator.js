
 const validationConfig = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  submitInactiveClass: 'popup__button-submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});

 class FormValidator {
  constructor(config, form){
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._submitInactiveClass = config.submitInactiveClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;

    this._form = form;
    this._formElement = document.querySelector(this._form)
    this._buttonSubmit = this._formElement.querySelector(this._submitButtonSelector)
    this._inputList = this._formElement.querySelectorAll(this._inputSelector);
  }

  _showInputError(inputElement){
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    inputElement.classList.add(this._errorClass);
    errorElement.textContent = inputElement.validationMessage;
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._errorClass);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = "";
  }

  _handleFormInput(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
  }  else {
    this._hideInputError(inputElement);
  }
  }  /**Функция переключения кнопки сабмит */
  _toggleButton() {
    this._isFormValid = this._formElement.checkValidity();
    this._buttonSubmit.disabled = !this._isFormValid;
    this._buttonSubmit.classList.toggle(this._submitInactiveClass, !this._isFormValid);
  }

  _addInputListners() {
  this._toggleButton();

  this._inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      this._handleFormInput(inputElement);
      this._toggleButton();
      });
   })
  };

  clearValidationForm() {
  this._toggleButton();
  this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
      })
  }

  enableValidation() {
    this._addInputListners();
  };

}
export { FormValidator, validationConfig }