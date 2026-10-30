const travelInfo = {
  name: "Sam",
  countries: [
    { name: "Japan", year: 2019 },
    { name: "Italy", year: 2022 },
    { name: "Canada", year: 2024 }
  ]
};

fetch("https://thejsway-server.herokuapp.com/api/countries", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(travelInfo)
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    return response.text();
  })
  .then(message => {
    console.log(message);
  })
  .catch(error => {
    console.error(error.message);
  });