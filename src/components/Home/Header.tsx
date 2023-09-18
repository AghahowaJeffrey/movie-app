import React from 'react';
import Nav from './Navigation';
import banner from '../../assets/banner.png';
import imdb from '../../assets/imdb.png'
import peach from '../../assets/peach.png'
import HiddenSearch from '../Home/HiddenSearch'
import { useState } from 'react';

function Header() {
const [toggle, setToggle] = useState(false)

const onclicked = () => toggle == true ? setToggle(false) : setToggle(true)

    return (
        <>
            <section className='h-[500px] bg-black'>
                {toggle == true && <HiddenSearch />}
                <div className='relative'>
                <img className='h-[500px] absolute' src={banner} alt="" />

                    <Nav clicked={onclicked} />
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