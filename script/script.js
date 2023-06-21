//Popup для  Редактирования профиля
let editPopup = document.getElementById('profile-popup')
let profileEditButton = document.querySelector('.profile__edit-button')
let editForm = document.getElementById('edit-form')
let username = document.querySelector('.profile__username')
let undertitle = document.querySelector('.profile__undertitle')
let nameInput = document.getElementById('name')
let jobInput =  document.getElementById('job')
//Закрытие попапов
let buttonClose = document.querySelector('.popup__close-button')
let popup = document.querySelectorAll('.popup')
//Popup для открытия изображения
let popupImage = document.getElementById('image-popup')
let elementImg = document.querySelector('.popup__image')
let elementTitle = document.querySelector('.popup__undertitle')
//Popup для добавления карточек
let addPopup = document.getElementById('add-popup')
let addPlaceButton = document.querySelector('.profile__add-button')
let addForm = document.getElementById('add-form')
let placeInput = document.getElementById('place')
let placeLinkInput = document.getElementById('place-link')
//закрытие Popup
let closePopupButton = document.querySelectorAll('.popup__close-button')
let closePopupOverlay
//Template card add
let cardTemplate = document.querySelector('.card-template').content;
let deleteCardButton = cardTemplate.querySelector('.element__delete-button')
let elementsContainer = document.querySelector('.elements')
// Начальный массив карточек
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 
//Открытие попапа для редактирования профиля
function openPopup(popup){
  popup.classList.add('popup_opened')
}

profileEditButton.addEventListener('click', function(e){
  openPopup(editPopup)
  nameInput.value = username.textContent
  jobInput.value = undertitle.textContent
})
//подтверждение формы редактирования и слушатель
function handleFormSubmit (evt) {
  evt.preventDefault();
  username.textContent = nameInput.value;
  undertitle.textContent = jobInput.value;
  closePopup();
}

editForm.addEventListener('submit', handleFormSubmit)
//Открытие попапа для добавления карточки/добавление карточки
addPlaceButton.addEventListener('click', ()=>{
  openPopup(addPopup)
})

function renderCard(card){
  elementsContainer.prepend(createCard(card))
}
function addCard(evt){
  evt.preventDefault();
  renderCard({
    name: placeInput.value,
    link: placeLinkInput.value,
  });
  evt.target.reset();
  closePopup(addPopup);
}
addForm.addEventListener('submit', addCard)
//функция закрытия
function closePopup(popup){
  popup.classList.remove('popup_opened');
}

closePopupButton.forEach((closeElement) => {
  closeElement.addEventListener('click', (evt) => {
    popup = evt.target.closest('.popup');
    closePopup(popup);
  })
})
//Кнопка лайка
function likeCard(button){
  button.addEventListener('click', (evt)=>{
    evt.target.classList.toggle('element__button-like_active')
  })
}
//Ф-ция удаления карточки
function deleteCard(cardInfo){
  cardInfo.addEventListener('click', (evt)=>{
    evt.target.closest('.element').remove()
  })
}
//Ф-ция открытия карточки для просмотра
function openImage(cardPhoto){
  cardPhoto.addEventListener('click', (evt)=>{
    openPopup(popupImage);
    elementImg.src = cardPhoto.src;
    elementTitle.textContent = evt.target.closest('.element').textContent;
  })
}

function createCard(cardInfo){
    let cardElement = cardTemplate.cloneNode(true);
    let cardElementTitle = cardElement.querySelector('.element__title');                   
    let cardElementImage = cardElement.querySelector('.element__image');
    let cardElementLike = cardElement.querySelector('.element__button-like');              
    let cardElementDel = cardElement.querySelector('.element__delete-button');
    cardElementTitle.textContent = cardInfo.name;
    cardElementImage.src = cardInfo.link;
    console.log(cardElementDel)
    deleteCard(cardElementDel);
    likeCard(cardElementLike);
    openImage(cardElementImage);
    return cardElement;
}

initialCards.forEach((cardInfo) => {
    elementsContainer.append(createCard(cardInfo));
});
