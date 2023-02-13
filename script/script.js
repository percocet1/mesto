let content = document.querySelector('.content')
let profileEditButton = content.querySelector('.profile__edit-button')
let closePopup = document.querySelector('.popup__close-button')

let editForm = document.querySelector('.popup__edit-profile-form')
let formItem = document.querySelector('.popup__form-item')
let username = content.querySelector('.profile__username')
let undertitle = content.querySelector('.profile__undertitle')
let nameInput = editForm.querySelector('.popup__form-item_name')
let jobInput =  editForm.querySelector('.popup__form-item_job')

profileEditButton.addEventListener('click', function(e){
    e.preventDefault();
    popup.classList.add('popup_opened');
    nameInput.value = username.textContent
    jobInput.value = undertitle.textContent
    editForm.addEventListener('submit', function handleFormSubmit (evt) {
        evt.preventDefault();
        username.textContent = nameInput.value;
        undertitle.textContent = jobInput.value;
    })    
})

closePopup.addEventListener('click', () => {
    popup.classList.remove('popup_opened');
})

