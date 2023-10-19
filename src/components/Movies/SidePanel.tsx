import logo from '../../assets/Tv.png'
import logout from '../../assets/Logout.png'
import movie from '../../assets/Movie.png'
import tvshow from '../../assets/tvShow.png'
import home from '../../assets/Home.png'
import upcoming from '../../assets/Calendar.png'
import { Link } from 'react-router-dom' 

function SidePanel() {
  return (
    <div className='border min-w-[200px] border-gray-600 ml-0 h-full rounded-r-[60px] hidden sm:block'>
         <div className='flex items-center m-4 mt-10'>
            <img src={logo} alt="" />
            <p className='font-bold text-lg pl-2'>MovieBox</p>
        </div>
        <div className='mt-24 text-center'>
            <Link to="/"><div className='p-7 hover:bg-red-200 hover:border-r-8 hover:border-red-950 hover:text-red-700 font-semibold flex items-center'><img className='mr-3' src={home} alt="" />Home</div></Link>
            <div className='p-7 bg-red-200 border-r-8 border-red-950 text-red-700 font-semibold flex items-center'><img className='mr-3' src={movie} alt="" />Movies</div>
            <div className='p-7 hover:bg-red-200 hover:border-r-8 hover:border-red-950 hover:text-red-700 font-semibold flex items-center'><img className='mr-3' src={tvshow} alt="" />TV Series</div>
            <div className='p-7 hover:bg-red-200 hover:border-r-8 hover:border-red-950 hover:text-red-700 font-semibold flex items-center'><img className='mr-3' src={upcoming} alt="" />Upcoming</div>
        </div>
        <div className='border bg-gray-100 border-red-200 rounded-2xl m-5 p-3 pt-10'>
            <p className='mb-2 font-bold text-gray-600'>Play movie quiz and win tickets</p>
            <p className='text-xs mb-2 text-gray-500'>50k People are playing right now</p>
            <button className='bg-red-200 object-center text-red-700 px-3 font-bold border-2 rounded-2xl p-2 text-center text-xs'>Start Playing</button>
        </div>
        <div className='flex ml-7 mt-7 mb-18'>
          <img className='w-7' src={logout} alt="" />
          <p className='font-bold text-gray-600'>Log out</p>
        </div>
        
    </div>
  )
}

export default SidePanel