import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { MainContext } from './context/MainContext';

const API = 'https://api.tvmaze.com/shows';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(API)
      .then(res => console.log(res))
      .catch(err => console.log(err))

    setTimeout(() => {
      setIsLoading(false)
    }, 2000);

  }, []);

  return (
    <MainContext.Provider value={{ isLoading, setIsLoading }} >
      <Header />
      <Hero />
      <Footer />
    </MainContext.Provider>
  );
}

export default App;
