import facebook from '../../assets/fa-brands_facebook-square.png'
import instagram from '../../assets/fa-brands_instagram.png'
import youtube from '../../assets/fa-brands_youtube.png'


function Footer() {
    return (
    <>
        <footer className='flex justify-center text-center'>
            <div className='font-bold text-xs mb-10 pt-28'>
                <div className='flex gap-8 justify-center'>
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={youtube} alt="" />
                </div>
                <div className='flex gap-8 pt-5'>
                    <a href="#">Conducts of Use</a>
                    <a href="#">Privacy & Policy</a>
                    <a href="#">Press Room</a>
                </div>
                <p className='text-gray-500 pt-5'>2021 MovieBox by Adriana Eka Prayudha</p>
            </div>
            
        </footer>
    </>
    )
}

export default Footer;