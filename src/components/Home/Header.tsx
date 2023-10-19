
import Navigation from './Navigation';
import banner from '../../assets/banner.png';
import imdb from '../../assets/imdb.png'
import peach from '../../assets/peach.png'
import HiddenSearch from '../Home/HiddenSearch'
import SearchPanel from './SearchPanel';
import { useState,useEffect } from 'react';

export interface SearchedMovies {
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

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [search, setSearch] = useState<string>('');
    const [searchedMovies, getSearchedMovies] = useState<SearchedMovies>();

    const onclicked = () => setToggle(!toggle);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        const searchMovies = async () => {
            if (!search.trim()) {
                // Don't make a request if the search query is empty
                return;
            }

            try {
                const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=97b6f1f078f3a3e794e0287e760c2e1d`);
                const data = await response.json();
                if (data) {
                    getSearchedMovies(data);
                }
            } catch (error) {
                console.error('Something Went Wrong', error);
            }
        };

        const delayDebounceFn = setTimeout(() => {
            searchMovies();
        }, 300); // Debounce time set to 300 milliseconds

        return () => {
            clearTimeout(delayDebounceFn); // Clear the debounce timer if the component re-renders before the debounce time has elapsed
        };
    }, [search]);

    // console.log(search)
    // console.log(searchedMovies)

    return (
        <>
            
            <section className='h-[500px] bg-black'>
                {toggle == true && <HiddenSearch />}
                <div className='relative'>
                    <img className='h-[500px] absolute' src={banner} alt="" />

                    <Navigation clicked={onclicked} handleSearch={handleSearch} search={search} />

                    {search ? <SearchPanel searchedMovies={searchedMovies} />: null}

                    <div className='w-80 ml-12 mb-28 absolute bottom-0 left-0 text-white'>
                        <h1 className='font-bold text-4xl'>John Wick 3: Parabellum</h1>
                        <div className="flex justify-between w-40 my-2">
                            <div className='flex items-center pt-3'>
                                <img src={imdb} alt="" className='w-10 pr-1' />
                                <p className='text-xs font-normal text-white0 block'>76.0 / 100</p>
                            </div>
                            <div className='flex pt-3 items-center'>
                                <img src={peach} alt="" className='w-5 pr-1'/>
                                <p className='text-xs font-normal text-white'>68%</p>
                            </div>
                        </div>
                        <p>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
                        <button className='py-1 px-4 text-base mt-3 bg-gray-800 rounded-md'>WATCH TRAILER</button>
                    </div>
               
                </div>
            </section>
        </>   
    )
    
}

export default Header;