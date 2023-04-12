// Lakukan import Navbar, Footer Component
import React, { useState } from 'react';
import AddMovieForm from '../components/AddMovieForm/AddMovieForm';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Movies from '../components/Movies/Movies';
import Navbar from '../components/Navbar/Navbar';
import data from '../utils/constans/data';

/**
 * Membuat Component Main
 * Untuk menyimpan Component Hero, Movies dan AddMovieForm
 */
function Main() {

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
function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

// Lakukan export Home
export default Home;