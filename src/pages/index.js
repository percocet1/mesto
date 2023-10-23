
import {nameInput,
        jobInput,
        popupEditProfileButton,
        popupEditAvatarSelector, 
        popupAddPlaceButton,
        popupProfileFormSelector,
        popupEditAvatarButton,
        popupAddFormSelector} from '../utils/constants'
import Api  from "../components/Api.js"
import { apiConfig } from "../utils/apiConfig.js"
import FormValidator from "../components/FormValidator.js"
import Card from "../components/Card.js"
import PopupNotice from "../components/PopupNotice.js"
import PopupWithForm from "../components/PopupWithForm.js"
import PopupWithImage from "../components/PopupWithImage.js"
import Section from '../components/Section.js'
import UserInfo from '../components/UserInfo.js'
import { validationConfig } from '../utils/validationConfig'

import '../pages/index.css'

const api = new Api(apiConfig)

let userId;

const userInfo = new UserInfo({ 
  userNameSelector: '.profile__username', 
  userUndertitleSelector: '.profile__undertitle',
  userAvatarSelector: '.profile__avatar'
})

/** ----------------------------общий промис------------------------------------- **/
Promise.all([ api.getUserData(), api.getInitialCards() ])
  .then(([ userProfileData, cardObject ]) => {
    userId = userProfileData._id;
    userInfo.setUserInfo({ 
      username: userProfileData.name, 
      userjob: userProfileData.about 
    });
    elementsContainer.renderedItems(cardObject);
    userInfo.setUserAvatar(userProfileData.avatar);
  })
  .catch((err) => { console.log(`Возникла глобальная ошибка, ${err}`) })
/** ----------------------------Ф-ция добавления карточки------------------------------------- **/
const addCard = (cardObject) => {

  const createNewCard = new Card(cardObject, '.card-template', userId, { cardId: cardObject._id, authorId: cardObject.owner._id, }, {

    handleCardZoom: (name, image) => { 
      popupOpenImage.open(name, image) 
    },

    handleCardDelete: (cardElement, cardId) => { 
      popupNoticeDelete.open(cardElement, cardId) 
    },

    handleCardLike: (cardId) => { 
        api.putCardLike(cardId)
        .then((res) => {
          createNewCard.renderCardLike(res);
        })
        .catch((err) => { console.log(`При лайке карточки возникла ошибка, ${err}`) })
    },

    handleCardDeleteLike: (cardId) => { 
        api.deleteCardLike(cardId)
        .then((res) => {
          createNewCard.renderCardLike(res);
        })
        .catch((err) => { console.log(`При дизлайке карточки возникла ошибка,s ${err}`) })
    },
    
  });
  return createNewCard.createCard();
}
/** ----------------------------Рендер карточек на страницу------------------------------------- **/
const elementsContainer = new Section({
  renderer: (cardObject) => {
    elementsContainer.addItem(addCard(cardObject));
  }
}, '.elements');

const popupOpenImage = new PopupWithImage('.popup_img-preview');
popupOpenImage.setEventListeners();
/** ----------------------------Попап редактирования аватарки------------------------------------- **/
const popupFormAvatar = new PopupWithForm('#avatar-popup', {
  callbackFormSubmit: (userProfileData) => { 
    popupFormAvatar.putSavingProcessText();
     api.sendAvatarData(userProfileData)
      .then((res) => {
        userInfo.setUserAvatar(res.avatar);
        popupFormAvatar.close();
      })
      .catch((err) => { console.log(`При обновлении аватара возникла ошибка, ${err}`) })
      .finally(() => {
        popupFormAvatar.returnSavingProcessText();
      })
  }
});
popupFormAvatar.setEventListeners();
/** ----------------------------попап предупреждения удаления карточки------------------------------------- **/
const popupNoticeDelete = new PopupNotice("#notice-popup", {
  callbackNotice: (cardElement, cardId) => { api.deleteCard(cardId)
      .then(() => {
        cardElement.deleteCard();
        popupNoticeDelete.close();
      })
      .catch((err) => { console.log(`При удалении карточки возникла ошибка, ${err}`) })
  }
});
popupNoticeDelete.setEventListeners();
/** ----------------------------Попап редактирования профиля------------------------------------- **/
const popupFormProfile = new PopupWithForm('#profile-popup', {
  callbackFormSubmit: (userProfileData) => { 
    popupFormProfile.putSavingProcessText(); 
    api.sendUserData(userProfileData)
      .then((res) => {
        userInfo.setUserInfo({ 
          username: res.name, 
          userjob: res.about 
        });
        popupFormProfile.close();
      })
      .catch((err) => { console.log(`При редактировании профиля возникла ошибка, ${err}`) })
      .finally(() => {
        popupFormProfile.returnSavingProcessText();
      })
  }
});
popupFormProfile.setEventListeners();
/** ----------------------------Попап добавления карточки места------------------------------------- **/
const popupFormPlace = new PopupWithForm('#add-popup', {
  callbackFormSubmit: (formValues) => { 
    popupFormPlace.putSavingProcessText(); 
    api.addNewCard({ 
      name: formValues.place,
      link: formValues.placelink
      })
      .then((card) => {
        elementsContainer.prependItem(addCard(card));
        popupFormPlace.close();
      })
      .catch((err) => { console.log(`При добавлении новой карточки возникла ошибка, ${err}`) })
      .finally(() => {
        popupFormPlace.returnSavingProcessText();
      })
  }
});
popupFormPlace.setEventListeners();
/** ----------------------------Валидация форм------------------------------------- **/
const addFormValidation = new FormValidator(validationConfig, popupAddFormSelector)
addFormValidation.enableValidation()
const profileFormValidation = new FormValidator(validationConfig, popupProfileFormSelector)
profileFormValidation.enableValidation()
const profileAvatarFormValidation = new FormValidator(validationConfig, popupEditAvatarSelector);
profileAvatarFormValidation.enableValidation();
/**------------------- Слушатели------------------- **/
popupEditProfileButton.addEventListener('click', () => {
  popupFormProfile.open();
  profileFormValidation.clearValidationForm();
  const actualUserInfo = userInfo.getUserInfo();
  nameInput.value = actualUserInfo.username;
  jobInput.value = actualUserInfo.userjob;
});

popupEditAvatarButton.addEventListener('click', () => {
  popupFormAvatar.open();
  profileAvatarFormValidation.clearValidationForm();
});

popupAddPlaceButton.addEventListener('click', () =>{
  popupFormPlace.open();
  addFormValidation.clearValidationForm();
});