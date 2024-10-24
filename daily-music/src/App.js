import backgroundImage from './assets/images/vecteezy_music-notes-background-illustration_24294799.jpg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MusicLinks from './MusicLinks'

const App = () => {
  const [composer, setComposer] = useState([]);

  useEffect(() => {
    const fetchComposer = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/composer');
        const result = await response.json();
        setComposer(result);
      } catch (error) {
        console.error('Error fetching composer:', error);
      }
    };

    fetchComposer();
  }, []);

  const getVideoID = (url) => {
    const urlParts = url.split("v=");
    return urlParts[1]?.split("&")[0]; // Extract ID from "https://www.youtube.com/watch?v=ID"
  };

  return (
    <div className="background" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {composer ? (
        <Card key={composer.id} className="cards">
          <CardMedia
            component="img"
            alt={composer.name}
            height="200"
            // transform: 'scale(0.7)'
            sx = {{objectFit : 'contain'}}
            image={composer.image} // Using the image from the composer object
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {composer.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {composer.description}
            </Typography>
            <MusicLinks composer={composer}/>
            <a href={composer.wikiLink} target="_blank" rel="noopener noreferrer">
              <button size="small">{composer.name} on Wikipedia</button>
            </a>       
            
            </CardContent>
        </Card>
      ) : (
        <Typography variant="body2" color="text.secondary">
          Error. Load again. 
        </Typography>
      )}
    </div>
  );
}

export default App;
