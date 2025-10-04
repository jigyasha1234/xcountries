import Card from './card';
import { useEffect, useState } from 'react';

function App() {
    const [cardData, setCardData] = useState(null);

  const fetchCardData = async () => {
    try {
      const response = await fetch('https://xcountries-backend.labs.crio.do/all');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setCardData(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchCardData();
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '10px', justifyContent: 'center' }}>
      {cardData && cardData.map((country) => (
        <Card
          title={country.name}
          image={country.flag}
          abbr={country.abbr}
        />
      ))} 
    </div>
  );
}

export default App;
