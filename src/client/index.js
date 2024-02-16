require("dotenv").config();

const { response } = require("express");

function searchCities() {
  const input = document.getElementById("location").value;

  if (input.length < 3) return;

  const username = process.env.GEONAMES_USERNAME;
  const url = `http://api.geonames.org/searchJSON?formatted=true&q=${input}&maxRows=10&username=${username}&style=full&cities=cities1000`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      showSuggestions(data.geonames);
    })
    .catch((error) => console.error("Error fetching data: ", error));
}

function showSuggestions(geonames) {
  const showSuggestionsList = document.getElementById("suggestions");
  showSuggestionsList.innerHTML = "";

  geonames.forEach((place) => {
    const option = document.createElement("option");
    option.value = place.name;
    showSuggestionsList.appendChild(option);
  });
}
