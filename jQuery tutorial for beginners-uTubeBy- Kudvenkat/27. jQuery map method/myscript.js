$(document).ready(function() {
	// var result=[];
	// $('li').each(function(index, el) {
	// 	result.push($(el).text());
	// });

	// alert(result);



	// alert($('li').map(function(index, elem) {
	// 	return $(elem).text();
	// }).get());


	var result='';
	$('li').each(function(index, el) {
		result+=$(el).text()+'|';
	});

	result= result.substr(0, result.length-1);
	alert(result);




});