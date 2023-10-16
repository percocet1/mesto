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

//ф-ция создания карточки

const createNewCard = (cardData) =>{
  const newCard = new Card({data: cardData}, '.card-template', ()=>{cardImagePopup.open(cardData)})
  return newCard.createCard();
}
//Popup с изображением карточки места

const cardImagePopup = new PopupWithImage('.popup_img-preview');
cardImagePopup.setEventListeners();

//Рендер карточек "из коробки" на страницу

const elementsContainer = new Section({items: initialCards, renderer: (cardData)=>{
  elementsContainer.addItem(createNewCard(cardData))
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
  nameInput.value = getActualUserInfo.username
  jobInput.value = getActualUserInfo.userjob
})

//попап добавление карточки
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
