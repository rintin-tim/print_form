"use strict";

const print_inputs = function (includeHidden = false) {
  let finalString = "";

  // html table structure
  let htmlTable = `
  <html>
    <head>
      <style>
        table, th, td {
          padding: 5px;
          border: 1px solid black;
        }
        th {
          background-color: #96D4D4;
        }
      </style>
    </head>
    <body>
      <p>Time: ${new Date()}</p>
      <p>URL: ${window.location.href}</p>
      <table>
        <thead>
              <tr>
                  <th>Element Name</th>
                  <th>Value</th>
                  <th>Visible</th>
              </tr>
        </thead>
        <tbody>
              {{table_rows_here}}
        </tbody>
      </table>
    </body>  
  </html>
  `;

  // html row structure (1 per element)
  function logElement(element) {
    if (element.name) {
      finalString += `<tr><td>${element.name}</td>`;
    } else {
      finalString += `<tr><td></td>`;
    }
    // look for aria-checked (checkbox and radio button selection)
    finalString += `<td>${
      element.hasAttribute("aria-checked")
        ? `[aria-checked]=${element.getAttribute("aria-checked")}  (${
            element.value
          })`
        : `${element.value}`
    }</td>`;
    if (element.offsetParent === null) {
      // image courtesy: https://www.flaticon.com/free-icons/eye - Eye icons created by Freepik - Flaticon</a>
      finalString += `
      <td><img src="https://i.ibb.co/t8ZV5VD/hidden.png" title="Element hidden" alt="Element hidden"></td>
      `;
    } else {
      // image courtesy: https://www.flaticon.com/free-icons/eye - Eye icons created by torskaya - Flaticon</a>
      finalString += `
      <td><img src="https://i.ibb.co/r4Vy0Cp/view.png" title="Element visible" alt="Element visible"></td>
        `;
    }
  }

  // select all input and textarea elements
  const result = document.querySelectorAll("input, textarea");
  result.forEach(function (element) {
    if (includeHidden == true) {
      logElement(element);
    } else {
      if (element.offsetParent !== null) {
        logElement(element);
      }
    }
  });

  // insert elements into html table structure and open in new window
  let newWindow = window.open("about:blank");
  if (newWindow) {
    let htmlOutput = htmlTable.replace("{{table_rows_here}}", finalString);
    newWindow.document.write(htmlOutput);
    newWindow.stop();
  }
};
print_inputs();
