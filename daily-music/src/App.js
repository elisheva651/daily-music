import backgroundImage from './assets/images/vecteezy_music-notes-background-illustration_24294799.jpg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import MusicLinks from './MusicLinks'

const App = () => {
  const [composer, setComposer] = useState([]);


  
  useEffect(() => {
    const fetchComposer = async () => {
      try {
        const url = process.env.REACT_APP_API_URL || "http://localhost:5000";
        const response = await fetch(`${url}/api/composer`);
  
        // Check if the response is okay (status code 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const result = await response.json();
        setComposer([result]);
      } catch (error) {
        console.error('Error fetching composer:', error);
        console.error('Error fetching composer:', error.message || error);

      }
  
      // Logging the composer state (might not show updated value immediately)

      console.log("composer", composer);
    };
  
    fetchComposer();
  }, []);


  return (
    // ff
    <div className="background" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {composer && composer.length > 0? (
        <Card key={composer[0].id} className="cards">
          <CardMedia
            component="img"
            alt={composer[0].name}
            height="200"
            // transform: 'scale(0.7)'
            sx = {{objectFit : 'contain'}}
            image={composer[0].image} // Using the image from the composer object
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {composer[0].name}<Typography variant="body2" component="div" style={{ marginTop: "4px" }}>
              {composer[0].years}
            </Typography>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {composer[0].description}
            </Typography>
            <MusicLinks composer={composer[0]}/>
            <a href={composer[0].wikiLink} target="_blank" rel="noopener noreferrer">
              <button size="small" style={{ marginTop: "20px" }}>{composer[0].name} on Wikipedia</button>
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
