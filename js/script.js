'use strict';

//Mobile navigation

document.querySelector('.hamburger').addEventListener('click', function(){
	document.querySelector('.menu').classList.toggle('show-menu');
});


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
