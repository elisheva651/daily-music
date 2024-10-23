// backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors()); // Enable CORS for all routes

// Sample data to send to the frontend
const sampleData = [
  { id: 1, url: 'https://example1.com', info: 'Info about example 1' },
  { id: 2, url: 'https://example2.com', info: 'Info about example 2' },
  { id: 3, url: 'https://example3.com', info: 'Info about example 3' },
];

// Define a route to fetch data
app.get('/api/data', (req, res) => {
  res.json(sampleData); // Send the sample data as a JSON response
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
