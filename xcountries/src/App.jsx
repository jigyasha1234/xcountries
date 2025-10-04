import Card from './card';
import { useEffect, useState } from 'react';

function App() {
  const [cardData, setCardData] = useState(null);
  const fetchCardData = async () => {
    const response = await fetch('https://xcountries-backend.labs.crio.do/all');
    const data = await response.json();
    setCardData(data);
  }

  useEffect(() => {
    try{
    fetchCardData();
    }catch{
      console.error("Error fetching data: ", error);
    }
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
