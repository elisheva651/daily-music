import backgroundImage from './assets/images/vecteezy_music-notes-background-illustration_24294799.jpg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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

  return (
    <div className="background" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1>{composer.name}</h1>
        {/* <Card key={composer.name} sx={{ maxWidth: 345, margin: 2 }}>
          <CardMedia
            component="img"
            alt={composer.name}
            height="140"
            image={composer.image} // Assuming each composer object has an 'image' property
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {composer.name} {/* Assuming each composer object has a 'name' property */}
            {/* </Typography>
            <Typography variant="body2" color="text.secondary">
              {composer.description} {/* Assuming each composer object has a 'description' property */}
            {/* </Typography>
            <Button size="small">Learn More</Button> */}
        {/* //   </CardContent> */}
        {/* // </Card> */} 
    </div>
  );
}

export default App;
