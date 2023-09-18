import React from 'react'
import banner from '../../assets/Trailer.png'
import shows from '../../assets/best-movies.png'
import star from '../../assets/Star.png'
import list from '../../assets/List.png'
import arrow from '../../assets/arrow.png'
import ticket from '../../assets/tickets.png'




function main() {
  return (
    <div className='m-6'>
      <img className='w-full  rounded-xl' src={banner} alt="" />
      <div className='flex justify-between p-3 font-semibold'>
        <div className=''>
            <span className='font-bold'>Top Gun: Maverick . 2022 . PG-13 . 2h 10m</span>
            <span className='pl-5 text-red-500'>Action</span>
            <span className='pl-5 text-red-500'>Drama</span>
        </div>
        <div>
          <span className='flex items-center'>
            <img className='ml-1 justify-end w-6 m-1' src={star} alt="" />
            <span ><span className='text-gray-400 pr-1' >8.5</span>|350k</span>
          </span>
        </div>
      </div>

      <div className='p-3 block sm:flex'>
        <div className='sm:basis-[1000px] font-semibold mr-3'>
          <p>
            After thirty years, Maverick is still pushing the envelope as a top naval aviator,
            but must confront ghosts of his past when he leads TOP GUN's elite graduates
            on a mission that demands the ultimate sacrifice from those chosen to fly it.
          </p>

          <div className='flex mt-7 border-b-1 border-gray-00'>Director: <p className='text-red-600 font-semibold'>Joseph Kosinski</p></div>
          <div className='flex mt-7 border-b-1 border-gray-00'>Writers: <p className='text-red-600'>Jim Cash, Jack Epps Jr, Peter Craig</p></div>
          <div className='flex mt-7 mb-5 border-b-1 border-gray-00'>Stars: <p className='text-red-600'>Tom Cruise, Jennifer Connelly, Miles Teller</p></div>

          <div className='flex border border-gray-200 rounded-lg font-bold justify-between items-center'>
            <div className='flex justify-between'>
              <div className=' p-3 rounded-lg bg-red-700 text-white'>Top Rated Movie #65</div>
              <p className='p-3 pl-6'>Awards 9 nomimations</p>
            </div>
            <img className='w-7 h-7 mr-5' src={arrow} alt="" />
          </div>
        </div>

        <div className=' mt-6'>
          <p className='bg-red-900 text-white justify-center py-3 rounded-lg flex items-center'>
          <img className='pr-3' src={ticket} alt="" />
            See Showtimes
          </p>
          <p className='bg-red-200 font-semibold mt-2 py-3 rounded-lg border border-red-900 flex items-center justify-center'>
          <img className='pr-3' src={list} alt="" />
            More watch options
          </p>
          <div className='relative rounded-lg mt-4 '>
            <img className='w-full' src={shows} alt="" />
            <div className='absolute p-4 bg-opacity-40 rounded-xl  bottom-1 blur-[7px] left-0 right-0 bg-neutral-900 text-white flex items-center '></div>
            <div className='absolute p-2 bg-opacity-70 rounded-xl bottom-0 left-0 right-0 bg-neutral-900 text-white flex items-center '>
              <img className='mx-2' src={list} alt='' ></img>
              <p className=' text-xs font-semibold text-gray-300'>The Best Movies and Shows in September</p>
            </div>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default main