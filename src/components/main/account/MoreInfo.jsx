import { MdOutlineMessage } from "react-icons/md"
import { RiCloseLargeFill } from "react-icons/ri"
import breakingBLogo from '../../../assets/imgs/breakingblogo.webp'
import { BsPlusLg } from "react-icons/bs"
import { IoPlaySharp } from "react-icons/io5"
import { AiOutlineLike } from "react-icons/ai"

import { DATA } from '../../../context/DataContext'
import { useContext } from "react"
function MoreInfo({ setShowMoreInfo, image, setModal, year, overview }) {
    const { data } = useContext(DATA)
    const handleClose = () => {
        setShowMoreInfo(false);
        setModal(false);
    };

    return (
        <div
            onClick={handleClose}
            className="bg-[#141414] w-full h-full fixed top-0 left-0 bg-[#0005] z-[100]"
        >
            <div className="w-full h-full flex justify-center">
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="border-[1px] max-h-[1000px] overflow-auto border-[#444] rounded-lg flex-col z-30 max-w-[800px] w-full flex "

                >
                    <div className="relative top-0 w-full rounded-lg">
                        <img className="object-cover rounded-t-lg min-h-[160px] max-h-[450px] w-full bg-[#141414]"
                            src={image} alt="" />
                        <div className='absolute bottom-[20px] z-40 flex gap-3 justify-between pl-8'>
                            <button className='w-[120px] h-[42px] rounded-sm text-lg font-semibold bg-white transition-all duration-200 hover:bg-[#ddd] text-black flex justify-center gap-1 items-center'><IoPlaySharp className='text-3xl' /> Play</button>
                            <button className='h-[40px] w-[40px] rounded-full flex justify-center items-center transition-all duration-200 hover:bg-[#99999946] text-[#f1f1f1] text-xl border-2 border-[#999] bg-[#222]'><BsPlusLg /></button>
                            <button className='h-[40px] w-[40px] rounded-full flex justify-center items-center transition-all duration-200 hover:bg-[#99999946] text-[#f1f1f1] text-xl border-2 border-[#999] bg-[#222]'><AiOutlineLike /></button>
                        </div>
                        <div className="absolute top-0 min-h-[160px] h-full w-full bg-gradient-to-b from-transparent z-20 to-[#141414]"></div>
                        <div
                            className="absolute top-5 right-5 rounded-full cursor-pointer flex items-center justify-center h-[35px] w-[35px]  z-30  hover:bg-[#ffffff46] transition-all duration-300"

                        >
                            <RiCloseLargeFill onClick={handleClose} className="text-white text-2xl" />
                        </div>
                    </div>
                    <div className="bg-[#141414] w-full rounded-b-lg">
                        <div className='flex justify-between w-[90%] mx-auto'>
                            <div className='py-4'>
                                <div className='flex items-center gap-2'>
                                    <p className='text-[#999]'>{year} 24 Episodes</p>
                                    <p className='border-[1px] border-white text-white text-xs text-center rounded-[3px] w-[30px] h-[17px]'>HD</p>
                                    <MdOutlineMessage className='text-[#999]' />
                                </div>
                                <div className='flex items-center gap-2'>
                                    <p className='border-[1px] border-white text-white text-xs text-center w-[30px] h-[17px]'>18+</p>
                                    <p className='text-[#fff] text-sm'>violance, nudity</p>
                                </div>
                                <p className='text-white text-sm leading-5 py-4 max-w-[400px]'>{overview}</p>
                            </div>
                            <div className='text-sm w-[260px] gap-3 flex flex-col py-4'>
                                <p className='text-white '><span className='text-[#999] pr-2'>Cast:</span>Kentaro Kumagai, Sayaka Sembogi, Asuna Tomari, <span className='italic'>more</span></p>
                                <p className='text-white '><span className='text-[#999] pr-2'>Genres:</span>Romanric TV Dramas, TV Comedies <span className='italic'>more</span></p>
                            </div>
                        </div>
                        <h2 className='text-white text-2xl font-semibold py-5 w-[90%] mx-auto'>More Like This</h2>
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 w-[90%] mx-auto'>
                            {data && data.map((item) => (
                                <div key={item.id} className='flex flex-col'>
                                    <div className='relative'>
                                        <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt='' className='rounded-md' />
                                        <p className='text-white z-10 absolute top-1 right-1'>4 seasons</p>
                                        <div className="bg-gradient-to-tr from-transparent via-transparent to-black/85 w-full h-full absolute top-0 right-0"></div>
                                        <div className='flex justify-center items-center absolute bottom-0 w-full'>
                                            <p className='bg-red-600 text-white font-semibold rounded-t-sm text-[.75rem] h-[20px] w-[120px] text-center'>Recently added</p>
                                        </div>
                                    </div>
                                    <div className='bg-[#2f2f2f] p-3 rounded-b-md flex-1'>
                                        <div className='flex justify-between'>
                                            <div className='flex items-center gap-1'>
                                                <p className='border-[1px] border-[#999] text-[#999] text-xs flex justify-center items-center w-[40px] h-[22px]'>13</p>
                                                <p className='border-[1px] border-[#999] text-[#ddd] text-xs text-center rounded-[3px] w-[30px] h-[17px]'>HD</p>
                                                <p className='text-[#999]'>{item.release_date?.slice(0, 4) || item.first_air_date?.slice(0, 4)}</p>
                                            </div>
                                            <button className='h-[40px] w-[40px] rounded-full flex justify-center items-center transition-all duration-200 hover:bg-[#99999946] text-[#f1f1f1] text-xl border-2 border-[#999] bg-[#222]'>
                                                <BsPlusLg />
                                            </button>
                                        </div>
                                        <p className='text-[#ddd] py-4 text-sm leading-6'>{item.overview.slice(0, 125) + ' ...'}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MoreInfo