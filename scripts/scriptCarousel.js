// Получаем элементы
const slidesContainer = document.querySelector('.slides');  
const slides = document.querySelectorAll('.slide');   
const totalSlides = slides.length;  
const prevBtn = document.querySelector('.prev'); 
const nextBtn = document.querySelector('.next');
let currentIndex = 1;
function moveToSlide(index) {                                   
  slidesContainer.style.transition='transform 0.5s ease-in-out';
  slidesContainer.style.transform=`translateX(-${index *100}%)`;
}
prevBtn.addEventListener('click', () => {
   moveToSlide(currentIndex -1);
});
nextBtn.addEventListener('click', () => {
   moveToSlide(currentIndex +1);
});
setInterval(() => {
   moveToSlide(currentIndex +1);
}, 7000);
slidesContainer.addEventListener('transitionend', () => {
   if (currentIndex >= totalSlides -1) {
       slidesContainer.style.transition='none';
       currentIndex = 1;
       slidesContainer.style.transform=`translateX(-${currentIndex *100}%)`;
   }
   if (currentIndex <=0) {
       slidesContainer.style.transition='none';
       currentIndex=totalSlides -2;
       slidesContainer.style.transform=`translateX(-${currentIndex *100}%)`;
   }
});
function updateCurrentIndex() {
   const style = window.getComputedStyle(slidesContainer);
   const matrix = new WebKitCSSMatrix(style.transform)
   currentIndex = Math.round(matrix.m41 / -100);
}
function moveToSlide(index) {
   currentIndex = index;
   slidesContainer.style.transition='transform 0.5s ease-in-out';
   slidesContainer.style.transform=`translateX(-${index *100}%)`;
}
slidesContainer.addEventListener('transitionend', () => {
   if (currentIndex >= totalSlides -1) {
       slidesContainer.style.transition='none';
       currentIndex=1;
       slidesContainer.style.transform=`translateX(-${currentIndex *100}%)`;
     }
   if (currentIndex <=0) {
       slidesContainer.style.transition='none';
       currentIndex=totalSlides -2; 
       slidesContainer.style.transform=`translateX(-${currentIndex *100}%)`;
     }
});