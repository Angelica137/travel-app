require("dotenv").config();

const cors = require("cors");
const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../../dist")));

async function fetchData(url) {
  const fetch = (await import("node-fetch")).default;
  const response = await fetch(url);
  return response.json();
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../dist", "index.html"));
});

app.get("/api/searchCities", async (req, res) => {
  const input = req.query.q;
  const username = process.env.GEONAMES_USERNAME;
  const url = `http://api.geonames.org/searchJSON?formatted=true&q=${input}&maxRows=10&username=${username}&style=full&cities=cities1000`;

  try {
    const data = await fetchData(url);
    res.json(data);
  } catch (error) {
    console.error("Error fetching data from GeoNames API: ", error);
    res.status(500).send("Error fetching data from GeoNames API");
  }
});

app.get("/api/weather", async (req, res) => {
  const { lat, lng, date } = req.query;
  const apiKey = process.env.WEATHERBIT_API_KEY;
  const url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${apiKey}`;

  try {
    const data = await fetchData(url);
    const forecasts = data.data;
    const forecastForTravelDate = forecasts.find(
      (forecast) => forecast.valid_date === date
    );
    if (forecastForTravelDate) {
      res.json(forecastForTravelDate);
    } else {
      res.status(404).send("Forecast for the specified date not found.");
    }
  } catch (error) {
    console.error("Error fetching weather data from Weatherbit API: ", error);
    res.status(500).send("Error fetching weather data from Weatherbit API");
  }
});

app.get("/api/destination", async (req, res) => {
  const { destination } = req.query;
  console.log("Image fetched");
  const apiKey = process.env.PIXABAY_API_KEY;
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${destination}&image_type=photo`;

  try {
    const data = await fetchData(url);
    res.json(data);
  } catch (error) {
    console.error("Error fetching data from Pixabay: ", error);
    res.status(500).send("Error fetching data from Pixabay:");
  }
});

app.listen(port, () => {
  console.log(`My app listening at http://localhost:${port}`);
});
