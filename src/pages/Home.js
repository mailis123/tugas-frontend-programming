// Lakukan import Navbar, Footer Componentz
import React, { useState } from 'react';
import AddMovieForm from '../components/AddMovieForm/AddMovieForm';
import Hero from '../components/Hero/Hero';
import Movies from '../components/Movies/Movies';
import data from '../utils/constans/data';


/**
 * Membuat Component Main
 * Untuk menyimpan Component Hero, Movies dan AddMovieForm
 */
function Home() {

  const [ movies, setMovies ]= useState(data);


  return (

    <main>
      <div>
      <Hero />
      <Movies movies={movies} setMovies={setMovies}/>
      <AddMovieForm movies={movies} setMovies={setMovies}/>
    </div>
    </main>
    
  );
}

/**
 * Buat Component Home
 * Untuk menyimpan Navbar, Main, & Footer Component
 */


// Lakukan export Home
export default Home;