// Modules imports
const express = require('express');

const app = express();
const port = 3000;

app.get('/', async (req,res) => {
    console.log("There's someone here!!!!");
    res.json({message: 'You have landed on my empty page, to get weather information, go to /weather'});
});

app.get('/weather', async (req,res) => {
    console.log("Weather request received.");
    
    const apiKey = process.env.API_KEY;
    const lat = 52.9500;
    const lon = -1.1500;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    
});

app.listen(port, () => {
    console.log(`Yay! The server is running on http://localhost:${port}`);
});