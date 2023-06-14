import React, { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";

function PopularMovie() {
    // simpan apikey
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
    const [movies, setMovies] = useState([]);

    useEffect (async() => {
        getPopularMovies();
    }, [] );

    async function getPopularMovies() {

        const response = await axios(URL);

        setMovies(response.data.result);
    }

    console.log(movies);

    return(
        <>
        <Hero/>
        <Movies titlePage="Popular Movies" movies={movies} />
        </>
    );
}

export default PopularMovie;