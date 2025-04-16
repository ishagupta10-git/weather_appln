const express=require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
// Load environment variables
dotenv.config();

// Import routes
const weatherRoutes = require('./routes/weather');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const buildpath = path.join(__dirname, "../client/build");
app.use(express.static(buildpath));

// React/Vite fallback route
app.get("*", (req, res) => {
  res.sendFile(path.join(buildpath, "index.html"));
});

// Routes
app.use('/api', weatherRoutes);

// Health check route
app.get('/', (req, res) => {
  res.send('Weather API is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});


