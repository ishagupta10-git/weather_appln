const express = require('express');
const axios = require('axios');
const router = express.Router();

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = process.env.OPENWEATHERMAP_API_KEY;

router.get('/weather', async (req, res) => {
    try {
        const { city } = req.query;

        // Validate city parameter
        if (!city || city.trim() === '') {
            return res.status(400).json({ 
                success: false, 
                message: 'City parameter is required' 
            });
        }

        const response = await axios.get(BASE_URL, {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric'  // Use metric units for Celsius
            }
        });

        // Extract relevant data
        const weatherData = {
            city: response.data.name,
            country: response.data.sys.country,
            temperature: response.data.main.temp,
            feels_like: response.data.main.feels_like,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            humidity: response.data.main.humidity,
            wind_speed: response.data.wind.speed,
            pressure: response.data.main.pressure,
            timestamp: new Date(response.data.dt * 1000).toISOString()
        };

        res.json({ success: true, data: weatherData });
    } catch (error) {
        // Handle specific error for city not found
        if (error.response && error.response.status === 404) {
            return res.status(404).json({
                success: false,
                message: 'City not found'
            });
        }

        // Handle other errors
        console.error('Error fetching weather data:', error.message);
        res.status(500).json({
            success: false,
            message: 'Error fetching weather data'
        });
    }
});

module.exports = router;