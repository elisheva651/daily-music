import backgroundImage from './assets/images/vecteezy_music-notes-background-illustration_24294799.jpg';
import './App.css';
import React, { useEffect, useState } from 'react';




function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/api/data');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (

    <div className="background"  style={{ backgroundImage: `url(${backgroundImage})` }}>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <a href={item.url}>{item.url}</a>: {item.info}
          </li>
        ))}
      </ul>
    </div>
    
  );
}

export default App;
