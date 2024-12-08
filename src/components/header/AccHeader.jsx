import { BiSolidVideos } from 'react-icons/bi'
import logo from '../../assets/imgs/logo.png'
import { FaRegBell } from 'react-icons/fa'
import { FaChromecast } from 'react-icons/fa6'
import { HiMiniHome } from 'react-icons/hi2'
import { IoSearch, IoSearchSharp } from 'react-icons/io5'
import { MdOutlineSaveAlt } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
function AccHeader({bgColor}) {
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header>
            <div
                className={`hidden xs:flex h-[70px] fixed z-50 top-0 w-full ${bgColor} bg-gradient-to-b from-[#060606] to-transparent transition-all duration-500 ${scroll > 5 ? 'bg-[#141414]' : ''
                    }`}
            >     <div className='max-w-[1450px] w-full mx-auto  px-8 pt-2 flex justify-between items-center'>
                    <div className='flex gap-3'>
                        <Link to={'/browse'} className='max-w-[130px]'>
                            <img src={logo} alt="logo" />
                        </Link>
                        <ul className='flex justify-center items-center text-white lg:hidden'>
                            Browse
                        </ul>
                        <ul className=' hidden lg:flex justify-center items-center text-white gap-4'>
                            <Link to={'/browse'}>Home
                            </Link>
                            <Link to={'/tvShows'}>Tv Shows
                            </Link>
                            <Link to={'/movies'}>Movies
                            </Link>
                            <Link to={'/latest'}>Latest
                            </Link>
                            <Link to={'/myList'}>My List
                            </Link>
                            <Link>Browse By Language
                            </Link>
                        </ul>
                    </div>
                    <div className='flex text-white text-2xl gap-3'>
                        <IoSearchSharp />
                        <FaRegBell />
                    </div>
                </div>
            </div>
            {/* mobile */}
            <nav className='block xs:hidden'>
                <div className='w-[90%] mx-auto sticky top-0'>
                    <div className='text-white py-3 text-xl flex justify-between items-center mx-auto'>
                        <h1>For sabina</h1>
                        <div className='flex gap-3'>
                            <FaChromecast />
                            <MdOutlineSaveAlt />
                            <IoSearch />
                        </div>
                    </div>
                    <div>
                        <ul className='flex gap-2 text-white'>
                            <li className='w-[90px] h-[26px] hover:scale-95 transition-all duration-200 text-[#ddd] flex justify-center items-center text-sm border-[1px] rounded-full border-[#ffffff58]'>Tv Shows</li>
                            <li className='w-[90px] h-[26px] hover:scale-95 transition-all duration-200 text-[#ddd] flex justify-center items-center text-sm border-[1px] rounded-full border-[#ffffff58]'>Movies</li>
                            <li className='w-[90px] h-[26px] hover:scale-95 transition-all duration-200 text-[#ddd] flex justify-center items-center text-sm border-[1px] rounded-full border-[#ffffff58]'>Categories</li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className='block xs:hidden fixed bottom-0 bg-[#141414] text-[#888] w-full z-50'>
                <div className='w-[90%] mx-auto flex justify-between items-center h-[60px]'>
                    <div className='flex flex-col items-center'>
                        <HiMiniHome className='text-2xl' />
                        <p className='text-[.6rem]'>Home</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <BiSolidVideos className='text-2xl' />
                        <p className='text-[.6rem]'>News & Hot</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img className='h-[25px] rounded-md' src="https://occ-0-7292-3466.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABbFO1ZI9WDUXXCyi_QCEMIen2X1ICb04kRxJmp1mxZTKU6yF0NlEU3xBPMzvqHaturIrsjSS_S5JocdleY1N8-BYgDqy23sydeqH.png?r=8ff" alt="" />
                        <p className='text-[.6rem]'>My Netflix</p>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default AccHeader