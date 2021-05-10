const popupEditProfile = document.querySelector('.popup_type_edit');
const popupCreateCard = document.querySelector('.popup_type_add-card');
const popupImage = document.querySelector('.popup_type_image');
const popupAddForm = document.querySelector('.popup__form');
const popupAddImgForm  = document.querySelector('.popup__form-type-card');

const editButton = document.querySelector('.profile__button_type_edit');
const addButton = document.querySelector('.profile__button_type_add');
const popupCloseEditBtn = document.querySelector('.popup__close-button-edit');
const popupCloseCardsBtn = document.querySelector('.popup__close-button-add');

const popupTitle  = document.querySelector('.popup__input_type_title');
const popupSubtitle  = document.querySelector('.popup__input_type_subtitle');
const profileName = document.querySelector('.profile__username');
const profileJob = document.querySelector('.profile__position');

const popupImageBtnClose = document.querySelector('.popup__close-button-img');
const nameInputCard = document.querySelector('.popup__input_type_description');
const linkInputCard = document.querySelector('.popup__input_type_link');

const elements = document.querySelector('.elements');
const templateCards  = document.querySelector('.templateElements').content.querySelector('.element');

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

function handlerCardSubmit(evt) {
    evt.preventDefault();
    const card = {
        name: nameInputCard.value,
        link: linkInputCard.value
    }
    addCartInList(card)
    popupAddImgForm.reset()
    closePopup(popupCreateCard)
}

function editPopup() {
    popupTitle.value = profileName.textContent;
    popupSubtitle.value = profileJob.textContent;
    openPopup(popupEditProfile);
}

function openPopup(open) {
    open.classList.add('popup_opened')
}

function closePopup(close) {
    close.classList.remove('popup_opened');
}

function handlerProfileSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = popupTitle.value;
    profileJob.textContent = popupSubtitle.value;
    closePopup(popupEditProfile);
}


//Ставим лайк
function handleLikeCard(evt) {
    evt.target.classList.toggle('element__like_active')
}

// удаление карточки
function handleDeleteCard(evt) {
    evt.target.closest('.element').remove()
}

// добавление карточки
function addCartInList(card) {
    const templateElement = createCard(card);
    elements.prepend(templateElement)
}

// создание новой карточки

function createCard(card) {
    const templateElement = templateCards.cloneNode(true);
    const templateCardsTitle = templateElement.querySelector('.element__text').textContent = card.name;
    const templateCardImage = templateElement.querySelector('.element__photo');
    const btnLike = templateElement.querySelector('.element__like')
    templateCardImage.setAttribute('src', card.link);
    btnLike.addEventListener('click', handleLikeCard);

    const cardDelete = templateElement.querySelector('.element__button-delete')
    cardDelete.addEventListener('click', handleDeleteCard);

    const cardImage = templateElement.querySelector('.element__photo');
    const popupOpenImage = document.querySelector('.popup__image');
    const popupImageCaption = document.querySelector('.popup__caption');
    const popupCardTitle = templateElement.querySelector('.element__text');
    templateCardImage.setAttribute('alt', card.name);
    cardImage.addEventListener('click', () => {
        popupOpenImage.src = cardImage.src
        popupImageCaption.textContent = popupCardTitle.textContent;
        openPopup(popupImage)
    });

    return templateElement
}

initialCards.forEach(addCartInList);
// closePopup
popupCloseEditBtn.addEventListener('click', () => closePopup(popupEditProfile));
popupCloseCardsBtn.addEventListener('click', () => closePopup(popupCreateCard));
popupImageBtnClose.addEventListener('click', () => closePopup(popupImage));
//openPopup
addButton.addEventListener('click', () => openPopup(popupCreateCard));
//
popupAddImgForm.addEventListener('submit', handlerCardSubmit);
popupAddForm.addEventListener('submit', handlerProfileSubmit);
editButton.addEventListener('click', editPopup);