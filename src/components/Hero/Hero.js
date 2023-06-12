import React, { useEffect, useState } from "react";
import Button from "../ui/Button/Button";
import StyledHero, { Container } from './Hero.styled';
import axios from "axios";

function Hero() {

  const [movie, setMovie] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const genres = movie && movie.genres.map((genre) => genre.name);
  const idTrailer = movie && movie.videos.result[0].key;

  

  // async function fetchMovie() {
  //   const response = await fetch("https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590");
  //   const data = await response.json();

  //   setMovie(data);
  // }
  useEffect(getTrendingMovies, []);

  async function getTrendingMovies() {
    const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    const response = await axios(URL);
    return response.data.result[0];
  }

  async function getDetailMovie() {
    const trendingMovie = await getTrendingMovies();
    const id = trendingMovie.id; 

    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await axios(URL);
    console.log(response.data);

    setMovie(response.data);
  }
  console.log(movie);
  
  return (
    <Container>
    <StyledHero>
    <div className="hero_left">
      {/* <section className={styles.hero}> */}
      <div className="hero__left">
          <h2>{movie.title}</h2>
          <h3>Genre : {genres}</h3>
          <p>{movie.overview}</p>
          <Button as="a"
          href={`https://www.youtube.com/watch?v=${idTrailer}`}
          target="_blank">Wacth Trailer</Button>
          </div>
      <div className="hero_right">
        <img
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt={movie.title}   
        />
      </div>
    </div>
    </StyledHero>
    </Container>
  );
}

export default Hero;
