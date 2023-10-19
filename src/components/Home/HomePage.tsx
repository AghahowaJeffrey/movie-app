import Header from './Header';
import TopRated from './TopRated';
import Footer from './Footer';
import { useEffect, useState } from "react"

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
    const [errorMsg, setErrorMsg] = useState<unknown>();
    const [movies, setMovies] = useState<Data>();
    const [loaded, setLoaded] = useState<boolean>(false)
    
    const FeaturedApi = "https://api.themoviedb.org/3/movie/popular?api_key=97b6f1f078f3a3e794e0287e760c2e1d";
    
    const getMovies = async (API: string) => {
        try {
            fetch(API)
            .then((apiResponse) => apiResponse.json())
            .then((data) => {
                setMovies(data)
                if (data) {
                    setMovies(data);
                    setLoaded(true)
                }
            })

        } catch (error: unknown) {
            setErrorMsg(error);
            console.error('Something Went Wrong', errorMsg)
        }
        
    };

    useEffect(() => {
        setTimeout(() => {
            getMovies(FeaturedApi)
        }, 2000);
        // getMovies(FeaturedApi)
    }, );

    return (
        <> 
            <Header />
            <TopRated movies={movies} loaded={loaded} />
            <Footer />
        </> 
    )
}

export default HomePage;