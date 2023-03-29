// Lakukan import Navbar, Footer Component
import React from 'react';
import AddMovieForm from '../components/AddMovieForm/AddMovieForm';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Movies from '../components/Movies/Movies';
import Navbar from '../components/Navbar/Navbar';

/**
 * Membuat Component Main
 * Untuk menyimpan Component Hero, Movies dan AddMovieForm
 */
function Main() {
  return (
    <div>
      <Hero />
      <Movies />
      <AddMovieForm />
    </div>
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