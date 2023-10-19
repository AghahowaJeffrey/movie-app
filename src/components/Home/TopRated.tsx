import MovieCard from './MovieCard';
import { Data } from './HomePage';

interface Props {
    movies: Data | undefined;
    loaded: boolean;
}

const TopRated = ({movies}: Props) => {
    return <>
    <main className=''>
        <div className='mx-10 mt-10'>
            <div className='flex justify-between items-center '>
                <h2 className='font-bold text-4xl'>Featured Movie</h2>
                <h2 className='text-red-600 text-sm font-semibold'>See more</h2>
            </div>
            <div className='sm:flex sm:flex-wrap gap-10 sm:flex-auto sm:justify-center'>
            {movies?.results.map((movie) => <MovieCard key={movie.id} movie={movie} /> )}
            </div>
        </div>
    </main>
        
    </>
}

export default TopRated;