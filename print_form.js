print_form_values = function(includeHidden) {
    var finalString = ''
    var currentUrl = "Page location is: " + window.location.href;
    finalString += currentUrl + '\n' + '\n'
    var time_date = new Date();
    finalString += "Current time is: " + time_date + '\n' + '\n'

    function logElement(element) {
        finalString += element.value;
        if (element.name) {
            finalString += " " + "(" + element.name + ")"
        };
        if (element.type == 'hidden') {
            finalString += " || ** HIDDEN FIELD **"
        };
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
                }
            }
        }
    })
    console.log(finalString);
}
print_form_values(false);