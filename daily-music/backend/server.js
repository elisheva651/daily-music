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
    "years": "1685 - 1750",
    "wikiLink": "https://en.wikipedia.org/wiki/Johann_Sebastian_Bach",
    "description": " A German composer and musician of the late Baroque period.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Johann_Sebastian_Bach.jpg",
    "music": ["https://www.youtube.com/watch?v=1prweT95Mo0",  "https://www.youtube.com/watch?v=pBCRJPb6VI0", "https://www.youtube.com/watch?v=pdsyNwUoON0"]},
    { "id": 3,
    "name": "Wolfgang Amadeus Mozart",
    "years": "1756 - 1791",
    "wikiLink": "https://en.wikipedia.org/wiki/Wolfgang_Amadeus_Mozart?variant=zh-cn",
    "description": "An Austrian prolific and influential composer of the Classical period.",
    "image":  "https://upload.wikimedia.org/wikipedia/commons/c/cc/Mozart_Portrait_Croce.jpg",
    "music": ["https://www.youtube.com/watch?v=df-eLzao63I",  "https://www.youtube.com/watch?v=rHZ0nkZatJk", "https://www.youtube.com/watch?v=0sGqkMU-mGQ"]},
    { "id": 4,
    "name": "Johannes Brahms",
    "years": "1833 - 1897",
    "wikiLink": "https://en.wikipedia.org/wiki/Johannes_Brahms",
    "description": "A German composer, virtuoso pianist, and conductor of the mid-Romantic period.",
    "image":  "https://upload.wikimedia.org/wikipedia/commons/1/15/JohannesBrahms.jpg",
    "music": ["https://www.youtube.com/watch?v=O192eo9zbT4",  "https://www.youtube.com/watch?v=MEHSJHMcgmY", "https://www.youtube.com/watch?v=5-HcTI8zuBo"]},
    { "id": 5,
    "name": "Richard Wagner",
    "years": "1813 - 1883",
    "wikiLink": "https://en.wikipedia.org/wiki/Richard_Wagner",
    "description": "A German composer, theatre director, polemicist, and conductor who is chiefly known for his operas.",
    "image":  "https://upload.wikimedia.org/wikipedia/commons/9/9d/RichardWagner.jpg",
    "music": ["https://www.youtube.com/watch?v=VMw0EjLFPXw",  "https://www.youtube.com/watch?v=GGU1P6lBW6Q", "https://www.youtube.com/watch?v=SHWFwJ23JaU&list=RDEM4sNDqVxHyzvlGh0LC8PDvw&index=3"]},
    { "id": 6,
    "name": "Sergei Rachmaninoff",
    "years": "1873 - 1943",
    "wikiLink": "https://en.wikipedia.org/wiki/Sergei_Rachmaninoff",
    "description": "A Russian composer, virtuoso pianist, and conductor.",
    "image":  "https://upload.wikimedia.org/wikipedia/commons/b/be/Sergei_Rachmaninoff_cph.3a40575.jpg",
    "music": ["https://www.youtube.com/watch?v=wXQCPAR0EHo",  "https://www.youtube.com/watch?v=qTfYOGqXk5Q&list=PL4D14bmfCxVW71Zlg93imuFA1yhKk7OTY", "https://www.youtube.com/watch?v=t_AiwzQd3Wk"]},
    { "id": 7,
    "name": "Pyotr Ilyich Tchaikovsky",
    "years": "1840 - 1893 ",
    "wikiLink": "https://en.wikipedia.org/wiki/Pyotr_Ilyich_Tchaikovsky",
    "description": "A a Russian composer during the Romantic period.",
    "image":  "https://upload.wikimedia.org/wikipedia/commons/2/20/Tchaikovsky_by_Reutlinger_%28cropped%29.jpg",
    "music": ["https://www.youtube.com/watch?v=SHWFwJ23JaU",  "https://www.youtube.com/watch?v=1aR92yQUS7s", "https://www.youtube.com/watch?v=BWerj8FcprM"]},
    { "id": 8,
    "name": "Frédéric Chopin",
    "years": "1810 - 1849",
    "wikiLink": "https://en.wikipedia.org/wiki/Fr%C3%A9d%C3%A9ric_Chopin",
    "description": "A Polish composer and virtuoso pianist of the Romantic period, who wrote primarily for solo piano.",
    "image":  "https://upload.wikimedia.org/wikipedia/commons/e/e8/Frederic_Chopin_photo.jpeg",
    "music": ["https://www.youtube.com/watch?v=X92SXG9ZSag",  "https://www.youtube.com/watch?v=5quwubcctow", "https://www.youtube.com/watch?v=L1F3sHklg9k"]},
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