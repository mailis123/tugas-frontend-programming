import styles from "./Hero.module.css";
import { useEffect, useState } from "react";

function Hero() {

  const [movie, setMovie] = useState("");
  
  async function fetchMovie() {
    const url = "https://ww.omdbapi.com/?apikey=fcf50ae6&i-tt2975590";

    const response = await fetchMovie(url);
    const data = await response.json();

    setMovie(data);
  }
  useEffect(fetchMovie, []);

  
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
