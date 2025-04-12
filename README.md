Weather Forecast Website
Overview
This project is a weather forecast application built using the MERN stack (MongoDB, Express, React, and Node.js). It fetches real-time weather data based on user input using the OpenWeatherMap API.

Features
- User-friendly interface to search for weather by city.
- Displays temperature, humidity, wind speed, and weather conditions.
- Responsive design for various devices.


Prerequisites
Before you start, ensure you have the following installed:
- Node.js
- npm (Node Package Manager)
- A modern web browser
- OpenWeatherMap API key


Installation Steps
1. Clone the Repository
git clone https://github.com/your-repo/weather-forecast.git
cd weather-forecast


2. Install Dependencies
For the Server
Navigate to the server folder:
cd server
npm install


For the Frontend
Navigate to the client folder:
cd client
npm install



Usage
1. Start the Server
cd server
node server.js


2. Start the Frontend
Open a new terminal and navigate to the client folder:
cd client
npm start


3. Access the Application
Open your browser and go to http://localhost:3000.

Environment Variables
Create a .env file in the server folder and add your OpenWeatherMap API key:
OPENWEATHERMAP_API_KEY=your_api_key_here


Replace your_api_key_here with your actual API key.

Folder Structure
weather-forecast/
├── server/
│   ├── server.js
│   ├── routes/
│   │   ├── weather.js
│   ├── .env
│   ├── package.json
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── index.js
│   ├── public/
│   ├── package.json
├── README.md



Troubleshooting
- Server Not Starting: Ensure that the .env file has a valid OpenWeatherMap API key.
- Frontend Not Starting: Check for React dependencies in the client folder (npm install).
- Weather Data Not Fetching: Verify the API key and base URL in the server's route file.


