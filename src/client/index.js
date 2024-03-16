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
  const travelDate = document.getElementById("travelDate").value;
  console.log("date from client:", travelDate);

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

  const weatherUrl = `/api/weather?lat=${lat}&lng=${lng}&date=${travelDate}`;

  fetch(weatherUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log("Forecast data for travel date", data);
      displayWeather(data);
      displayCountDown(travelDate);
    })
    .catch((error) => console.error("Error fetching weather data:", error));
}

function displayWeather(data) {
  // results will display in div id="weather"
  const weatherDiv = document.getElementById("weather");

  // Clear previous weahter data
  weatherDiv.innerHTML = "";

  // Check if forecast exists
  if (data && data.data && data.data.length > 0) {
    const forecast = data.data[0];
    const description = forecast.weather.description;
    const temperature = forecast.temp;

    // Create an element to append the results to
    const descElement = document.createElement("p");
    descElement.textContent = `Weather: ${description}°C`;
    weatherDiv.appendChild(tempElement);

    // Create an element to append the results to
    const tempElement = document.createElement("p");
    tempElement.textContent = `Weather: ${temperature}°C`;
    weatherDiv.appendChild(tempElement);
  } else {
    weatherDiv.innerHTML = "Weather data is not available";
  }
}

function displayCountDown(travelDate) {
  const currentDate = new Date();
  const destinationDate = new Date(travelDate);
  const timeDifference = destinationDate - currentDate;
  const daysUntilTrip = Math.ceil(timeDifference / (1000 * 3600 * 24));

  const countDownDiv = document.getElementById("countdown");
  countDownDiv.innerHTML = `Days until trip: ${daysUntilTrip}`;

  if (daysUntilTrip < 0) {
    countDownDiv.innerHTML = "This date in the past";
  } else if (daysUntilTrip === 0) {
    countDownDiv.innerHTML = "Your trip is today!";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("location").addEventListener("input", searchCities);
  document.getElementById("submitForm").addEventListener("click", handleSubmit);
});
