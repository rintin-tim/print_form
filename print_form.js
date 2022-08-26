"use strict";

const print_inputs = function (includeHidden) {
  let finalString = "";
  const currentUrl = "Page location is: " + window.location.href;
  finalString += currentUrl + "\n" + "\n";
  const time_date = new Date();
  finalString += "Current time is: " + time_date + "\n" + "\n";

  function logElement(element) {
    if (element.name) {
      finalString += element.name;
    }
    if (element.type == "hidden") {
      finalString += " || ** HIDDEN FIELD **";
    }
    finalString += ` ----> ${
      element.hasAttribute("aria-checked")
        ? `aria-checked: ${element.getAttribute("aria-checked")} value: ${
            element.value
          }`
        : `value: ${element.value}`
    }`;
    finalString += "\n";
  }

  const result = document.querySelectorAll("input, textarea");
  result.forEach(function (element) {
    if (element.value) {
      if (includeHidden == true) {
        logElement(element);
      } else {
        if (element.type !== "hidden") {
          logElement(element);
        }
      }
    }
  });

  let newWindow = window.open("about:blank");
  if (newWindow) {
    const htmlOutput = finalString.replace(/(?:\r\n|\r|\n)/g, "<br/>");
    newWindow.document.write(htmlOutput);
    newWindow.stop();
  }
};
print_inputs(false);
