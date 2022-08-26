"use strict";

const print_inputs = function (includeHidden) {
  let finalString = "";
  const currentUrl = "Form URL: " + window.location.href;
  finalString += currentUrl + "\n" + "\n";
  const time_date = new Date();
  finalString += "Current time is: " + time_date + "\n" + "\n";

  let htmlTable = `
  <table border=1>
	<tbody>
        <tr>
            <td>field</td>
            <td>hidden</td>
            <td>value</td>
        </tr>
    {{table_rows_here}}
		
	</tbody>
    </table>
  `;

  function logElement(element) {
    if (element.name) {
      finalString += `
    <tr>
        <td>${element.name}</td>
        `;
      //   finalString += element.name;
    }
    if (element.type == "hidden") {
      finalString += `
        <td>true</td>
        `;
      //   finalString += " || ** HIDDEN FIELD **";
    } else {
      finalString += `
        <td>false</td>
        `;
    }
    finalString += `<td>${
      element.hasAttribute("aria-checked")
        ? `aria-checked: ${element.getAttribute("aria-checked")} value: ${
            element.value
          }`
        : `value: ${element.value}`
    }</td>`;
    // finalString += "\n";
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
    } else {
    }
  });

  let newWindow = window.open("about:blank");
  if (newWindow) {
    let htmlOutput = htmlTable.replace("{{table_rows_here}}", finalString);
    // const htmlOutput = finalString.replace(/(?:\r\n|\r|\n)/g, "<br/>");

    newWindow.document.write(htmlOutput);
    newWindow.stop();
  }
};
print_inputs(false);
