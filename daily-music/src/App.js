import backgroundImage from './assets/images/vecteezy_music-notes-background-illustration_24294799.jpg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import MusicLinks from './MusicLinks'
import {composers} from './Data'


const App = () => {

  const [composer, setComposer] = useState([]);

  useEffect(() => {
    const rand = Math.floor(Math.random() * composers.length);
    setComposer(composers[rand]);
  }, []);  

  
  return (
    <div className="background" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {console.log("composer", composer)}
      {composer? (
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
              {composer.name}<Typography variant="body2" component="div" style={{ marginTop: "4px" }}>
              {composer.years}
            </Typography>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {composer.description}
            </Typography>
            <MusicLinks composer={composer}/>
            <a href={composer.wikiLink} target="_blank" rel="noopener noreferrer">
              <button size="small" style={{ marginTop: "20px" }}>{composer.name} on Wikipedia</button>
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
