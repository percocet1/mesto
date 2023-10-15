import { initialCards, 
        validationConfig, 
        nameInput, 
        jobInput,
        popupAddPlaceButton,
        popupProfileFormSelector,
        popupAddFormSelector, 
        popupEditProfileButton} from "../utils/utils.js"
import FormValidator from "../components/FormValidator.js"
import Card from "../components/Card.js"
import PopupWithForm from "../components/PopupWithForm.js"
import PopupWithImage from "../components/PopupWithImage.js"
import Section from '../components/Section.js'
import UserInfo from '../components/UserInfo.js'

import '../pages/index.css'
//Popup с изображением карточки места
const cardImagePopup = new PopupWithImage('.popup_img-preview');
cardImagePopup.setEventListeners();
//Рендер карточек "из коробки" на страницу
const elementsContainer = new Section({items: initialCards, renderer: (item)=>{
  const card = new Card({data: item}, '.card-template', ()=>{cardImagePopup.open(item)})
  const cardElement = card.createCard();
  elementsContainer.addItem(cardElement)
}}, '.elements')

elementsContainer.renderedItems(initialCards)
//Создание Popup`a с редактированием профиля
const userInfo = new UserInfo({userNameSelector: '.profile__username', userUndertitleSelector: '.profile__undertitle'})

const popupFormProfile = new PopupWithForm({submitForm: (profileData)=>{
  userInfo.setUserInfo({
    username: profileData.username,
    userjob: profileData.userjob
  });
  popupFormProfile.close()
  }
}, '#profile-popup')
popupFormProfile.setEventListeners()
//Слушатель кнопки редактирования + внесение в значения инпутов при открытии актуальных данных
popupEditProfileButton.addEventListener('click', ()=>{
  popupFormProfile.open()
  profileFormValidation.clearValidationForm()
  const getActualUserInfo = userInfo.getUserInfo();
  nameInput.setAttribute('value', getActualUserInfo.username);
  jobInput.setAttribute('value', getActualUserInfo.userjob);
})
//Ф-ция создания карточки + попап добавление карточки
const createNewCard = (cardData) =>{
  const newCard = new Card({data: cardData}, '.card-template', ()=>{cardImagePopup.open(cardData)})
  return newCard.createCard();
}

const popupAddCard = new PopupWithForm({submitForm: (cardData) => {
  elementsContainer.addItem(createNewCard({
    name: cardData.place,
    link: cardData.placelink,
    alt: cardData.place
  }))
  popupAddCard.close();
}}, '#add-popup')

popupAddPlaceButton.addEventListener('click', ()=>{
  popupAddCard.open()
  addFormValidation.clearValidationForm()
})
popupAddCard.setEventListeners();

const profileFormValidation = new FormValidator(validationConfig, popupProfileFormSelector)
profileFormValidation.enableValidation()

const addFormValidation = new FormValidator(validationConfig, popupAddFormSelector)
addFormValidation.enableValidation()
//Валидатор
/** Отобразить карточки на странице*/
/*
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
// Формы
const popupFormPlace = document.getElementById("add-form")
const popupFormProfile = document.getElementById('edit-form')
// Popup для открытия изображения
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

// Включение валидации форм
const profileValidationForm = new FormValidator(validationConfig, popupFormProfile);
profileValidationForm.enableValidation();

const placeValidationForm = new FormValidator(validationConfig, popupFormPlace);
placeValidationForm.enableValidation();

//Открытие попапа для редактирования профиля
function openPopup(popup){
  popup.classList.add('popup_opened')
  document.addEventListener('keydown', closePopupOnEsc); //
}

profileEditButton.addEventListener('click', function(e){
  openPopup(editPopup)
  nameInput.value = username.textContent
  jobInput.value = undertitle.textContent
  profileValidationForm.clearValidationForm()
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
  profileValidationForm.clearValidationForm()
  username.textContent = nameInput.value;
  undertitle.textContent = jobInput.value;
  closePopup(editPopup);

}

editForm.addEventListener('submit', editProfileFormSubmit)
// Слушатель открытия попапа для добавления карточки/добавление карточки
addPlaceButton.addEventListener('click', ()=>{
  openPopup(addPopup);
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
  placeValidationForm.clearValidationForm();
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
*/