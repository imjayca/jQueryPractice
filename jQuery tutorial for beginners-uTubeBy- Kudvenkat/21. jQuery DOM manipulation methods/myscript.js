$(document).ready(function() {
	// alert($('div').attr('title'));

	// $('div').attr('title', 'NewTitle4All');
	$('div').each(function(i) {
		$(this).attr('title', 'div' + (i+1)+ 'title');
	});

	$('div').each(function() {
		alert($(this).attr('title'));
	});
});