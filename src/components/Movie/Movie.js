/**
 * import CSS Module Movie
 * simpan di variable styles
 */
import React from 'react';
import styles from './Movie.module.css';
import StyledMovie from './Movie.styled';

// menerima props
function Movie(props) {
  // destructing props
  const { movie } = props;

  return (
    <StyledMovie>
      <img
        src={movie.poster}
        alt={movie.title}
        />
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
    </StyledMovie>
  );
}

export default Movie;