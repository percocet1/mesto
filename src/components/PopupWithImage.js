import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector);
        this._popupImg = this._popup.querySelector('.popup__image');
        this._popupTitle = this._popup.querySelector('.popup__undertitle')
    }

    open(name, image){
        super.open();
        this._popupImg.src = image;
        this._popupImg.alt = name;
        this._popupTitle.textContent = name
    }
}