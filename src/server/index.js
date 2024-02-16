require("dotenv").config();

const path = require("path");
const express = require("express");
const app = express();
const fetch = require("node-fetch");

const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../dist", "index.html"));
});

app.get("api/searchCities", (req, res) => {
  const input = req.query.q;
  const username = process.env.GEONAMES_USERNAME;
  const url = `http://api.geonames.org/searchJSON?formatted=true&q=${input}&maxRows=10&username=${username}&style=full&cities=cities1000`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => res.json(data))
    .catch((error) => {
      console.error("Error fetching data from  GeoNames API: ", error);
      res.status(500).send("Error fetching data from GeoNames API");
    });
});

app.listen(port, () => {
  console.log(`My app listening at http://localhost${port}`);
});
