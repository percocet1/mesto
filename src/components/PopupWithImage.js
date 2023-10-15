import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector);
        this._popupImg = this._popup.querySelector('.popup__image');
        this._popupTitle = this._popup.querySelector('.popup__undertitle')
    }

    open(image){
        super.open();
        this._popupImg.src = image.link;
        this._popupImg.alt = image.alt;
        this._popupTitle.textContent = image.name
    }
}