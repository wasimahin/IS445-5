const loginInput = document.getElementById("login");
const lookupButton = document.getElementById("lookup");
const picture = document.getElementById("picture");
const info = document.getElementById("info");

const clearResults = () => {
  picture.innerHTML = "";
  info.innerHTML = "";
};

const addRow = (table, label, value) => {
  const row = document.createElement("tr");

  const labelCell = document.createElement("td");
  labelCell.textContent = label;

  const valueCell = document.createElement("td");
  valueCell.textContent = value;

  row.appendChild(labelCell);
  row.appendChild(valueCell);
  table.appendChild(row);
};

const showUser = user => {
  clearResults();

  const image = document.createElement("img");
  image.src = user.avatar_url;
  image.alt = `${user.login} profile picture`;
  image.width = 190;
  picture.appendChild(image);

  const table = document.createElement("table");
  addRow(table, "Name", `${user.name}`);
  addRow(table, "Blog", `${user.blog}`);
  addRow(table, "Created", `${user.created_at}`);
  info.appendChild(table);
};

lookupButton.addEventListener("click", () => {
  const login = loginInput.value.trim();

  if (login === "") {
    return;
  }

  fetch(`https://api.github.com/users/${encodeURIComponent(login)}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      return response.json();
    })
    .then(showUser)
    .catch(error => {
      clearResults();
      console.error(error.message);
    });
});