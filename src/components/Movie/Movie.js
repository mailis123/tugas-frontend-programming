/**
 * import CSS Module Movie
 * simpan di variable styles
 */
import React from 'react';
import styles from './Movie.module.css';
import StyledMovie from './Movie.styled';
import { Link } from 'react-router-dom';


// menerima props
function Movie(props) {
  // destructing props
  const { movie } = props;

  return (
    <StyledMovie>
    <h3>{movie.title}</h3>
    <img 
      src={movie.poster || `https://image.tmdb.org/t/p/w300/${movie.poster_path}`} 
      alt={movie.title} 
      />
      {/* <link to={`/movie/${movie.id}`}> 
      <h3>{movie.title}</h3></link> */}

      <link to={'/movie/${movie.id}'}>
        <h3>{movie.title}</h3>
      </link>
    <p>{movie.year || movie.release_date}</p>
  </StyledMovie>
  );
}

export default Movie;