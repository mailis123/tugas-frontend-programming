import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { updateMovies } from "../../components/features/moviesSlice";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constans/endpoints";
import { useDispatch } from "react-redux";

function Detail() {

    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        getRecommendationMovies();
    }, [id]);

    async function getRecommendationMovies() {
        //const URL = 'https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}'
        
    const response = await axios(ENDPOINTS.RECOMMENDATIONS(id));
    const movies = response.data.results;
    dispatch(updateMovies(movies));
        //
    }

    return ( 
    // <h2>Halaman Detail Movie {params.id}</h2>
   <>
   <DetailMovie />
   <Movies title="RECOMMENDATIONS MOVIE" />
   </>
    );

}

export default Detail;