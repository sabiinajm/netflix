import { useState, useEffect, useContext } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoPlaySharp } from "react-icons/io5";
import { RiLayoutGridFill } from "react-icons/ri";
import { RxTextAlignLeft } from "react-icons/rx";
import Loading from "./Loading";
import MoreInfo from "./MoreInfo";
import { DATA } from "../../../context/DataContext";

function RandomImage({ header }) {
    const { data } = useContext(DATA)
    const [randomImage, setRandomImage] = useState(null);
    const [showMoreInfo, setShowMoreInfo] = useState(false);
    const handleShowMoreInfo = () => {
        setShowMoreInfo(!showMoreInfo);
    };
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

    useEffect(() => {
        if (data && data.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.length);
            setRandomImage(data[randomIndex]);
        }
    }, [data]);


    return (
        <div className="h-[600px] relative w-full hidden xs:block bg-[#141414]">
            {randomImage ? (
                <div>
                    <img
                        className="object-cover h-[600px] w-full bg-black"
                        src={`https://image.tmdb.org/t/p/original${randomImage.backdrop_path}`}
                        alt="Preview"
                    />
                    <div className='bg-[#14141488] w-[110px] h-[40px] flex pl-4 text-xl items-center bottom-[100px] absolute right-0 text-white border-l-[3px] border-white'>
                        <p>+18</p>
                    </div>

                    <div className='h-[600px] w-full absolute top-0 bg-gradient-to-bl from-transparent to-[#141414ae]'></div>
                    <div className='max-w-[1450px] px-9 mx-auto'>
                        <div className="absolute top-[100px] max-w-[600px]">
                            <div className="transition-all duration-500 overflow-hidden">
                                <div className="opacity-100 max-h-screen transition-opacity duration-500">
                                    <div className="h-[150px] items-start">
                                        <div className={`w-full fixed left-0 top-[70px] p-6  z-50 transition-all duration-500 ${scroll > 5 ? 'bg-[#141414]' : ''}`}>
                                            <div className="max-w-[1450px] px-9 mx-auto flex items-center gap-6">
                                                <p className="text-4xl font-bold text-white">{header}</p>
                                                <div className="flex relative">
                                                    <select className="w-[70px] h-[28px] sm:w-[110px] pl-1 bg-[#000] text-white font-semibold outline-none border-[#fff] border-[1px]">
                                                        <option value="genres">Genres</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='w-[110px] h-[40px] flex pl-4 text-xl items-center top-[20px] absolute right-[30px] text-[#d5d5d5]'>
                                                <div className="cursor-pointer border-[1px] shadow-md border-[#d5d5d5] w-[45px] h-[30px] flex justify-center items-center hover:text-[#adadad]">
                                                    <RxTextAlignLeft />
                                                </div>
                                                <div className="cursor-pointer border-y-[1px] border-r-[1px] shadow-md border-[#d5d5d5] w-[45px] h-[30px] flex justify-center items-center hover:text-[#adadad]">
                                                    <RiLayoutGridFill />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='text-white text-sm my-4 font-semibold transition-all duration-500 ease-in-out opacity-100 max-h-[100px]'>
                                        {randomImage.overview}
                                    </p>
                                    <div className="flex flex-wrap gap-3 pt-2">
                                        <button className='w-[120px] h-[42px] rounded-md text-lg font-semibold bg-white transition-all duration-200 hover:bg-[#ddd] text-black flex justify-center gap-1 items-center'>
                                            <IoPlaySharp className='text-3xl' /> Play
                                        </button>
                                        <button onClick={handleShowMoreInfo} className="w-[150px] outline-none h-[45px] bg-[#888888a1] hover:bg-[#88888866] text-white font-semibold text-lg rounded-md flex justify-center gap-1 items-center">
                                            <IoIosInformationCircleOutline className='text-3xl' /> More Info
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {showMoreInfo && (
                            <MoreInfo setShowMoreInfo={setShowMoreInfo} image={`https://image.tmdb.org/t/p/original${randomImage.backdrop_path}`} />
                        )}
                    </div>
                </div>
            ) : (
                <Loading />
            )}

            {/* Mobile Version */}
            <div className="block xs:hidden w-[90%] mx-auto">
                <div className="w-full pt-4">
                    <div className="absolute -z-10 inset-0 pointer-events-none bg-[#141414]"></div>
                    {randomImage ? (
                        <img className="object-cover min-h-[440px] w-full h-[490px] rounded-xl" src={`https://image.tmdb.org/t/p/original${randomImage.backdrop_path}`} alt="" />
                    ) : ''}
                </div>
            </div>
        </div>
    );
}

export default RandomImage;
