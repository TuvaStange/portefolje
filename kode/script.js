var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 3){
    counter = 1;
  }
}, 5000);

const images = [...document.querySelectorAll('.img-container-mid .popup')];

const popup = document.querySelector('.popup');

const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let index = 0;

images.forEach((item, i) => {
  item.addEventListener('click', () => {
    updateImage(i);
    popup.classList.toggle('popup');
    console.log("hei");
  })
})

const updateImage = (i) => {
  let path = 'img/img${i+1}.png'
  largeImage.src = path;
  imageName.innerHTML = path;
  imageIndex.innerHTML = '0${i+1}';
  index = i;
  
}

closeBtn.addEventListener('click', () => {
  popup.classList.toggle('popup');
  document.getElementById("popup").style.display = "none";
})

leftArrow.addEventListener('click', () => {
  if(index > 0){
    updateImage(index - 1);
  }
})
rightArrow.addEventListener('click', () => {
  if(index < images.length - 1){
    updateImage(index + 1);
  }
})

function visibleModal() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("close-btn").style.display = "block";
}