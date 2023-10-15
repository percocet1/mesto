 export default class Card {
    constructor({data}, templateSelector, openImage){
        this._name = data.name
        this._link = data.link
        this._alt = data.alt

        this._templateSelector = templateSelector

        this._openImage = openImage
    }

    _getTemplate(){
        const cardElement = document.querySelector(this._templateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true)

        return cardElement
    }

    _likeCard(){
        this._cardElementLike.classList.toggle('element__button-like_active')
    }

    _deleteCard(){
        this._cardElement.remove();
        this._cardElement = null;
    }

    _setEventListeners(){
        this._cardElementLike.addEventListener('click', () => {
            this._likeCard();
        })
        this._cardElementDelete.addEventListener('click', () => {
           this._deleteCard(); 
        })
        this._cardElementImage.addEventListener('click', ()=>{
            this._openImage({
                link: this._link,
                alt: this._alt,
                name: this._name,
            })
        })
    }
    createCard(){
        this._cardElement = this._getTemplate()
        this._cardElementTitle = this._cardElement.querySelector('.element__title')
        this._cardElementImage = this._cardElement.querySelector('.element__image')
        this._cardElementLike = this._cardElement.querySelector('.element__button-like')
        this._cardElementDelete = this._cardElement.querySelector('.element__delete-button')

        this._cardElementTitle.textContent = this._name;
        this._cardElementImage.src = this._link;
        this._cardElementImage.alt = this._alt;

        this._setEventListeners();

        return this._cardElement;
    }
}
