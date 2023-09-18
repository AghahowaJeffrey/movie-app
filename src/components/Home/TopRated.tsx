import React from 'react';
import MovieCard from './MovieCard';

interface Props {
    users: string
}

function TopRated(users: Props) {
    const nums: string[] = []
    return <>
    <main className=''>
        <div className='mx-10 mt-10'>
            <div className='flex justify-between items-center '>
                <h2 className='font-bold text-4xl'>Featured Movie</h2>
                <h2 className='text-red-600 text-sm font-semibold'>See more</h2>
            </div>
            <div className='sm:flex sm:flex-wrap gap-10 sm:flex-auto sm:justify-center'>
            {nums.map(() => <MovieCard users={users} />)}
            </div>
        </div>
    </main>
        
    </>
}

export default TopRated;