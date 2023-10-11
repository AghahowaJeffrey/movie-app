import React from 'react';
import Header from './Header';
import TopRated from './TopRated';
import Footer from './Footer';
import { useEffect, useState } from "react"
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export interface Data {
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

export interface Result {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: string;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      string;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}  

const HomePage = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>();
    const [movies, setMovies] = useState<Data>();
    
    const FeaturedApi = "https://api.themoviedb.org/3/movie/popular?api_key=97b6f1f078f3a3e794e0287e760c2e1d";
    
    const getMovies = async (API: string) => {
         setLoading(false);
        try {
            const apiResponse = await fetch(API);
            const data : Data = await apiResponse.json();

            if (data) {
                // setLoading(true) 
                setMovies(data);
            }
        } catch (error: any) {
            setErrorMsg(error);
            console.error('Something Went Wrong', errorMsg)
        }
        
    };

    useEffect(() => {
        getMovies(FeaturedApi)
    }, []);

    return (
        <>
        { loading ? 
        <>
        <Skeleton count={10} />
        </>:
        <> 
            <Header />
            <TopRated movies={movies} loading={loading} />
            <Footer />
        </> 
        }
        </>
    )
}

export default HomePage;