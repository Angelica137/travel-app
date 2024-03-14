// store fetched cities so we cna refer back to them to get the
// let and long
let geonamesData = [];

window.searchCities = function () {
  const input = document.getElementById("location").value;

  if (input.length < 3) return;

  const url = `/api/searchCities?q=${input}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      geonamesData = data.geonames;
      showSuggestions(data.geonames);
    })
    .catch((error) => console.error("Error fetching data: ", error));
};

function showSuggestions(geonames) {
  const showSuggestionsList = document.getElementById("suggestions");
  showSuggestionsList.innerHTML = "";

  geonames.forEach((place) => {
    const option = document.createElement("option");
    option.value = place.name;
    showSuggestionsList.appendChild(option);
  });
}

function handleSubmit() {
  const locationInput = document
    .getElementById("location")
    .value.trim()
    .toLowerCase();
  const travelDate = document.getElementById("date").value;

  // Log the input and data for debugging purposes
  console.log("Input: ", locationInput, "Travel Date: ", date);
  console.log("Data:", geonamesData);

  const selectedPlace = geonamesData.find(
    (place) => place.name.toLowerCase() === locationInput
  );

  console.log("Selected Place: ", selectedPlace);

  if (!selectedPlace) {
    console.error("Selected location not found in geonames data");
    return;
  }

  const lat = selectedPlace.lat;
  const lng = selectedPlace.lng;

  const weatherUrl = `/api/weather?lat=${lat}&lng=${lng}`;

  fetch(weatherUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log("Weather data", data);
      displayWeather(data);
    })
    .catch((error) => console.error("Error fetching weather data:", error));
}

function displayWeather(data) {
  const temperature = data.weatherObservation.temperature;
  // results will display in div id="weather"
  const weatherDiv = document.getElementById("weather");

  // Clear previous weahter data
  weatherDiv.innerHTML = "";

  // Create an element to append the results to
  const tempElement = document.createElement("p");
  tempElement.textContent = `Temperature: ${temperature}°C`;
  weatherDiv.appendChild(tempElement);
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("location").addEventListener("input", searchCities);
  document.getElementById("submitForm").addEventListener("click", handleSubmit);
});
