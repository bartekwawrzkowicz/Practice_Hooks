import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { MainContext } from './context/MainContext';

const API = 'https://api.tvmaze.com/shows';


function App() {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(API)
      .then(res => res.data)
      .then(data => setMovieList(data))
      .catch(err => console.log(err))

    setIsLoading(false)
  }, []);

  return (
    <MainContext.Provider value={{ isLoading, movieList }} >
      <div className="row">
        <Header />
        <Hero />
        <Footer />
      </div>
    </MainContext.Provider>
  );
}

export default App;
