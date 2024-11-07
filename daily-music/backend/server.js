// backend/server.js
import express from 'express';
import cors from 'cors';
import { composers } from './constance.js';
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS for all routes


// Define a route to fetch data
app.get('/api/composer', (req, res) => {
  try{

  console.log('invoke')
    const randomIndex = Math.floor(Math.random() * composers.length);
    const randomOption = composers[randomIndex];
    console.log({randomOption})

    res.status(200).json(randomOption);
  }catch{
    next(error);
  }
});
// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'An unexpected error occurred. Please try again later.' });
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});