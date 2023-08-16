const openPopupButton = document.querySelector("#open-popup-button");
const closePopupButton = document.querySelector("#close-popup-button");
const editPopup = document.querySelector("#edit-popup");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const nameInput = document.querySelector("#name-input");
const subnameInput = document.querySelector("#subname-input");
const editForm = document.querySelector("#edit-form");

function openPopup() {
  nameInput.value = profileTitle.textContent;
  subnameInput.value = profileSubtitle.textContent;
  editPopup.classList.add("popup__opened");
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
  closePopupButton.addEventListener("click", closePopup);
});
