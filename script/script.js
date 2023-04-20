let content = document.querySelector('.content')
let profileEditButton = content.querySelector('.profile__edit-button')
let closePopup = document.querySelector('.popup__close-button')

let editForm = document.querySelector('.popup__edit-profile-form')
let username = content.querySelector('.profile__username')
let undertitle = content.querySelector('.profile__undertitle')
let nameInput = editForm.querySelector('.popup__form-item-name')
let jobInput =  editForm.querySelector('.popup__form-item-job')
let buttonSubmit = document.querySelector('.popup__button-submit')

profileEditButton.addEventListener('click', function(e){
    popup.classList.add('popup_opened');
    nameInput.value = username.textContent
    jobInput.value = undertitle.textContent
})

editForm.addEventListener('submit', function handleFormSubmit (evt) {
    evt.preventDefault();
    username.textContent = nameInput.value;
    undertitle.textContent = jobInput.value;
    buttonSubmit.addEventListener('click', ()=> {popup.classList.remove('popup_opened');})
})    

closePopup.addEventListener('click', () => {
    popup.classList.remove('popup_opened');
})
