// backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors()); // Enable CORS for all routes

// Sample data to send to the frontend
const composers = [
    { "id": 1,
    "years": "1770 - 1827",
    "wikiLink": "https://en.wikipedia.org/wiki/Ludwig_van_Beethoven",
    "name": "Ludwig van Beethoven",
    "description": "A German composer and pianist, considered one of the greatest composers of all time.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Joseph_Karl_Stieler%27s_Beethoven_mit_dem_Manuskript_der_Missa_solemnis.jpg",
    "music": ["https://www.youtube.com/watch?v=4Tr0otuiQuU",  "https://www.youtube.com/watch?v=au4CUnM34N4", "https://www.youtube.com/watch?v=wfF0zHeU3Zs"]},
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
    // res.json(randomOption);
    res.json(composers[0])
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
