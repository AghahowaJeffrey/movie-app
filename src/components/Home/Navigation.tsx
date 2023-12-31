import Searchbox from '../../components/Home/SearchBox'
import logo from '../../assets/tv.png'
import menu from '../../assets/Menu.png'
import searchimg from '../../assets/searchimg.png'
import { Link } from 'react-router-dom';

interface Props {
  clicked: () => void;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  search: string | undefined;
}

function Navigation({clicked, handleSearch, search}: Props) {
  return (
    <>
    <nav className='px-10 z-10 absolute top-3 flex justify-between w-full text-white'>
        <div className='flex items-center'>
           <Link to='/'><img src={logo} alt="" /></Link> 
            <p className='font-bold text-lg pl-2'>MovieBox</p>
        </div>
        <Searchbox handleSearch={handleSearch} search={search} />
        <div className='flex items-center text-sm'>
            <p className='w-14 hidden font-semibold'>Sign in</p>
            <div className=' flex w-7 h-7 items-center justify-center bg-red-600 rounded-full'> 
              <img className='w-6' src={menu} alt="" />
            </div>
            <img className='w-5 h-5 ml-2 sm:hidden' onClick={clicked} src={searchimg} alt="" />
        </div>            
    </nav>
                

    </>
  )
}

export default Navigation