//Находим окна
const popupEdit = document.querySelector('.popup__type_edit');
const popupAdd = document.querySelector('.popup__type_add');
const popupContainer = document.querySelector('.popup__container');

//находим кнопки открытия окон
const editButton = document.querySelector('.profile__button_type_edit');
const addButton = document.querySelector('.profile__button_type_add');
//находим кнопки закрытия окон
const closeEditButton = popupEdit.querySelector('.popup__close-button');
const closeAddButton = popupAdd.querySelector('.popup__close-button');

//находим
const profileTitle = document.querySelector('.profile__username');
const profileSubtitle = document.querySelector('.profile__position');
const popupTitle = document.querySelector('.popup__input_type_title');
const popupSubtitle = document.querySelector('.popup__input_type_subtitle');

const templateElements = document.querySelector('.templateElements').content;
const elements = document.querySelector('.elements');

//массив для генерации карточек
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

//функция открытия попапа
function openPopup (modal) {
    modal.classList.toggle('popup_opened');
    popupTitle.value=profileTitle.textContent;
    popupSubtitle.value=profileSubtitle.textContent;
}

//функция закрытия попапа
function closePopup (modal) {
    modal.classList.remove('popup_opened');
}

//функция
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
editButton.addEventListener('click', () => openPopup(popupEdit));
addButton.addEventListener('click', () => openPopup(popupAdd));
closeEditButton.addEventListener('click', () => closePopup(popupEdit));
closeAddButton.addEventListener('click', () => closePopup(popupAdd));
popupContainer.addEventListener("submit", submitPopup);
cardList();


