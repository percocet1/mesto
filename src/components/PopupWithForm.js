import Popup from './Popup.js';

export default class PopupWithForm extends Popup{
    constructor({submitForm}, popupSelector){
        super(popupSelector);
        this._submitForm = submitForm;
        this._popupForm = this._popup.querySelector('.popup__form')
        this._inputList = Array.from(this._popupForm.querySelectorAll('.popup__input'))
    }

    _getInputValues(){
        this._inputValues = {};
        this._inputList.forEach((input)=>{
            this._inputValues[input.name] = input.value
        })
        return this._inputValues;
    }

    setEventListeners(){
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt)=>{
            evt.preventDefault();
            this._submitForm(this._getInputValues())
        })
    }

    close(){
        super.close();
        this._popupForm.reset();
    }
}