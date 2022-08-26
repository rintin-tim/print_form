"use strict";

const print_inputs = function (includeHidden) {
  let finalString = "";
  let htmlTable = `
  <html>
  <p>Time: ${new Date()}</p>
  <p>URL: ${window.location.href}</p>
  <table border=1 cellpadding=3>
	<tbody>
        <tr>
            <td>Name</td>
            <td>Value</td>
            <td>Hidden</td>
        </tr>
    {{table_rows_here}}
		
	</tbody>
    </table>
    </html>
  `;

  function logElement(element) {
    if (element.name) {
      finalString += `
    <tr>
        <td>${element.name}</td>
        `;
      //   finalString += element.name;
    } else {
      finalString += `
    <tr>
        <td></td>
        `;
    }
    finalString += `<td>${
      element.hasAttribute("aria-checked")
        ? `aria-checked: ${element.getAttribute("aria-checked")} ${
            element.value
          }`
        : `${element.value}`
    }</td>`;
    // finalString += "\n";
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
  }

  const result = document.querySelectorAll("input, textarea");
  result.forEach(function (element) {
    if (includeHidden == true) {
      logElement(element);
    } else {
      if (element.type !== "hidden") {
        logElement(element);
      }
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
