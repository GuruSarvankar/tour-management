import Cards from './components/Cards';
import Footer from './components/Footer';
import Header from './components/Header';
import { useEffect, useState } from 'react';

function App() {
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState({ error: false, message: '' });

  const getHotelsData = async () => {
    try {
      const response = await fetch('http://localhost:3005/api/v1/hotels');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();

      if (jsonData && jsonData.length > 0) {
        setHotels(jsonData);
        setError({
          error: false,
          message: '',
        });
      } else {
        setError({
          error: true,
          message: 'No data found.',
        });
      }
    } catch (error) {
      setError({
        error: true,
        message: `${error.message}.`,
      });
    }
  };

  useEffect(() => {
    getHotelsData();
  }, []);

  return (
    <>
      <Header />
      <div className='flex justify-center'>
        {error && error.message}
        {hotels &&
          hotels.map((hotel, index) => <Cards key={index} hotel={hotel} />)}
      </div>
      <Footer />
    </>
  );
}

export default App;
