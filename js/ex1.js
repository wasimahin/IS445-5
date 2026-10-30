const paintingsTable = document.getElementById("paintings");

fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    return response.json();
  })
  .then(paintings => {
    for (const painting of paintings) {
      const row = document.createElement("tr");

      for (const value of [painting.name, painting.year, painting.artist]) {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
      }

      paintingsTable.appendChild(row);
    }
  })
  .catch(error => {
    console.error(error.message);
  });