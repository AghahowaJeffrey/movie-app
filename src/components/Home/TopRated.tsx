import React from 'react';
import MovieCard from './MovieCard';



function TopRated(movies: any) {
    let movis = [1,2,3,4,5]
    // console.log(movies)
    return <>
    <main className=''>
        <div className='mx-10 mt-10'>
            <div className='flex justify-between items-center '>
                <h2 className='font-bold text-4xl'>Featured Movie</h2>
                <h2 className='text-red-600 text-sm font-semibold'>See more</h2>
            </div>
            <div className='sm:flex sm:flex-wrap gap-10 sm:flex-auto sm:justify-center'>
            {movis.map(() => <MovieCard movie={movies.result} />)}
            </div>
        </div>
    </main>
        
    </>
}

export default TopRated;