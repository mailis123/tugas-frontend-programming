import React, { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../components/features/moviesSlice";
import ENDPOINTS from "../../utils/constans/endpoints";


function PopularMovie() {
 // Simpan API KEY dan URL ke Variable
  // Membuat state movies
  const dispatch = useDispatch();


    useEffect (() => {
        getPopularMovies();
    }, [] );

    async function getPopularMovies() {

        const response = await axios(ENDPOINTS.POPULAR);
        const movies = response.data.result;
        
        dispatch(updateMovies(movies));
    }
    //render component movies
    return(
        <>
        <Hero/>
        <Movies title="Populer Movie" />
        </>
    );
}

export default PopularMovie;