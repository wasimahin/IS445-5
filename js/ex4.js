const form = document.getElementById("sampleForm");
const output = document.getElementById("output");

const makeCell = (tag, text) => {
  const cell = document.createElement(tag);
  cell.textContent = text;
  return cell;
};

form.addEventListener("submit", event => {
  event.preventDefault();

  const formData = new FormData(form);

  const heading = document.createElement("h3");
  heading.textContent = "Form Data Entered";

  const table = document.createElement("table");

  const headerRow = document.createElement("tr");
  headerRow.appendChild(makeCell("th", "Key"));
  headerRow.appendChild(makeCell("th", "Value"));
  table.appendChild(headerRow);

  for (const [key, value] of formData) {
    const row = document.createElement("tr");
    row.appendChild(makeCell("td", key));
    row.appendChild(makeCell("td", value));
    table.appendChild(row);
  }

  output.innerHTML = "";
  output.appendChild(heading);
  output.appendChild(table);
});

form.addEventListener("reset", () => {
  output.innerHTML = "";
});