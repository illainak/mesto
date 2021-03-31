let popup = document.querySelector('.popup');
let popupContainer = document.querySelector('.popup__container');

let editButton = document.querySelector('.profile__button_type_edit');
let closeButton = document.querySelector('.popup__close-button');

let profileTitle = document.querySelector('.profile__username');
let profileSubtitle = document.querySelector('.profile__position');
let popupTitle = document.querySelector('.popup__input_type_title');
let popupSubtitle = document.querySelector('.popup__input_type_subtitle');

const templateElements = document.querySelector('.templateElements').content;
const elements = document.querySelector('.elements');
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

function cardList () {
    initialCards.forEach(function(element){
        const clonElement = templateElements.querySelector('.element').cloneNode(true);
        clonElement.querySelector('.element__photo').src = element.link;
        clonElement.querySelector('.element__text').textContent = element.name;
        elements.append(clonElement);
    })
}
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
popupContainer.addEventListener("submit", submitPopup);
cardList();


