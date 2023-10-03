import React from 'react';
import Header from './Header';
import TopRated from './TopRated';
import Footer from './Footer';
import { useEffect, useState } from "react"

export interface Movies {
    results: string[];
    
  }

const my_api_key = import.meta.env.VITE_API_KEY;
      
function HomePage() {
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<any>()
    const [movies, setMovies] = useState<Movies[]>([]);
    
    const FeaturedApi = `https://api.themoviedb.org/3/movie/top_rated?api_key=${my_api_key}`;
    
    const getMovies = async (API: string) => {
        setLoading(true);
        try {
            const apiResponse = await fetch(API);
            const json = await apiResponse.json();
            setMovies(json);
        } catch (error) {
            setErrorMsg(error);
        }
        setLoading(false)
    };

    useEffect(() => {
        getMovies(FeaturedApi);
    }, [FeaturedApi]);
      
    console.log(movies.map)
    console.log(errorMsg)
    
    return (
    <>
        <Header />
        <TopRated movies={movies} />
        <Footer />
    </>
    )
}

export default HomePage;