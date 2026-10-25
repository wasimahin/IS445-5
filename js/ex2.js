const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Autria",
  "Azerbaïjan"
];

const countryInput = document.getElementById("country");
const suggestions = document.getElementById("suggestions");

const clearSuggestions = () => {
  suggestions.innerHTML = "";
  suggestions.style.display = "none";
};

const showSuggestions = matches => {
  suggestions.innerHTML = "";

  for (const country of matches) {
    const suggestion = document.createElement("div");
    suggestion.classList.add("suggestion");
    suggestion.textContent = country;
    suggestion.addEventListener("click", () => {
      countryInput.value = country;
      clearSuggestions();
    });
    suggestions.appendChild(suggestion);
  }

  suggestions.style.display = "block";
};

countryInput.addEventListener("input", () => {
  const typed = countryInput.value.trim().toLowerCase();

  if (typed === "") {
    clearSuggestions();
    return;
  }

  const matches = countryList.filter(country => country.toLowerCase().startsWith(typed));

  if (matches.length === 0) {
    clearSuggestions();
  } else {
    showSuggestions(matches);
  }
});

clearSuggestions();