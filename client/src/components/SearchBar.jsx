import React, { useState } from 'react';
import axios from 'axios';
import './SearchBar.css';

const API_URL = 'http://localhost:5000/api/weather';

const SearchBar = ({ setWeatherData, setIsLoading, setError }) => {
  const [city, setCity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      
      const response = await axios.get(API_URL, {
        params: { city }
      });
      
      setWeatherData(response.data.data);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(error.response.data.message || 'Failed to fetch weather data');
      } else if (error.request) {
        // The request was made but no response was received
        setError('No response from server. Please try again later.');
      } else {
        // Something happened in setting up the request that triggered an Error
        setError('An error occurred. Please try again.');
      }
      setWeatherData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name..."
        className="search-input"
      />
      <button type="submit" className="search-button">
        Get Weather
      </button>
    </form>
  );
};

export default SearchBar;
