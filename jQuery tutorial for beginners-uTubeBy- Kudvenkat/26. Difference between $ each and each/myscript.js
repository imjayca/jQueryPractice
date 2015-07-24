$(document).ready(function() {
	var result="";
	$('li').each(function(index, element) {
		// result+= 'Index= ' + index + '; ' + 'Value= ' + $(element).text()+ '<br/>';
		result+= 'Index= ' + index + '; ' + 'Value= ' + $(this).text()+ '<br/>';
	});

	$('#myResult').html(result);
});