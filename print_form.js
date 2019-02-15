

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

    result = document.querySelectorAll('form input, form textarea');
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
        var copyCodeIntro = '\n' + "##### To rerun, copy the code below to the console:" + '\n' + '\n';
        var htmlOutput = (finalString + copyCodeIntro).replace(/(?:\r\n|\r|\n)/g, '<br/>'); 
        var functionString = print_inputs.toString();
        var jsConsoleString = print_inputs.name + " = " + functionString + ';' + '\n' + print_inputs.name + "(" + includeHidden + ")" + ";";
        jsEscapedBreakTags = jsConsoleString.replace(/(<br\/>)/g, '&lt;br/&gt;');
        jsEscapedRegEx = jsEscapedBreakTags.replace(/(<br\\\/>)/g, '&lt;br\\\/&gt;');
        newWindow.document.write(htmlOutput + jsEscapedRegEx);
        newWindow.stop();        
    };    
};
print_inputs(false);