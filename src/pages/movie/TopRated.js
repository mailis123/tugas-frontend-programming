import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../components/features/moviesSlice";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constans/endpoints";

function TopRatedMovie() {

    const dispatch = useDispatch();

    useEffect (() => {
        getTopRatedMovies();
    }, []);

    async function getTopRatedMovies() {

        const response = await axios(ENDPOINTS.TOP_RATED);

        const movies = response.data.result;
        dispatch(updateMovies(movies));
    }
    return(
        <>
        <Hero />
        <Movies title="Top Rated Movies"/>
        </>
    );
}

export default TopRatedMovie;