const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const port = 3001;

app.use(cors());

app.get('/search', async (req, res) => {
  const apiKey = '10fdd144f44a3c54fa9dd9fb1619184733cef24fae7f7c790ace2425ea03702e'; // Replace with your SerpApi API key
  const query = 'barista new york';
  const url = `https://serpapi.com/search.json?engine=google_jobs&q=${query}&api_key=${apiKey}&hl=en`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
