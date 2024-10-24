// backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors()); // Enable CORS for all routes

// Sample data to send to the frontend
const composers = [
    { "id": 1,
    "name": "Ludwig van Beethoven",
    "description": "A German composer and pianist, considered one of the greatest composers of all time.",
    "image": "https://example.com/images/beethoven.jpg"},
    { "id": 2,
    "name": "Johann Sebastian Bach",
    "description": "A German composer and pianist, considered one of the greatest composers of all time.",
    "image": "https://example.com/images/beethoven.jpg"},
    { "id": 3,
    "name": "Wolfgang Amadeus Mozart",
    "description": "A German composer and pianist, considered one of the greatest composers of all time.",
    "image": "https://example.com/images/beethoven.jpg"},
    { "id": 4,
    "name": "Johannes Brahms",
    "description": "A German composer and pianist, considered one of the greatest composers of all time.",
    "image": "https://example.com/images/beethoven.jpg"},
    { "id": 5,
    "name": "Richard Wagner",
    "description": "A German composer and pianist, considered one of the greatest composers of all time.",
    "image": "https://example.com/images/beethoven.jpg"},
    { "id": 6,
    "name": "Claude Debussy",
    "description": "A German composer and pianist, considered one of the greatest composers of all time.",
    "image": "https://example.com/images/beethoven.jpg"},
    { "id": 7,
    "name": "Pyotr Ilyich Tchaikovsky",
    "description": "A German composer and pianist, considered one of the greatest composers of all time.",
    "image": "https://example.com/images/beethoven.jpg"},
    { "id": 8,
    "name": "Frédéric Chopin",
    "description": "A German composer and pianist, considered one of the greatest composers of all time.",
    "image": "https://example.com/images/beethoven.jpg"},
    { "id": 9,
    "name": "Joseph Haydn",
    "description": "A German composer and pianist, considered one of the greatest composers of all time.",
    "image": "https://example.com/images/beethoven.jpg"},
    { "id": 10,
    "name": "Antonio Vivaldi",
    "description": "A German composer and pianist, considered one of the greatest composers of all time.",
    "image": "https://example.com/images/beethoven.jpg"},
    
];

// Define a route to fetch data
app.get('/api/composer', (req, res) => {
    const randomIndex = Math.floor(Math.random() * composers.length);
    const randomOption = composers[randomIndex];
    res.json(randomOption);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
