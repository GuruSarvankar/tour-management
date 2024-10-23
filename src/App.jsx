import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useEffect, useState } from "react";

function App() {
  const [tours, setTours] = useState([]);

  const getToursData = async () => {
    const response = await fetch("http://localhost:3005/api/v1/tours");
    const data = await response.json();

    console.log(data);
    setTours(data);
  };

  useEffect(() => {
    getToursData();
  }, []);

  return (
    <>
      <Header />
      {tours && tours.map((tour, index) => <Cards key={index} tour={tour} />)}
      <Footer />
    </>
  );
}

export default App;
