import styles from "./Hero.module.css";
import { useEffect, useState } from "react";

function Hero() {

  const [movie, setMovie] = useState("");
  
  // async function fetchMovie() {
  //   const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";

  //   const response = await fetch(url);
  //   const data = await response.json();

  //   setMovie(data);
  // }
  // useEffect(fetchMovie, []);
  async function fetchMovie() {
    const response = await fetch("https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590");
    const data = await response.json();

    setMovie(data);
  }
  
  useEffect(fetchMovie, []);

  console.log(movie);
  
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
      <div className="hero__left">
          <h2>{movie.title}</h2>
          <h3>Genre : {movie.Genre}</h3>
          <p>{movie.Plot}</p>
          </div>

      </section>
    </div>
  );
}

export default Hero;
