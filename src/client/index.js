window.searchCities = function () {
  const input = document.getElementById("location").value;

  if (input.length < 3) return;

  const url = `/api/searchCities?q=${input}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
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
