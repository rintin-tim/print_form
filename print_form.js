print_inputs = function(includeHidden) {
    var finalString = '';
    var currentUrl = "Page location is: " + window.location.href;
    finalString += currentUrl + '\n' + '\n';
    var time_date = new Date();
    finalString += "Current time is: " + time_date + '\n' + '\n';

    function logElement (element) {
		
		if (element.name) {
			finalString += element.name 
		};
		if (element.type == 'hidden') {
			finalString += " || ** HIDDEN FIELD **" 
		};  
		finalString += " ----> " + element.value; 
		finalString += '\n';
	}

    result = document.querySelectorAll('input, textarea');
    result.forEach(function(element) {
        if (element.value) {
            if (includeHidden == true) {
                logElement(element);
            } else {
                if (element.type !== 'hidden') {
                    logElement(element);
                };
            };
        };
    });

    var newWindow = window.open("about:blank");
    if (newWindow) {
	var htmlOutput = finalString.replace(/(?:\r\n|\r|\n)/g, '<br/>'); 
        newWindow.document.write(htmlOutput);
        newWindow.stop();        
    };    
};
print_inputs(false);
