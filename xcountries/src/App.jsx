import Card from './card';
import { useEffect, useState } from 'react';

function App() {
  const [cardData, setCardData] = useState(null);
  const fetchCardData = async () => {
    const response = await fetch('https://xcountries-backend.labs.crio.do/all');
    const data = await response.json();
    console.log(data);
    setCardData(data);
  }

  useEffect(() => {
    try{
    fetchCardData();
    }catch{
      console.error("Error fetching data from API: ", error);
    }
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', justifyContent: 'center' }}>
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
