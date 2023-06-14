import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constans/endpoints";

function Detail() {

    const [movies, setMovies] = useState([]);
    const {id} = useParams();
    const API_KEY = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        getRecommendationMovies();
    }, [id]);

    async function getRecommendationMovies() {
        const URL = 'https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}'
        ;
    const response = await axios(ENDPOINTS.RECOMMENDATIONS(id));

    setMovies(response.data.results);
    }

    return ( 
    // <h2>Halaman Detail Movie {params.id}</h2>
   <>
   <DetailMovie />
   <Movies movie={movies} />
   </>
    );

}

export default Detail;