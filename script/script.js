let content = document.querySelector('.content')
let profileEditButton = content.querySelector('.profile__edit-button')
let buttonClose = document.querySelector('.popup__close-button')

let editForm = document.querySelector('.popup__edit-profile-form')
let username = content.querySelector('.profile__username')
let undertitle = content.querySelector('.profile__undertitle')
let nameInput = document.getElementById('name')
let jobInput =  document.getElementById('job')

profileEditButton.addEventListener('click', function(e){
    popup.classList.add('popup_opened');
    nameInput.value = username.textContent
    jobInput.value = undertitle.textContent
})

function closePopup(){
    popup.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    username.textContent = nameInput.value;
    undertitle.textContent = jobInput.value;
    closePopup();
}

editForm.addEventListener('submit', handleFormSubmit)

buttonClose.addEventListener('click', closePopup)
