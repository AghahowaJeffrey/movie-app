import { useState } from 'react';
import tv from '../../assets/tvShow.png'

function Favorite() {
  const [addedFavourite, setAddedFavourite] = useState(0);
  const handleClick = () => addedFavourite === 1 ? setAddedFavourite(0): setAddedFavourite(1)


  return (
    <>
    <div className='absolute right-0 top-0 mt-7 mr-8 bg-white bg-opacity-40 flex justify-center items-center w-[11%] h-[6%] rounded-3xl'>
        <div ><img className={addedFavourite === 1 ? "bg-red-600" : ""} 
        onClick={handleClick} 
        src={tv} alt="" /></div>
    </div>
    </>
  )
} 

export default Favorite