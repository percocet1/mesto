//Popup для  Редактирования профиля
const editPopup = document.getElementById('profile-popup')
const profileEditButton = document.querySelector('.profile__edit-button')
const editForm = document.getElementById('edit-form')
const username = document.querySelector('.profile__username')
const undertitle = document.querySelector('.profile__undertitle')
const nameInput = document.getElementById('name')
const jobInput =  document.getElementById('job')
//Закрытие попапов
let popups = document.querySelectorAll('.popup')
//Popup для открытия изображения
const popupImage = document.getElementById('image-popup')
const elementImg = document.querySelector('.popup__image')
const elementTitle = document.querySelector('.popup__undertitle')
//Popup для добавления карточек
const addPopup = document.getElementById('add-popup')
const addPlaceButton = document.querySelector('.profile__add-button')
const addForm = document.getElementById('add-form')
const placeInput = document.getElementById('place')
const placeLinkInput = document.getElementById('place-link')
//закрытие Popup
const closePopupButtons = document.querySelectorAll('.popup__close-button')
//T\emplate card add
const cardTemplate = document.querySelector('.card-template').content;
const deleteCardButton = cardTemplate.querySelector('.element__delete-button')
const elementsContainer = document.querySelector('.elements')
const objectValidation = {
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_disabled',
  inputSelector: '.popup__input',
  inputErrorClass: 'popup__input_error',
}
// Начальный массив карточек
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
      alt: 'Архыз'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
      alt: 'Челябинская область'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
      alt: 'Иваново'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
      alt: 'Камчатка'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
      alt: 'Холмогорский район'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
      alt: 'Байкал'
    }
  ]; 
//Открытие попапа для редактирования профиля
function openPopup(popup){
  popup.classList.add('popup_opened')
  document.addEventListener('keydown', closePopupOnEsc); //
}

profileEditButton.addEventListener('click', function(e){
  openPopup(editPopup)
  nameInput.value = username.textContent
  jobInput.value = undertitle.textContent
})
//функция закрытия esc/overlay/clickOnCloseButton
function closePopupOnEsc(evt){
  if (evt.key === 'Escape') {
    const popupClose = document.querySelector('.popup_opened');
    closePopup(popupClose);
  };
};

function closePopup(popups){
  popups.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupOnEsc);
}

closePopupButtons.forEach((closeElement) => {
  closeElement.addEventListener('click', (evt) => {
    popups = evt.target.closest('.popup');
    closePopup(popups);
  })
})
// закрытие по клику на оверлей
function popupAddClosest(evt){
  return evt.target.closest('.popup');
};
popups.forEach((closeElement) => {
  closeElement.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      const closePopupClickonOverlay = popupAddClosest(evt);
      closePopup(closePopupClickonOverlay);
    };
  });
});

//подтверждение формы редактирования и слушатель
function editProfileFormSubmit (evt) {
  evt.preventDefault();
  username.textContent = nameInput.value;
  undertitle.textContent = jobInput.value;
  closePopup(editPopup);
}

editForm.addEventListener('submit', editProfileFormSubmit)
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
    elementImg.alt = cardPhoto.alt;
    elementTitle.textContent = evt.target.closest('.element').textContent;
  })
}

function createCard(cardInfo){
    const cardElement = cardTemplate.cloneNode(true);
    const cardElementTitle = cardElement.querySelector('.element__title');                   
    const cardElementImage = cardElement.querySelector('.element__image');
    const cardElementLike = cardElement.querySelector('.element__button-like');              
    const cardElementDel = cardElement.querySelector('.element__delete-button');
    cardElementTitle.textContent = cardInfo.name;
    cardElementImage.src = cardInfo.link;
    cardElementImage.alt = cardInfo.alt;   
    console.log(cardElementDel)
    deleteCard(cardElementDel);
    likeCard(cardElementLike);
    openImage(cardElementImage);
    return cardElement;
}

initialCards.forEach((cardInfo) => {
    elementsContainer.append(createCard(cardInfo));
});

//сброс общих стилей
function resetValidationStyle (objectValidation)  {
  disableSubmitInput(objectValidation);
  disableSubmitButton(objectValidation);
};

//Валидация инпутов
function disableSubmitInput(objectValidation) {
  const inputList = document.querySelectorAll(objectValidation.inputSelector);

  inputList.forEach((input) => {
    input.classList.remove(objectValidation.inputErrorClass);
    input.nextElementSibling.textContent = '';
  });
}

/** Функция валидации кнопки Submit */
function disableSubmitButton(objectValidation) {
  const buttonSubmint = document.querySelectorAll(objectValidation.submitButtonSelector);

  buttonSubmint.forEach((button) => {
    button.classList.add(objectValidation.inactiveButtonClass);
    button.setAttribute('disabled', '');
  });
}
