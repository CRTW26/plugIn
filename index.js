require('dotenv').config();

const express = require('express');
const app = express();
const fetch = require('node-fetch');
const cors = require('cors');

app.use(express.static('./client/build'));

app.use(cors({
  origin: "http://localhost:8080",
  methods: "GET"
}));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Active on ${PORT}`));

app.get('/api/location/:postcode', async (request, response) => {
  console.log(request.params)
  const postcode = request.params.postcode
  const locationData = await fetch(`https://api.postcodes.io/postcodes/${postcode}`)
  const locationResponse = await locationData.json();
  console.log("hello");
  response.json(locationResponse)
});

app.get('/api/stations/:lat/:lng', async (request, response) => {
  const lat = request.params.lat;
  const lng = request.params.lng;
  const key = process.env.API_key;
  const stationData = await fetch(`https://api.openchargemap.io/v3/poi/?output=json&countrycode=GB&maxresults=20&compact=true&verbose=false&latitude=${lat}&longitude=${lng}&distance=30&distanceunit=km&opendata=true&key=${key}`);
  const stationResponse = await stationData.json();
  response.json(stationResponse);
});