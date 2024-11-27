import logo from '../../assets/imgs/logo.png'
import { FaRegBell } from 'react-icons/fa'
import { FaChromecast } from 'react-icons/fa6'
import { IoSearch, IoSearchSharp } from 'react-icons/io5'
import { MdOutlineSaveAlt } from 'react-icons/md'
function AccHeader() {
    return (
        <header className='h-[60px] sticky z-10 top-0 w-full bg-gradient-to-b from-[#060606] to-transparent'>
            <div className='hidden md:flex max-w-[1450px] mx-auto px-6 pt-2 justify-between items-center'>
                <div className='flex gap-3'>
                    <div className='max-w-[130px]'>
                        <img src={logo} alt="logo" />
                    </div>
                    <ul className='flex justify-center items-center text-white lg:hidden'>
                        Browse
                    </ul>
                    <ul className=' hidden lg:flex justify-center items-center text-white gap-4'>
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Tv Shows</a>
                        </li>
                        <li>
                            <a>Movies</a>
                        </li>
                        <li>
                            <a>Latest</a>
                        </li>
                        <li>
                            <a>My List</a>
                        </li>
                        <li>
                            <a>Browse By Language</a>
                        </li>
                    </ul>
                </div>
                <div className='flex text-white text-2xl gap-3'>
                    <IoSearchSharp />
                    <FaRegBell />
                </div>
            </div>
            <nav className='block md:hidden'>
                <div className='w-[90%] mx-auto'>
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
        </header>
    )
}
export default AccHeader