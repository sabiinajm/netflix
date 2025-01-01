import { IoSearch } from "react-icons/io5"
import { Link, useNavigate } from "react-router-dom"
import moneyH from '../../../assets/imgs/moneyH.jpg'
import avatar from '../../../assets/imgs/avatar.jpg'
import ringb from '../../../assets/imgs/ringb.png'
import { FaBell, FaRegBell } from "react-icons/fa"
import { useState } from "react"
function News() {
    const navigate = useNavigate()
    function handleMobileSearch() {
        navigate('/searched')
    }
    const [ring, setRing] = useState(false)
    function notifyMe() {
        setRing(!ring)
    }
    return (
        <div className="bg-black absolute top-0 py-16 w-full min-h-screen xs:top-[70px] text-white font-semibold pt-3">
            <div className="flex justify-between items-center w-[90%] mx-auto pt-1 ">
                <h3> News & Hot</h3>
                <IoSearch onClick={handleMobileSearch} className="text-xl xs:hidden" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className='pb-2 border-[1px] m-3 rounded-lg border-[#444] bg-[#000000c1] hover:bg-black transition-all duration-200'>
                    <div className='flex flex-col items-start w-full justify-between cursor-pointer'>
                        <img className='w-full h-[190px] object-cover rounded-t-md' src={moneyH} alt="" />
                        <div className='w-[90%] pl-3'>
                            <h4 className='text-[.7rem] leading-5 py-2'>Rewatch your favorite moments <br /> See what you've watched</h4>
                            <p className='text-xs text-[#888]'>2 days ago</p>
                        </div>
                        <button onClick={notifyMe} className="bg-white text-black rounded-md px-5 py-2 text-sm flex items-center justify-between gap-2 text-start mt-2 ml-2">{ring ? <FaBell className="bell-animate"/> : <FaRegBell />} Remind Me</button>
                    </div>
                </div>
                <div className='pb-2 border-[1px] m-3 rounded-lg border-[#444] bg-[#000000c1] hover:bg-black transition-all duration-200'>
                    <Link to={'/latest'} className='flex flex-col items-start w-full justify-between cursor-pointer'>
                        <img className='w-full h-[190px] object-cover rounded-t-md' src={ringb} alt="" />
                        <div className='w-[90%] pl-3'>
                            <h4 className='text-[.7rem] leading-5 py-2'>Netflex Lookahead <br /> Explore what's coming soon.</h4>
                            <p className='text-xs text-[#888]'>3 days ago</p>
                        </div>
                    </Link>
                </div>
                <div className='pb-2 border-[1px] m-3 rounded-lg border-[#444] bg-[#000000c1] hover:bg-black transition-all duration-200'>
                    <div className='flex flex-col items-start w-full justify-between cursor-pointer'>
                        <img className='w-full h-[190px] object-cover rounded-t-md' src={avatar} alt="" />
                        <div className='w-[90%] pl-3'>
                            <h4 className='text-[.7rem] leading-5 py-2'>Suggestions for tonight <br /> Explore personalized picks.</h4>
                            <p className='text-xs text-[#888]'>2 days ago</p>
                        </div>
                        <button onClick={notifyMe} className="bg-white text-black rounded-md px-5 py-2 text-sm flex items-center justify-between gap-2 text-start mt-2 ml-2">{ring ? <FaBell className="bell-animate"/> : <FaRegBell />} Remind Me</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default News