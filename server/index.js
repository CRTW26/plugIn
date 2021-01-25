const express = require('express');
const app = express();
const fetch = require('node-fetch');
const cors = require('cors');

app.use(cors());

app.listen(3000, () => console.log('Active on port 3000'));

app.get('/api/location/:postcode', async (request, response) => {
// app.get('/api/location/', async (request, response) => {
  console.log(request.params)
  const postcode = request.params.postcode
  const locationData = await fetch(`https://api.postcodes.io/postcodes/${postcode}`)
  const locationResponse = await locationData.json();
  console.log("hello");
  response.json(locationResponse)
});