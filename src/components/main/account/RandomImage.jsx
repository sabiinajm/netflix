import { useState, useEffect, useContext } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoPlaySharp } from "react-icons/io5";
import Loading from "./Loading";
import MoreInfo from "./MoreInfo";
import { DATA } from "../../../context/DataContext";
import Genres from "./Genres";
import { useNavigate } from "react-router-dom";

function RandomImage({ header }) {
    const { data } = useContext(DATA)
    const [randomImage, setRandomImage] = useState(null);
    const [showMoreInfo, setShowMoreInfo] = useState(false);
    const handleShowMoreInfo = () => {
        setShowMoreInfo(!showMoreInfo);
    };

    useEffect(() => {
        if (data && data.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.length);
            setRandomImage(data[randomIndex]);
        }
    }, [data]);

    const navigate = useNavigate()
    function openVideo() {
        navigate('/video');
    }
    return (
        <>
            {randomImage ? (
                <div className="h-[600px] relative w-full hidden xs:block bg-[#141414]">
                    <div>
                        <img
                            className="object-cover h-[600px] w-full bg-black"
                            src={`https://image.tmdb.org/t/p/original${randomImage.backdrop_path}`}
                            alt="Preview"
                        />
                        <div className='bg-[#141414] w-[110px] h-[40px] flex pl-4 text-xl items-center bottom-[100px] absolute right-0 text-white border-l-[3px] border-white'>
                            <p>+18</p>
                        </div>

                        <div className='h-[600px] w-full absolute top-0 bg-gradient-to-bl from-transparent to-[#141414ae]'></div>
                        <div className='max-w-[1450px] px-9 mx-auto'>
                            <div className="absolute top-[100px] max-w-[600px]">
                                <div className="transition-all duration-500 overflow-hidden">
                                    <div className="opacity-100 max-h-screen transition-opacity duration-500">
                                        <div className="h-[190px] items-start">
                                            <Genres header={header} setRandomImage={setRandomImage} />
                                        </div>
                                        <p className='text-white text-sm my-4 font-semibold transition-all duration-500 ease-in-out opacity-100 max-h-[120px]'>
                                            {randomImage.overview}
                                        </p>
                                        <div className="flex flex-wrap gap-3 pt-2">
                                            <button onClick={openVideo} className='w-[120px] h-[42px] rounded-md text-lg font-semibold bg-white transition-all duration-200 hover:bg-[#ddd] text-black flex justify-center gap-1 items-center'>
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
                    </div >
                </div>
            ) : !randomImage ?
                <div className="h-[100px] bg-[#141414]">
                    <Genres header={header} setRandomImage={setRandomImage} />
                </div>

                : (
                    <Loading />
                )}

            {/* Mobile Version */}
            <div div className="block xs:hidden w-[90%] mx-auto " >
                <div className="w-full pt-4">
                    <div className="absolute -z-10 inset-0 pointer-events-none bg-[#141414]"></div>
                    {randomImage ? (
                        <img className="object-cover min-h-[440px] w-full h-[490px] rounded-xl" src={`https://image.tmdb.org/t/p/original${randomImage.backdrop_path}`} alt="" />
                    ) : ''}
                </div>
            </div >
        </>
    );
}

export default RandomImage;
