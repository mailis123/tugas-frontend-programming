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
function Home({ movies, setMovies}) {


  return (

  <>
    <div>
      <Hero/>
      <Movies title="Latest movie"/>/
    </div>
  </>
    
  );
}

/**
 * Buat Component Home
 * Untuk menyimpan Navbar, Main, & Footer Component
 */


// Lakukan export Home
export default Home;