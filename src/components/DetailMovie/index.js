import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ENDPOINTS from "../../utils/constans/endpoints";
import Button from "../ui/Button/Button";
import StyledDetailMovie from "./DetailMovieStyled";

function DetailMovie(){
    const { id }= useParams();
    //const API_KEY = process.env.REACT_APP_API_KEY;
    const {movie, setMovie} = useState("");
    const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
    const Trailer =
      movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

  // Jalankan useEffect: fetch detail movie
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getDetailMovie();
    /**
     * - Menambahkan id state pada parameter kedua sebagai Lifecycle Update
     */
    // eslint-disable-next-line 
  }, [id]);
  
  // Buat fungsi untuk mengambil detail movie dari API TMDB
  // eslint-disable-next-line 
  async function getDetailMovie() {
    // Fetch data dari axios
    const response = await axios(ENDPOINTS.DETAIL(id));

    // simpan data ke state movies
    setMovie(response.data);
    // eslint-disable-next-line 
  }

  return (
    <StyledDetailMovie>
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt=""
        />
      </div>
      <div className="info">
        <h2>{movie.title}</h2>
        <h3>Genre: {genres}</h3>
        <p>{movie.overview}</p>
        <Button as="a" href={Trailer}>
          Watch
        </Button>
      </div>
    </StyledDetailMovie>
  );
}

export default DetailMovie;