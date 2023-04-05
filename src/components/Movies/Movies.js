import styles from "./Movies.module.css";
import data from "../../utils/constans/data";
import Movie from "../Movie/Movie";
import { useState } from "react";
import {  nanoid } from "nanoid";

function Movies() {
  const [movies, setMovies] = useState(data);

function handleClick(){
  const movie = {
    id: nanoid(),
    title:"jigsaw",
    year:2021,
    type:"movie",
    poster: "https://m.media-amazon.com/images/I/71nXlVqnGdL._AC_SY879_.jpg",
  };

  setMovies([...movies, movie]);
}

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          {movies.map ((movie)=>{
          return <Movie key={movie.id} movie={movie} />;
})}
        </div>
        <button onClick={handleClick}>Add movie</button>
      </section>
    </div>
  );
}

export default Movies;
