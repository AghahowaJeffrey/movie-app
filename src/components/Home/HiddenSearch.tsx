import searchimg from '../../assets/searchimg.png'

function HiddenSearch() {
  return (
    <>
    <div className='flex transition items-center justify-center w-full h-14 bg-red-500 sm:hidden' >
        <div className='relative flex items-center w-96 h-10 mr-4 rounded-md'>
            <input className='bg-white w-full h-full pl-2 rounded-md pla' 
            type="text" 
            placeholder='what do you want to watch?' />
        </div>
        <img className='w-5' src={searchimg} alt="" />

    </div>
    </>
  )
}

export default HiddenSearch