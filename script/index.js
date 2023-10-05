import { initialCards, validationConfig } from "./constants.js"
import { FormValidator} from "./FormValidator.js"
import { Card } from "./Card.js"
//Popup для  Редактирования профиля
const editPopup = document.getElementById('profile-popup')
const profileEditButton = document.querySelector('.profile__edit-button')
const editForm = document.getElementById('edit-form')
const username = document.querySelector('.profile__username')
const undertitle = document.querySelector('.profile__undertitle')
const nameInput = document.getElementById('name')
const jobInput =  document.getElementById('job')
//Закрытие попапов
const popup = document.querySelectorAll('.popup')
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
//Контейнер карточек
const elementsContainer = document.querySelector('.elements')

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
    const popup = getClosestEventPopup(evt);
    closePopup(popup);
  })
})
// Ф-ция возвращения событий
const getClosestEventPopup = (evt) =>{
  return evt.target.closest('.popup')
}
// Ф-ция закрытия попапа кликом на оверлей
popup.forEach((closeElement) => {
  closeElement.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      const closePopupClickonOverlay = getClosestEventPopup(evt);
      closePopup(closePopupClickonOverlay);
    };
  });
});

// Ф-ция подтверждение формы редактирования и слушатель
function editProfileFormSubmit (evt) {
  evt.preventDefault();
  username.textContent = nameInput.value;
  undertitle.textContent = jobInput.value;
  closePopup(editPopup);
}

editForm.addEventListener('submit', editProfileFormSubmit)
// Слушатель открытия попапа для добавления карточки/добавление карточки
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
    alt: placeInput.value
  });
  evt.target.reset();
  closePopup(addPopup);
}
addForm.addEventListener('submit', addCard)

function openImage(cardPhoto){
    openPopup(popupImage);
    elementImg.src = cardPhoto.link;
    elementImg.alt = cardPhoto.alt;
    elementTitle.textContent = cardPhoto.name
}


function createCard(cardData){
  const card = new Card(cardData, '.card-template', openImage)
  
  return card.createCard(); 
}

initialCards.forEach((cardData) => {
    elementsContainer.append(createCard(cardData));
});

//сброс общих стилей
const profileValidationForm = new FormValidator(validationConfig, '#edit-form');
profileValidationForm.enableValidation();

const placeValidationForm = new FormValidator(validationConfig, '#add-form');
placeValidationForm.enableValidation();
