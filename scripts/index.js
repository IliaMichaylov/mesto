const openPopupButton = document.querySelector("#open-popup-button");
const closePopupButton = document.querySelector("#close-popup-button");
const editPopup = document.querySelector("#edit-popup");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const nameInput = document.querySelector("#name-input");
const subnameInput = document.querySelector("#subname-input");
const editForm = document.querySelector("#edit-form");
const savePopupButton = document.querySelector("#save-popup-button");

function openPopup() {
  editPopup.classList.add("popup__opened");
  nameInput.value = profileTitle.textContent;
  subnameInput.value = profileSubtitle.textContent;
}

function closePopup() {
  editPopup.classList.remove("popup__opened");
}

openPopupButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);

savePopupButton.addEventListener("click", closePopup);

editForm.addEventListener("submit", function (event) {
  event.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = subnameInput.value;
  closePopup
});
