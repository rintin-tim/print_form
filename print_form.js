"use strict";

const print_inputs = function (includeHidden = false) {
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
    } else {
      finalString += `
    <tr>
        <td></td>
        `;
    }
    finalString += `<td>${
      element.hasAttribute("aria-checked")
        ? `[aria-checked]=${element.getAttribute("aria-checked")}  (${
            element.value
          })`
        : `${element.value}`
    }</td>`;
    if (element.type == "hidden") {
      finalString += `
        <td>true</td>
        `;
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
    newWindow.document.write(htmlOutput);
    newWindow.stop();
  }
};
print_inputs();
