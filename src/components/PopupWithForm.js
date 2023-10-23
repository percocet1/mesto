import Popup from './Popup.js';

export default class PopupWithForm extends Popup{
    constructor( popupSelector, {callbackFormSubmit}){
        super(popupSelector);
        this._callbackFormSubmit = callbackFormSubmit;
        this._popupForm = this._popup.querySelector('.popup__form')
        this._buttonSubmit = this._popupForm.querySelector('.popup__button-submit');
        this._buttonSubmitText = this._buttonSubmit.textContent;
        this._inputList = Array.from(this._popupForm.querySelectorAll('.popup__input'))
    }

    _getInputValues(){
        const inputValues = {};
        this._inputList.forEach((input)=>{
            inputValues[input.name] = input.value
        })
        return inputValues;
    }

    putSavingProcessText() {
        this._buttonSubmit.textContent = 'Сохранение...';
    }
      returnSavingProcessText() {
        this._buttonSubmit.textContent = this._buttonSubmitText;
    }

    setEventListeners(){
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt)=>{
            evt.preventDefault();
            this._callbackFormSubmit(this._getInputValues())
        })
    }

    close(){
        super.close();
        this._popupForm.reset();
    }
}