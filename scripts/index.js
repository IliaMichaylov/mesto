const openPopupButton = document.querySelector("#open-popup-button");
const openPopupButtonAddCard = document.querySelector("#open-pop-up-button");
const closePopupButton = document.querySelector("#close-popup-button");
const closePopupButtonAddCard = document.querySelector("#close-pop-up-button");
const editPopup = document.querySelector("#edit-popup");
const cardPopup = document.querySelector("#card-pop-up");

const profileTitle = document.querySelector(".profile__title");

const profileSubtitle = document.querySelector(".profile__subtitle");
const nominationInput = document.querySelector("#nomination-input");
const nameInput = document.querySelector("#name-input");
const subnameInput = document.querySelector("#subname-input");
const urlInput = document.querySelector("#url-input");
const cardForm = document.querySelector("#card-form");
const editForm = document.querySelector("#edit-form");

function closePopup() {
  editPopup.classList.remove("popup_opened");
  cardPopup.classList.remove("pop-up_opened");
}

function openPopup() {
  nameInput.value = profileTitle.textContent;
  subnameInput.value = profileSubtitle.textContent;
  editPopup.classList.add("popup_opened");
  cardPopup.classList.remove("pop-up_opened");
}

openPopupButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);

editForm.addEventListener("submit", function (event) {
  event.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = subnameInput.value;
  closePopup();
});

