/**
 * Попап-окно
*/
function closePopup() {
  const popup = document.querySelector('.popup_opened');
  popup.classList.remove("popup_opened");

  const closePopupButton = popup.querySelector("#close-popup-button");
  closePopupButton.removeEventListener("click");
}

function openPopup(id = '') {
  const popup = document.querySelector(`#${id}`);
  popup.classList.add("popup_opened");

  const closePopupButton = popup.querySelector("#close-popup-button");
  closePopupButton.addEventListener("click", closePopup);
}

/**
 * Редактирование профиля
*/
const openEditProfileFormButton = document.querySelector("#open-edit-profile-form-button");
openEditProfileFormButton.addEventListener("click", function () {
  prepareFormFields()
  openPopup('edit-profile-popup')
});

const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");

function prepareFormFields() {
  const nameInput = document.querySelector("#name-input");
  const subnameInput = document.querySelector("#subname-input");

  nameInput.value = profileTitle.textContent;
  subnameInput.value = profileSubtitle.textContent;
}

const editForm = document.querySelector("#edit-form");
editForm.addEventListener("submit", function (event) {
  event.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = subnameInput.value;
  closePopup();
});

/**
 * Вывод карточек
*/
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

function initCards() {
  const cardsList = document.querySelector('.elements__cell-list')

  initialCards.forEach(function(card) {
    const element = document.createElement('li')
    element.classList.add('elements__cell')
  
    element.innerHTML = `
      <img
        src="${card.link}"
        alt="${card.name}"
        class="elements__cell-img"
      />
      <div class="elements__cell-name">
        <h2 class="elements__cell-title">${card.name}</h2>
        <button type="button" class="elements__cell-heart"></button>
      </div>
    `

    cardsList.appendChild(element)
  })
}

initCards();

/**
 * Добавление карточки
 */
const openAddCardFormButton = document.querySelector("#open-add-card-form-button");
openAddCardFormButton.addEventListener("click", function () {
  openPopup('add-card-popup')
});

const addCardForm = document.querySelector("#add-card-form");
addCardForm.addEventListener("submit", function (event) {
  event.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = subnameInput.value;
  closePopup();
});