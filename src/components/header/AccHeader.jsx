import { BiArrowToBottom, BiSolidArrowToBottom, BiSolidVideos } from 'react-icons/bi'
import logo from '../../assets/imgs/logo.png'
import { FaCaretDown, FaRegBell } from 'react-icons/fa'
import moneyH from '../../assets/imgs/moneyH.jpg'
import avatar from '../../assets/imgs/avatar.jpg'
import ringb from '../../assets/imgs/ringb.png'
import { FaChromecast } from 'react-icons/fa6'
import { HiMiniHome } from 'react-icons/hi2'
import { IoPersonOutline, IoSearch, IoSearchSharp } from 'react-icons/io5'
import { MdOutlineSaveAlt } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { GrEdit } from 'react-icons/gr'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
function AccHeader({ bgColor, showHeader }) {
    const [scroll, setScroll] = useState(0)
    const [onRingBell, setOnRingBell] = useState(false)
    const [onProfile, setOnProfile] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const [menu, setMenu] = useState(false)
    function openList() {
        setMenu(!menu)
    }
    const [search, setSearch] = useState(false)
    function searchBar() {
        setSearch(!search)
    }
    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate();
    function startSearch(e) {
        const val = e.target.value;
        setSearchTerm(val);
        if (val) {
            navigate('/searched', { state: { searchTerm: val } });
        } else {
            navigate('/browse');
        }
    }
    function handleMobileSearch() {
        navigate('/searched');
    }

    return (
        <header>
            {showHeader && (
                <>
                    <div
                        className={`hidden xs:flex h-[70px] fixed z-[65] top-0 w-full ${bgColor} bg-gradient-to-b from-[#060606] to-transparent  transition-all duration-500 ${scroll > 5 ? 'bg-[#141414]' : ''
                            }`}
                    >     <div className='max-w-[1450px] w-full mx-auto  px-8 pt-2 flex justify-between items-center'>
                            <div className='flex gap-3'>
                                <Link to={'/browse'} className='max-w-[130px]'>
                                    <img src={logo} alt="logo" />
                                </Link>
                                <div onClick={openList} className='flex relative justify-center cursor-pointer gap-2 items-center text-white lg:hidden'>
                                    Browse <FaCaretDown />
                                    {menu &&
                                        <ul className='absolute top-[60px] flex gap-5 flex-col items-center bg-[#000000cb] border-t-2 border-white w-[250px] py-[20px]'>
                                            <Link to={'/browse'}>Home</Link>
                                            <Link to={'/tvShows'}>Tv Shows
                                            </Link>
                                            <Link to={'/movies'}>Movies
                                            </Link>
                                            <Link to={'/latest'}>Latest
                                            </Link>
                                            <Link to={'/myList'}>My List
                                            </Link>
                                        </ul>
                                    }
                                </div>
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
                                </ul>
                            </div>
                            <div className='flex items-center text-white ml-2 text-2xl gap-4'>
                                <div className={`${search ? 'w-[290px] bg-[#000000be] border pl-2 sm:static absolute top-[70px] right-[180px]' : ' justify-center w-[40px]'} h-[40px] sm:width sm:duration-300 ease-in-out flex items-center`}>
                                    <IoSearchSharp onClick={searchBar} />
                                    <input value={searchTerm} onChange={startSearch}
                                        placeholder='Titles ...' type="text" className={`${search ? 'flex' : 'hidden'} outline-none bg-transparent text-sm pl-3`} />
                                </div>

                                <div className='relative p-2'
                                    onMouseLeave={() => setOnRingBell(false)}>
                                    <div
                                        className='cursor-pointer p-2 rounded-full'
                                        onMouseEnter={() => setOnRingBell(true)}
                                    >
                                        <FaRegBell />
                                    </div>

                                    {onRingBell && (
                                        <div onMouseEnter={() => setOnRingBell(true)} className='absolute overflow-y-scroll h-[250px] right-0 mt-2 w-[350px] md:w-[400px] border-x-[1px] border-t-2 border-t-white border-x-[#5f5f5f] text-white shadow-lg z-10'>
                                            <div className='p-4 border-b-[1px] border-[#444] bg-[#000000c1] hover:bg-black transition-all duration-200'>
                                                <div className='flex w-full justify-between px-3 cursor-pointer'>
                                                    <img className='w-[100px] h-[60px] object-cover rounded-md' src={moneyH} alt="" />
                                                    <div className='w-[250px] pl-3'>
                                                        <h4 className='text-[.9rem] leading-5'>Rewatch your favorite moments <br /> See what you've watched</h4>
                                                        <p className='text-xs text-[#888]'>2 days ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='p-4 border-b-[1px] border-[#444] bg-[#000000c1] hover:bg-black transition-all duration-200'>
                                                <Link to={'/latest'} className='flex w-full justify-between px-3 cursor-pointer'>
                                                    <img className='w-[100px] h-[60px] object-cover rounded-md' src={ringb} alt="" />
                                                    <div className='w-[250px] pl-3'>
                                                        <h4 className='text-[.9rem] leading-5'>Netflex Lookahead <br /> Explore what's coming soon.</h4>
                                                        <p className='text-xs text-[#888]'>3 days ago</p>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className='p-4 border-b-[1px] border-[#444] bg-[#000000c1] hover:bg-black transition-all duration-200'>
                                                <div className='flex w-full justify-between px-3 cursor-pointer'>
                                                    <img className='w-[100px] h-[60px] object-cover rounded-md' src={avatar} alt="" />
                                                    <div className='w-[250px] pl-3'>
                                                        <h4 className='text-[.9rem] leading-5'>Suggestions for tonight <br /> Explore personalized picks.</h4>
                                                        <p className='text-xs text-[#888]'>2 days ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div onMouseLeave={() => setOnProfile(false)} className='flex items-center'>
                                    <div className='relative flex items-center'>
                                        <img onMouseEnter={() => setOnProfile(true)} className='h-[35px] my-4 rounded-md' src="https://occ-0-7292-3466.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABbFO1ZI9WDUXXCyi_QCEMIen2X1ICb04kRxJmp1mxZTKU6yF0NlEU3xBPMzvqHaturIrsjSS_S5JocdleY1N8-BYgDqy23sydeqH.png?r=8ff" alt="sabina" />
                                        <IoMdArrowDropdown />
                                        {onProfile && (
                                            <div onMouseEnter={() => setOnProfile(true)} className='absolute top-[56px] right-0 mt-2 w-[230px] border-[1px] border-[#5f5f5f] text-white shadow-lg'>
                                                <div className='p-2 group bg-black flex items-center gap-4'>
                                                    <img className='h-[32px] rounded-md' src="https://occ-0-7292-3466.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABbFO1ZI9WDUXXCyi_QCEMIen2X1ICb04kRxJmp1mxZTKU6yF0NlEU3xBPMzvqHaturIrsjSS_S5JocdleY1N8-BYgDqy23sydeqH.png?r=8ff" alt="sabina" />
                                                    <h4 className='text-[.8rem] group-hover:underline cursor-pointer'>Sabina</h4>
                                                </div>
                                                <div className='p-2 group bg-black flex items-center gap-4'>
                                                    <img className='h-[32px] rounded-md' src="https://occ-0-7292-3466.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfjwXqIYd3kCEU6KWsiHSHvkft8VhZg0yyD50a_pHXku4dz9VgxWwfA2ontwogStpj1NE9NJMt7sCpSKFEY2zmgqqQfcw1FMWwB9.png?r=229" alt="ava1" />
                                                    <h4 className='text-[.8rem] group-hover:underline cursor-pointer'>Good News</h4>
                                                </div>
                                                <Link to={'/ManageProfiles'} className='group p-2 bg-black flex items-center gap-4'>
                                                    <GrEdit className='pl-1' />
                                                    <h4 className='text-[.8rem] group-hover:underline cursor-pointer'>Manage Profiles</h4>
                                                </Link>
                                                {/* <div className='p-2 group bg-black flex items-center gap-4'>
                                            <RiFolderTransferLine className='pl-1' />
                                            <h4 className='text-[.8rem] group-hover:underline cursor-pointer'>Transfer Profile</h4>
                                        </div> */}
                                                <div className='p-2 group bg-black flex items-center gap-4'>
                                                    <IoPersonOutline className='pl-1' />
                                                    <h4 className='text-[.8rem] group-hover:underline cursor-pointer'>Account</h4>
                                                </div>
                                                <div className='p-2 group border-b-[1px] border-b-[#444] bg-black flex items-center gap-4'>
                                                    <AiOutlineQuestionCircle className='pl-1' />
                                                    <h4 className='text-[.8rem] hover:underline cursor-pointer'>Help Centre</h4>
                                                </div>
                                                <div className='p-2 bg-black text-center'>
                                                    <Link to={'/login'} className='text-[.8rem] hover:underline cursor-pointer'>Sign out of Netflix</Link>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Mobile */}
                    <nav className='h-full '>
                        <div className='block xs:hidden w-[90%] mx-auto sticky top-0'>
                            <div className='text-white py-3 text-xl flex justify-between items-center mx-auto'>
                                <h1>For sabina</h1>
                                <div className='flex gap-3'>
                                    <FaChromecast />
                                    <MdOutlineSaveAlt />
                                    <IoSearch onClick={handleMobileSearch} />
                                </div>
                            </div>
                            <div>
                                <ul className='flex gap-2 text-white'>
                                    <Link to={'/tvShows'} className='w-[90px] h-[26px] hover:scale-95 transition-all duration-200 text-[#ddd] flex justify-center items-center text-sm border-[1px] rounded-full border-[#ffffff58]'>Tv Shows</Link>
                                    <Link to={'/movies'} className='w-[90px] h-[26px] hover:scale-95 transition-all duration-200 text-[#ddd] flex justify-center items-center text-sm border-[1px] rounded-full border-[#ffffff58]'>Movies</Link>
                                    {/* Categories onclick should open popup */}
                                    <li className='w-[90px] h-[26px] hover:scale-95 transition-all duration-200 text-[#ddd] flex justify-center items-center text-sm border-[1px] rounded-full border-[#ffffff58]'>Categories</li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <nav className='block xs:hidden fixed bottom-0 bg-[#141414] text-[#888] w-full z-50'>
                        <div className='w-[90%] mx-auto flex justify-between items-center h-[60px]'>
                            <Link to={'/browse'} className='flex flex-col items-center'>
                                <HiMiniHome className='text-2xl' />
                                <p className='text-[.6rem]'>Home</p>
                            </Link>
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
                </>
            )}
        </header>
    )
}
export default AccHeader