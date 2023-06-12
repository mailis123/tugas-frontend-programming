import axios from "axios";
import React, {useEffect, useState} from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";


function NowPlaying() {
    // menyimpan api_key dan url ke variable
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

    // buat state movies
    const  [movies, setMovies] = useState([]);

    useEffect(() => {
        getNowPlayingMovies();
    }, []);

    async function getNowPlayingMovies() {

        const response = await axios(URL);

        setMovies(response.data.results);
    } 
    
    
    return(
        <>
        <Hero/>
        <Movies titlePage="Now Playing Movies" movies={movies}/>
        </>
    );
}

export default NowPlaying;