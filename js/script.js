'use strict';

//Mobile navigation

document.querySelector('.hamburger').addEventListener('click', function(){
	document.querySelector('.menu').classList.toggle('show-menu');
});


// Changing text slides in 'quotes' section

var slides = document.querySelectorAll('.quotes-text');
function showPreviousSlide() {
	for (var i = 1; i < slides.length; i++) {
		if (slides[i].classList.contains('active')) {
			slides[i].classList.remove('active');
			slides[i - 1].classList.add('active');
		}
	}
}
function showNextSlide() {
	for (var i = 0; i < (slides.length - 1); i++) {
		if (slides[i].classList.contains('active')) {
			slides[i].classList.remove('active');
			slides[i + 1].classList.add('active');
		}
	}
}

document.querySelector('.btn-previous').addEventListener('click', showPreviousSlide);
document.querySelector('.btn-next').addEventListener('click', showNextSlide);



// Changing images decorations width whenever browser window is resizing

function setDecorationsWidth(){
	var decorationsWidth = document.querySelector('.photo').width + 'px';
	var decorations = document.querySelectorAll('.decoration');
	for (var i = 0; i < decorations.length; i++) {
		decorations[i].style.borderRightWidth = decorationsWidth;
	}
}
setDecorationsWidth();

window.addEventListener("resize", setDecorationsWidth);


// Modal

function hideModal(){
	document.querySelector('.overlay').classList.add('hide-modal');
};
document.querySelector('.close').addEventListener('click', hideModal);

document.querySelector('.overlay').addEventListener('click', function(event) {
  if (event.target === this) {
    hideModal();
 }
});

document.addEventListener('keyup', function(event) {
  if (event.keyCode === 27) {
    hideModal();
  }
});
