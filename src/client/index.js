import "./styles/main.css";
import "../images/a4e2cae49406d354171d954f79bbf4eb.jpg";

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

  const destinationUrl = `/api/destination?destination=${encodeURIComponent(
    locationInput
  )}`;
  fetch(destinationUrl)
    .then((response) => response.json())
    .then((data) => displayDestination(data))
    .catch((error) =>
      console.error("error fetching destination image: ", error)
    );
}

function displayWeather(data) {
  // results will display in div id="weather"
  const weatherDiv = document.getElementById("weather");

  // Clear previous weahter data
  weatherDiv.innerHTML = "";

  // Check if forecast exists
  if (
    data &&
    data.temp !== undefined &&
    data.weather &&
    data.weather.description
  ) {
    // Display temperature, create element to append data to
    const tempElement = document.createElement("p");
    tempElement.textContent = `Temperature: ${data.temp}°C`;
    weatherDiv.appendChild(tempElement);

    // Create an element to append conditions to
    const conditionsElement = document.createElement("p");
    conditionsElement.textContent = `Condition: ${data.weather.description}`;
    weatherDiv.appendChild(conditionsElement);
  } else {
    weatherDiv.innerHTML = "Weather data is not available";
  }
}

function displayDestination(data) {
  const destinationDiv = document.getElementById("destination");
  destinationDiv.innerHTML = "";

  if (data && data.hits && data.hits.length > 0) {
    const imgElement = document.createElement("img");
    imgElement.src = data.hits[0].webformatURL;
    destinationDiv.appendChild(imgElement);
  } else {
    destinationDiv.innerHTML = "Displaying image failed";
  }
}

function displayCountDown(travelDate) {
  const currentDate = new Date();
  const destinationDate = new Date(travelDate);
  const timeDifference = destinationDate - currentDate;
  const daysUntilTrip = Math.ceil(timeDifference / (1000 * 3600 * 24));

  const countDownDiv = document.getElementById("countdown");
  countDownDiv.innerHTML = `${daysUntilTrip} days to go!`;

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
