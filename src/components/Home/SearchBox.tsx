import searchimg from '../../assets/searchimg.png'
import { useState } from 'react';

interface Props {
    handleSearch: (e: any) => void;
    search: string | undefined;
}

function SearchBox({handleSearch, search}: Props) {

    return (
    <>
    <div className='relative sm:flex sm:items-center w-96 hidden mx-10 border-white border-2 rounded-md'>
        <input className='bg-transparent w-full h-full ml-1' 
        type="text" 
        value={search}
        placeholder='what do you want to watch?'
        onChange={handleSearch} />
        <img className='absolute right-0 mr-2' src={searchimg} alt="" />
    </div>
    
    </>
    )
}

export default SearchBox;