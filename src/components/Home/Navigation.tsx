import React from 'react'
import Searchbox from '../../components/Home/SearchBox'
import logo from '../../assets/tv.png'
import menu from '../../assets/Menu.png'
import search from '../../assets/search.png'

interface Props {
  clicked: () => void
}

function Navigation({clicked}: Props) {
  return (
    <>
    <nav className='px-10 z-10 absolute top-3 flex justify-between w-full text-white'>
        <div className='flex items-center'>
            <img src={logo} alt="" />
            <p className='font-bold text-lg pl-2'>MovieBox</p>
        </div>
        <Searchbox />
        <div className='flex items-center text-sm'>
            <p className='w-14 hidden font-semibold'>Sign in</p>
            <div className=' flex w-7 h-7 items-center justify-center bg-red-600 rounded-full'> 
              <img className='w-6' src={menu} alt="" />
            </div>
            <img className='w-5 h-5 ml-2 sm:hidden' onClick={clicked} src={search} alt="" />
        </div>            
    </nav>
                

    </>
  )
}

export default Navigation