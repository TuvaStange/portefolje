const popupTrigger = document.querySelector('.popup-trigger');
const popup = document.querySelector('.popup');
const popupImage = document.querySelector('.popup-image');
const popupText = document.querySelector('.popup-text');

popupTrigger.addEventListener('click', () => {
  popup.classList.add('popup-active');
  popupImage.src = popupTrigger.src;
  popupText.innerHTML = 'Your text here';
});

popup.addEventListener('click', () => {
  popup.classList.remove('popup-active');
});