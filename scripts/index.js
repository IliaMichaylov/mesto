const openPopupButton = document.querySelector("#open-popup-button");
const closePopupButton = document.querySelector("#close-popup-button");
const editPopup = document.querySelector("#edit-popup");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const nameInput = document.querySelector("#name-input");
const subnameInput = document.querySelector("#subname-input");
const editForm = document.querySelector("#edit-form");
const savePopupButton = document.querySelector("#save-popup-button");

openPopupButton.addEventListener("click", function () {
  editPopup.classList.add("popup_is-opened");
});
closePopupButton.addEventListener("click", function () {
  editPopup.classList.remove("popup_is-opened");
});

savePopupButton.addEventListener("click", function () {
  editPopup.classList.remove("popup_is-opened");
});

nameInput.value = profileTitle.textContent;
subnameInput.value = profileSubtitle.textContent;

editForm.addEventListener("submit", function (event) {
  event.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = subnameInput.value;
});
