$(document).ready(function() {
	number = Math.floor((Math.random() * 5)) + 1;
	$('body').css('background-image', 'url(backgrounds/' + number + '.jpg)');
	$('.wrapper').delay(500).fadeIn(1000);
});
