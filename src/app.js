const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)


//slider 1
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentSlide = 0;
const slideWidth = slider.clientWidth;
const maxSlides = 2;

prevBtn.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = maxSlides - 1;
  }
  slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});

nextBtn.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= maxSlides) {
    currentSlide = 0;
  }
  slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});



//slider 2
/*const slider2 = document.querySelector('.slider2');
const prevBtn2 = document.querySelector('.prev2');
const nextBtn2 = document.querySelector('.next2');

let currentSlide2 = 0;
const slideWidth2 = slider2.clientWidth;
const maxSlides2 = 3;

prevBtn.addEventListener('click', () => {
  currentSlide2--;
  if (currentSlide2 < 0) {
    currentSlide2 = maxSlides2 - 1;
  }
  slider2.style.transform = `translateX(-${currentSlide2 * slideWidth2}px)`;
});

nextBtn.addEventListener('click', () => {
  currentSlide2++;
  if (currentSlide2 >= maxSlides2) {
    currentSlide2 = 0;
  }
  slider2.style.transform = `translateX(-${currentSlide2 * slideWidth2}px)`;
});*/

//slider 3
const slider3 = document.querySelector('.slider3');
const prevBtn3 = document.querySelector('.prev3');
const nextBtn3= document.querySelector('.next3');

let currentSlide3 = 0;
const slideWidth3 = slider3.clientWidth;
const maxSlides3 = 3;

prevBtn3.addEventListener('click', () => {
  currentSlide3--;
  if (currentSlide3 < 0) {
    currentSlide3 = maxSlides3 - 1;
  }
  slider3.style.transform = `translateX(-${currentSlide3 * slideWidth3}px)`;
});

nextBtn3.addEventListener('click', () => {
  currentSlide3++;
  if (currentSlide3 >= maxSlides3) {
    currentSlide3 = 0;
  }
  slider3.style.transform = `translateX(-${currentSlide3 * slideWidth}px)`;
});

