let popup = document.querySelector('.popup'); 
let popupContainer = document.querySelector('.popup__container');

let editButton = document.querySelector('.profile__button_type_edit'); 
let closeButton = document.querySelector('.popup__close-button'); 


let profileTitle = document.querySelector('.profile__username');
let profileSubtitle = document.querySelector('.profile__position');
let popupTitle = document.querySelector('.popup__input_type_title');
let popupSubtitle = document.querySelector('.popup__input_type_subtitle');

function openPopup () {
    popup.classList.toggle('popup_opened');
    popupTitle.value=profileTitle.textContent;
    popupSubtitle.value=profileSubtitle.textContent;
}

function closePopup () {
    popup.classList.remove('popup_opened');
}

function submitPopup(evt) {
    evt.preventDefault()
    profileTitle.textContent=popupTitle.value;
    profileSubtitle.textContent=popupSubtitle.value;
    closePopup();
}


editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
popupContainer.addEventListener("submit", submitPopup);