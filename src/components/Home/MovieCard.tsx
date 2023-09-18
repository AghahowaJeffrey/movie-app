import React from 'react';
import poster from '../../assets/Poster.png';
import peach from '../../assets/peach.png';
import imdb from '../../assets/imdb.png';
import Favorite from '../Home/Favorite'
import { Link } from 'react-router-dom';

interface Props {
    users: string
}

function MovieCard(users: Props) {
    return (
    <>
    
        <div className="mt-4 relative">
            <Favorite />
            <Link to='/movie'>
                <img src={poster} alt="" className='w-full' />
                <p className='text-xs font-bold text-gray-400 pt-3'>USA, 2021</p>
                <h3 className='text-lg font-bold text-gray-900 leading-3 pt-3'>Stranger Things</h3>
                <div className="flex justify-between">
                    <div className='flex items-center pt-3'>
                        <img src={imdb} alt="" className='w-10 pr-1' />
                        <p className='text-xs font-normal text-gray-900 block'>76.0 / 100</p>
                    </div>
                    <div className='flex pt-3 items-center'>
                        <img src={peach} alt="" className='w-5 pr-1'/>
                        <p className='text-xs font-normal text-gray-900'>68%</p>
                    </div>
                </div>
                <p className='text-xs font-bold text-gray-400 pt-3'>Action, Adventure, Thriller</p>
            </Link>  
        </div>
    </>
    )
}

export default MovieCard;