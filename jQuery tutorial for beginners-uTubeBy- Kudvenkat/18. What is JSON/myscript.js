$(document).ready(function() {
	var employeeJSON={
		'firstName':'Sanjaya',
		'lastName':'Das',
		'gender':'Male',
		'salary': 000
	};

	var result='';
	result += 'First Name ='+employeeJSON.firstName + '<br/>';
	result += 'Last Name ='+employeeJSON.lastName + '<br/>';
	result += 'Gender ='+employeeJSON.gender + '<br/>';
	result += 'Salary ='+employeeJSON.salary + '<br/>';

	$('#result').html(result);

});