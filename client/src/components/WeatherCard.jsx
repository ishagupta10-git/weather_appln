import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ data }) => {
  if (!data) return null;

  const {
    city,
    country,
    temperature,
    feels_like,
    description,
    icon,
    humidity,
    wind_speed,
    timestamp
  } = data;

  // Format date and time
  const date = new Date(timestamp);
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>{city}, {country}</h2>
        <div className="weather-date">
          {formattedDate} | {formattedTime}
        </div>
      </div>

      <div className="weather-main">
        <div className="weather-icon">
        <img 
          src={`https://openweathermap.org/img/wn/${icon}@4x.png`} 
          alt={description} 
        /> 
          <div className="weather-description">{description}</div>
        </div>
        
        <div className="weather-temp">
          <div className="temp-current">{Math.round(temperature)}°C</div>
          <div className="temp-feels-like">Feels like: {Math.round(feels_like)}°C</div>
        </div>
      </div>

      <div className="weather-details">
        <div className="detail">
          <span className="detail-name">Humidity</span>
          <span className="detail-value">{humidity}%</span>
        </div>
        <div className="detail">
          <span className="detail-name">Wind</span>
          <span className="detail-value">{wind_speed} m/s</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;