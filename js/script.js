'use strict';

//Mobile navigation

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function(){
	menu.classList.toggle('show-menu');
});


// Changing text slides in 'quotes' section

const allSlides = document.querySelectorAll('.quotes-text');
const slides = [...allSlides];
const buttonPrevious = document.querySelector('.btn-previous');
const buttonNext = document.querySelector('.btn-next');

const changeSlide = (n) => {
	let activeSlideIndex;
	slides.map((slide, index) => {
		if (slide.classList.contains('active')) {
			activeSlideIndex = index;
			slide.classList.remove('active');
		}
	});
	if ((activeSlideIndex + n) < 0) {
		slides[slides.length - 1].classList.add('active');
	} else if ((activeSlideIndex + n) >= slides.length) {
		slides[0].classList.add('active');
	} else {
		slides[activeSlideIndex + n].classList.add('active');
	}
}

buttonPrevious.addEventListener('click', () => changeSlide(-1));
buttonNext.addEventListener('click', () => changeSlide(1));



// Modal
const overlay = document.querySelector('.overlay');
const buttonClose = document.querySelector('.close');

function hideModal(){
	overlay.classList.add('hide-modal');
};
buttonClose.addEventListener('click', hideModal);

overlay.addEventListener('click', function(event) {
  if (event.target === this) {
    hideModal();
 }
});

document.addEventListener('keyup', function(event) {
  if (event.keyCode === 27) {
    hideModal();
  }
});
