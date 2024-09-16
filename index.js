// Step 1: Create a new Replit project
// Go to Replit.com and create a new project using the Node.js template

// Step 2: Set up Express.js
const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

// Step 3: Create a route to fetch weather data
app.get('/weather', async (req, res) => {
  try {
    const { city } = req.query;
    const apiKey = '4bca89ba6ad777bcb895c94a2ca1d894';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});