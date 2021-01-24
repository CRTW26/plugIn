const express = require('express');
const app = express();
const fetch = require('node-fetch');

app.listen(3000, () => console.log('Active on port 3000'));

app.get('/location', async (request, response) => {
  const locationData = await fetch('https://api.postcodes.io/postcodes/nw73ex')
  // const locationResponse = locationData.json();
  const locationResponse = await locationData.json();
  const data = {
    response: locationResponse
  }
  response.json(data);
});