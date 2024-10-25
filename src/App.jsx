import Cards from './components/Cards';
import Footer from './components/Footer';
import Header from './components/Header';
import { useEffect, useState } from 'react';

function App() {
  const [hotels, setHotels] = useState([]);

  const getHotelsData = async () => {
    const response = await fetch('http://localhost:3005/api/v1/hotels');
    const data = await response.json();

    // console.log(data);
    setHotels(data);
  };

  useEffect(() => {
    getHotelsData();
  }, []);

  return (
    <>
      <Header />
      <div className='flex justify-center'>
        {hotels &&
          hotels.map((hotel, index) => <Cards key={index} hotel={hotel} />)}
      </div>
      <Footer />
    </>
  );
}

export default App;
