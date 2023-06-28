import axios from "axios";
import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../components/features/moviesSlice";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constans/endpoints";

function NowPlaying() {
    
    const dispatch = useDispatch();

    
    useEffect(() => {
        getNowPlayingMovies();
    }, []);

    async function getNowPlayingMovies() {

        const response = await axios(ENDPOINTS.NOW_PLAYING);

        const movies = response.data.results;
        dispatch(updateMovies(movies));
    } 
    
    
    return(
        <>
        <Hero/>
        <Movies title="Now Playing Movies" />
        </>
    );
}

export default NowPlaying;