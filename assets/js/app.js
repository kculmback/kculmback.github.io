// --------------------------------------------------
// APP.JS
// --------------------------------------------------

var menuOpen = document.getElementById('menu-open');
var menu = document.getElementById('main-menu');
var menuClose = document.getElementById('menu-close');

menuOpen.addEventListener('click', function() {
	menu.classList.remove('closed');
	menu.classList.add('opened');
});
menuClose.addEventListener('click', function() {
	menu.classList.remove('opened');
	setTimeout(function() {
		menu.classList.add('closed');
	}, 600)
});

