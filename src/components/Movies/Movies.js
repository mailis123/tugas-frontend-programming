import React from "react";
import styles from "./Movies.module.css";
// import data from "../../utils/constans/data";
import Movie from "../Movie/Movie";
// import { useState } from "react";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";

function Movies ({title}) {

    const movies = useSelector((state) => state.movies.movies);
    
    return (
      <div className={styles.container}>
        <section className={styles.movies}>
          <h2 className={styles.movies__title}>{title}</h2>
          <div className={styles.movie__container}>
            {/* looping: map */}
            {movies.map((movie) => {
              return <Movie key={movie.id} movie={movie} />;
            })}
          </div>

        </section>
      </div>
    );
  }

export default Movies;
