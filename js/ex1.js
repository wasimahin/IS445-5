const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return [];
  }
};

const houseSelect = document.getElementById("house");
const charactersList = document.getElementById("characters");

for (const house of houses) {
  const option = document.createElement("option");
  option.value = house.code;
  option.textContent = house.name;
  houseSelect.appendChild(option);
}

houseSelect.addEventListener("change", () => {
  charactersList.innerHTML = "";

  for (const character of getCharacters(houseSelect.value)) {
    const item = document.createElement("li");
    item.textContent = character;
    charactersList.appendChild(item);
  }
});