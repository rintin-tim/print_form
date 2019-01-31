form_values = function () {
	final_string = ''
	current_url = "Page location is: " + window.location.href;
	final_string += current_url + '\n' + '\n'
	time_date = new Date();
	final_string += "Current time is: " + time_date + '\n' + '\n'
	result = document.querySelectorAll('form input, form textarea');
	result.forEach(function (element) {final_string += element.value; final_string += '\n'; })
	// it could also print the name of the field (label?) with line break again
	console.log(final_string);
}
form_values();