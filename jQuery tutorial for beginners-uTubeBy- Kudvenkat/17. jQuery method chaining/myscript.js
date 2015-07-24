$(document).ready(function() {
	$('li')
		// .text('MagicHappensHere!')
		.css('color', 'blue')
		.slideUp(1000)
		.slideDown(1000)
		// .text('MagicHappensHere!')
		.attr('title', 'MyTitle');
});