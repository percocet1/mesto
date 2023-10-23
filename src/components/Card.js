export default class Card {
    // 1. Объект карточки. 2. Template элемент. 3. Id пользователя 4. Объект данных 5. Handle объект
    constructor(data, templateSelector, userId, authorData, handleActions) {
      this._card = data;
      this._cardName = this._card.name;
      this._cardImage = this._card.link;
      this._cardAlt = this._card.name
      this._likeArea = this._card.likes

      this._templateSelector = templateSelector;
      // Данные для пользователя
      this._userId = userId;
      this._cardId = authorData.cardId;
      this._authorId = authorData.authorId;
      // Handle данные
      this._handleCardZoom = handleActions.handleCardZoom;
      this._handleCardDelete = handleActions.handleCardDelete;
      this._handleCardLike = handleActions.handleCardLike;
      this._handleCardDeleteLike = handleActions.handleCardDeleteLike;
    }

    _getTemplate(){
        const cardElement = document.querySelector(this._templateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true)

        return cardElement
    }
    // Метод удаления карточки
    deleteCard(){
        this._cardElement.remove();
        this._cardElement = null;
    }
    _checkLike() {
      return this._likeArea.find((userLike) => userLike._id === this._userId);
    }
  
    _checkAuthorCard(){
        if (this._userId === this._authorId) {
            this._cardElementDelete.addEventListener('click', () =>  this._handleCardDelete(this, this._cardId));
          } else {
            this._cardElementDelete.remove();
          }
    }
    // Метод создания карточки
    createCard() {
        this._cardElement = this._getTemplate()
        this._cardElementTitle = this._cardElement.querySelector('.element__title')
        this._cardElementImage = this._cardElement.querySelector('.element__image')
        this._cardElementLike = this._cardElement.querySelector('.element__button-like')
        this._cardElementDelete = this._cardElement.querySelector('.element__delete-button')
        this._cardElementLikeCounter = this._cardElement.querySelector('.element__like-counter');

        this._cardElementTitle.textContent = this._cardName;
        this._cardElementImage.src = this._cardImage;
        this._cardElementImage.alt = this._cardName;

        this._setEventListeners();

        this.renderCardLike(this._card);

        this._checkAuthorCard()

        return this._cardElement;
    }

    renderCardLike(card) {
        this._likeArray = card.likes;
        if (this._likeArea.length === 0) {
          this._cardElementLikeCounter.textContent = '';
        } else {
  
          this._cardElementLikeCounter.textContent = this._likeArea.length;
        }
        if (this._checkLike()) {
          this._cardElementLike.classList.add('element__button-like_active');
        } else {
          this._cardElementLike.classList.remove('element__button-like_active');
        }
      }

    _addLike(){
        if (this._checkLike()) {
          this._handleCardDeleteLike(this._cardId);
          
        } else {
          this._handleCardLike(this._cardId);
        }
      }
      
    _setEventListeners(){
      this._cardElementLike.addEventListener('click', () => {
        this._addLike()
      })
      this._cardElementImage.addEventListener('click', () => {
        this._handleCardZoom(this._cardName, this._cardImage)
      })
      this._cardElementDelete.addEventListener('click', ()=> {
        this._handleCardDelete(this, this._cardId)
      })
    }
}