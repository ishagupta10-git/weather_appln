// client/src/App.js
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ErrorMessage from './components/ErrorMessage';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Dashboard</h1>
        <SearchBar 
          setWeatherData={setWeatherData}
          setIsLoading={setIsLoading}
          setError={setError}
        />
      </header>
      <main className="App-main">
        {error && <ErrorMessage message={error} />}
        {isLoading && <div className="loading">Loading weather data...</div>}
        {!isLoading && !error && weatherData && <WeatherCard data={weatherData} />}
        {!isLoading && !error && !weatherData && (
          <div className="initial-message">
            Enter a city name to get the current weather
          </div>
        )}
      </main>
      <footer className="App-footer">
        <p>Weather Dashboard &copy; 2025</p>
      </footer>
    </div>
  );
}

export default App;

