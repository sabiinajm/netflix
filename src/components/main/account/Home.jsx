import React, { useContext, useEffect, useRef, useState } from 'react'

import { GoChevronDown, GoChevronLeft, GoChevronRight } from 'react-icons/go'
import { IoPauseSharp, IoPlaySharp, IoVolumeHigh, IoVolumeMute } from 'react-icons/io5'
import { BsPlusLg } from 'react-icons/bs'
import { AiOutlineLike } from 'react-icons/ai'
import { IoIosInformationCircleOutline } from 'react-icons/io'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Navigation } from 'swiper/modules'
import breakingB from '../../../assets/imgs/breakingb.webp'
import BreakingBvideo from '../../../assets/imgs/BreakingBvideo.mp4'
import breakingBLogo from '../../../assets/imgs/breakingblogo.webp'
import moneyH from '../../../assets/imgs/moneyH.jpg'

import ColorThief from 'colorthief';


import { DATA, TOPMOVIES, TOPTV, TV } from '../../../context/DataContext'
import MoreInfo from './MoreInfo'
import { useNavigate } from 'react-router-dom'

function Home() {
  const { data } = useContext(DATA)
  const { tv } = useContext(TV)
  // const { comingM } = useContext(COMINGM)
  const { topM } = useContext(TOPMOVIES)
  const { topTv } = useContext(TOPTV)

  const [dominantColor, setDominantColor] = useState('');
  const imgRef = useRef();

  useEffect(() => {
    if (imgRef.current) {
      const colorThief = new ColorThief();

      imgRef.current.onload = () => {
        const color = colorThief.getColor(imgRef.current);
        setDominantColor(`rgba(${color[0]}, ${color[1]}, ${color[2]}, 1)`);
      };
    }
  }, []);
  const [isSwipedRight2, setIsSwipedRight2] = useState(false);
  const [isSwipedRight3, setIsSwipedRight3] = useState(false);
  const [isSwipedRight4, setIsSwipedRight4] = useState(false);
  const [isSwipedRight5, setIsSwipedRight5] = useState(false);

  const swipeRight2 = () => {
    setIsSwipedRight2(true);
  }
  const swipeRight3 = () => {
    setIsSwipedRight3(true);
  }
  const swipeRight4 = () => {
    setIsSwipedRight4(true);
  }
  const swipeRight5 = () => {
    setIsSwipedRight5(true);
  }
  const videoRef = useRef(null);
  const [showImageBefore, setShowImageBefore] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImageBefore(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  function handleVideoEnd() {
    setShowImageBefore(true)
  }

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const stopVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying)
    }
  };
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handleShowMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo);
  }
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const [selectedItem, setSelectedItem] = useState(null);
  const [modal, setModal] = useState(false);
  function handleSlideMoreInfo(itemId, source) {
    const sources = {
      data,
      tv,
      topM,
      topTv,
    };

    const selectedItem = sources[source]?.find((item) => item.id === itemId);

    if (selectedItem) {
      setSelectedItem(selectedItem);
      setModal(!modal)
    }
  }
  const navigate = useNavigate()
  function openVideo() {
    navigate('/video');
  }

  return (
    <>
      <main>
        <div className='hidden xs:block '>
          <div className="absolute top-0 h-[730px] w-full bg-black">
            {showImageBefore ? (
              <img
                className="object-cover h-full w-full"
                src={breakingB}
                alt="Preview"
              />
            ) : (
              <video
                className="object-cover h-full w-full"
                src={BreakingBvideo}
                muted
                autoPlay
                ref={videoRef}
                loop
                playsInline
                preload="auto"
                onEnded={handleVideoEnd}
              />
            )}

            <div className='h-[750px] w-full  absolute top-0 bg-gradient-to-bl from-transparent to-[#141414ae]'></div>
            <div className='max-w-[1450px] px-9 mx-auto '>
              <div className="absolute top-[180px] max-w-[400px] max-h-[230px]">
                <div className="transition-all duration-500 overflow-hidden">
                  <div className="opacity-100 max-h-screen transition-opacity duration-500">
                    <img className={`object-cover  transition-all duration-500 ease-in-out ${showImageBefore ? "scale-100" : "scale-75 translate-y-6 -translate-x-14"
                      }`} src={breakingBLogo} alt="" />
                    <p
                      className={`text-white text-sm my-4 font-semibold transition-all duration-500 ease-in-out ${showImageBefore ? "opacity-100 max-h-[100px]" : "opacity-0 max-h-0"
                        }`}
                    >
                      Bryan Cranston scored four Emmys for his portrayal of a father who sells meth to support his family in what Forbes calls the "Best. Show. Ever."
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                      <button onClick={openVideo} className='w-[120px] cursor-pointer h-[42px] rounded-md text-lg font-semibold bg-white transition-all duration-200 hover:bg-[#ddd] text-black flex justify-center gap-1 items-center'><IoPlaySharp className='text-3xl' /> Play</button>
                      <button onClick={handleShowMoreInfo} className="w-[150px] outline-none h-[45px] bg-[#888888a1] hover:bg-[#88888866] text-white font-semibold text-lg rounded-md flex justify-center gap-1 items-center">
                        <IoIosInformationCircleOutline className='text-3xl' /> More Info
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {showMoreInfo && <MoreInfo setShowMoreInfo={setShowMoreInfo} year={2008} setModal={setModal} image={breakingB} />}
              {modal && selectedItem && <MoreInfo setModal={setModal} year={selectedItem.release_date?.slice(0, 4) || selectedItem.first_air_date?.slice(0, 4)}
                overview={selectedItem.overview} setShowMoreInfo={setShowMoreInfo} image={`https://image.tmdb.org/t/p/original` + selectedItem.backdrop_path} />}
              <div className='bg-[#14141488] w-[110px] h-[40px] flex pl-4 text-xl items-center bottom-[320px] absolute right-0 text-white border-l-[3px] border-white'>
                <p>+18</p>
              </div>
              <div className={`z-30 justify-between absolute bottom-[220px] w-[90px] right-[50px] ${showImageBefore ? "hidden" : "flex"}`}>
                <div onClick={stopVideo} className='bg-[#14141488] transition-all duration-200 hover:bg-[#5c5c5c] w-[40px] rounded-full h-[40px] flex justify-center text-xl items-center text-white'>
                  {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
                </div>
                <div onClick={toggleMute} className='bg-[#14141488] transition-all duration-200 hover:bg-[#5c5c5c] w-[40px] rounded-full h-[40px] flex justify-center text-xl items-center  text-white'>
                  {isMuted ? <IoVolumeMute /> : <IoVolumeHigh />}
                </div>
              </div>
            </div>
          </div>
          <div className='h-[730px] flex items-end'>
            <div className='w-full z-20 bg-gradient-to-b from-transparent to-[#141414]'>
              <div className='max-w-[1600px] mx-auto overflow-hidden translate-y-8'>
                <div className="flex flex-col justify-end">
                  <div className="text-white text-xl font-semibold ">
                    <div className='flex items-center group pl-10 translate-y-8'>
                      <h3>Critically Acclaimed TV Dramas</h3>
                      <span
                        className="w-0 text-sm font-semibold text-cyan-500 translate-x-0 group-hover:translate-x-2 whitespace-nowrap opacity-0 transition-all delay-300 duration-200 group-hover:opacity-100 group-hover:w-[100px] ml-2 flex items-center"
                      >
                        Explore All
                      </span>
                    </div>

                  </div>
                </div>
                <div className={`relative min-h-[150px] flex items-center  transition-all duration-500 ${isSwipedRight2 ? 'pl-0' : 'pl-10'} `}>
                  <Swiper
                    className='h-[245px]'
                    cssMode={true}
                    navigation={{
                      nextEl: '.custom-next2',
                      prevEl: '.custom-prev2',
                    }}
                    keyboard={true}
                    modules={[Navigation, Keyboard]}
                  >
                    {data && data.map((item) => (
                      <SwiperSlide key={item.id} className="swiper-slide-trend2 cursor-pointer">
                        <div
                          onMouseEnter={() => handleMouseEnter(item.id)}
                          onMouseLeave={handleMouseLeave}
                          className="transition-all duration-500 h-full flex justify-center items-center"
                        >
                          <img
                            src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                            alt="movie"
                            className="object-cover rounded-sm h-[130px] w-[234px]"
                          />
                          {hoveredCard === item.id && (
                            <div
                              className="absolute top-[10px] rounded-md bg-[#141414] z-20 hover:scale-110 transition-all duration-300 delay-200 shadow-md shadow-[#000000b6]"
                            >
                              {/* Background Image */}
                              <img
                                src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                                alt=""
                                className='rounded-t-md' />
                              <div className="flex justify-between pt-3 px-4">
                                <div className="flex gap-3 mb-4">
                                  <button onClick={openVideo} className="w-[30px] h-[30px] rounded-full text-lg font-semibold bg-white transition-all duration-200 hover:bg-[#ddd] text-black flex justify-center gap-1 items-center">
                                    <IoPlaySharp className="text-xl" />
                                  </button>
                                  <button className="w-[30px] h-[30px]  rounded-full flex justify-center items-center transition-all duration-200 hover:bg-[#99999946] text-[#f1f1f1] text-xl border-2 border-[#999] bg-[#222]">
                                    <BsPlusLg />
                                  </button>
                                  <button className="w-[30px] h-[30px]  rounded-full flex justify-center items-center transition-all duration-200 hover:bg-[#99999946] text-[#f1f1f1] text-xl border-2 border-[#999] bg-[#222]">
                                    <AiOutlineLike />
                                  </button>
                                </div>
                                <button onClick={() => handleSlideMoreInfo(item.id, "data")} className="w-[30px] h-[30px]  rounded-full flex justify-center items-center transition-all duration-200 hover:bg-[#99999946] text-[#f1f1f1] text-xl border-2 border-[#999] bg-[#222]">
                                  <GoChevronDown />
                                </button>
                              </div>

                              {/* Metadata */}
                              <div className="flex items-center gap-2 text-sm text-white px-4 pb-1">
                                <p className="border border-[#999] text-[#999] text-[.7rem] flex justify-center items-center w-[30px] h-[15px]">
                                  13
                                </p>
                                <p className="border border-[#999] text-[#ddd] text-xs text-center rounded-[3px] w-[30px] h-[15px]">
                                  HD
                                </p>
                                <p className="text-[#999]">{item.release_date?.slice(0, 4) || item.first_air_date?.slice(0, 4)}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <div>
                    <div className="flex justify-center w-[70px] items-center transform -translate-y-1/2 absolute top-1/2 -left-1 z-20">
                      <div className="custom-prev2 flex items-center justify-center h-[131px] w-[65px]  bg-gradient-to-r from-[#000000c2] hover:from-[#000000e5] to-transparent text-white cursor-pointer transition-all duration-150">
                        <GoChevronLeft className='text-4xl' />
                      </div>
                    </div>
                    <div onClick={swipeRight2} className="w-[70px] flex justify-center items-center transform -translate-y-1/2 absolute top-1/2 -right-1 z-20">
                      <div className="custom-next2 flex items-center justify-center h-[131px] w-[65px]  bg-gradient-to-l from-[#000000c2] hover:from-[#000000e5] to-transparent text-white cursor-pointer transition-all duration-150">
                        <GoChevronRight className='text-4xl' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full  bg-[#141414] '>
            <div className='max-w-[1600px] mx-auto overflow-hidden -translate-y-10'>
              <div className="flex flex-col justify-end ">
                <div className="text-white text-xl font-semibold ">
                  <div className='flex items-end h-[50px] group pl-10 translate-y-9'>
                    <h3>You May like</h3>
                    <span
                      className="w-0 text-sm font-semibold text-cyan-500 translate-x-0 group-hover:translate-x-2 whitespace-nowrap opacity-0 transition-all delay-300 duration-200 group-hover:opacity-100 group-hover:w-[100px] ml-2 flex items-center"
                    >
                      Explore All
                    </span>
                  </div>

                </div>
              </div>
              <div className={`relative min-h-[150px] flex items-center  transition-all duration-500 ${isSwipedRight3 ? 'pl-0' : 'pl-10'} `}>
                <Swiper
                  className='h-[245px]'
                  cssMode={true}
                  navigation={{
                    nextEl: '.custom-next3',
                    prevEl: '.custom-prev3',
                  }}
                  keyboard={true}
                  modules={[Navigation, Keyboard]}
                >
                  {tv && tv.map((item) =>
                    <SwiperSlide key={item.id} className="swiper-slide-trend2 cursor-pointer">
                      <div
                        onMouseEnter={() => handleMouseEnter(item.id)}
                        onMouseLeave={handleMouseLeave}
                        className="transition-all duration-500 h-full flex justify-center items-center"
                      >
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                          alt="movie"
                          className="object-cover rounded-sm h-[130px] w-[234px]"
                        />
                        {hoveredCard === item.id && (
                          <div
                            className="absolute top-[10px] rounded-md bg-[#141414] z-20 hover:scale-110 transition-all duration-300 delay-200 shadow-md shadow-[#000000b6]"
                          >
                            {/* Background Image */}
                            <img
                              src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                              alt=""
                              className='rounded-t-md' />
                            <div className="flex justify-between pt-3 px-4">
                              <div className="flex gap-3 mb-4">
                                <button onClick={openVideo} className="w-[30px] h-[30px] rounded-full text-lg font-semibold bg-white transition-all duration-200 hover:bg-[#ddd] text-black flex justify-center gap-1 items-center">
                                  <IoPlaySharp className="text-xl" />
                                </button>
                                <button className="w-[30px] h-[30px]  rounded-full flex justify-center items-center transition-all duration-200 hover:bg-[#99999946] text-[#f1f1f1] text-xl border-2 border-[#999] bg-[#222]">
                                  <BsPlusLg />
                                </button>
                                <button className="w-[30px] h-[30px]  rounded-full flex justify-center items-center transition-all duration-200 hover:bg-[#99999946] text-[#f1f1f1] text-xl border-2 border-[#999] bg-[#222]">
                                  <AiOutlineLike />
                                </button>
                              </div>
                              <button onClick={() => handleSlideMoreInfo(item.id, "tv")} className="w-[30px] h-[30px]  rounded-full flex justify-center items-center transition-all duration-200 hover:bg-[#99999946] text-[#f1f1f1] text-xl border-2 border-[#999] bg-[#222]">
                                <GoChevronDown />
                              </button>
                            </div>

                            {/* Metadata */}
                            <div className="flex items-center gap-2 text-sm text-white px-4 pb-1">
                              <p className="border border-[#999] text-[#999] text-[.7rem] flex justify-center items-center w-[30px] h-[15px]">
                                13
                              </p>
                              <p className="border border-[#999] text-[#ddd] text-xs text-center rounded-[3px] w-[30px] h-[15px]">
                                HD
                              </p>
                              <p className="text-[#999]">{item.release_date?.slice(0, 4) || item.first_air_date?.slice(0, 4)}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </SwiperSlide>
                  )
                  }
                </Swiper>
                <div>
                  <div className="flex justify-center w-[70px] items-center transform -translate-y-1/2 absolute top-1/2 -left-1 z-20">
                    <div className="custom-prev3 flex items-center justify-center h-[131px] w-[65px]  bg-gradient-to-r from-[#000000c2] hover:from-[#000000e5] to-transparent text-white cursor-pointer transition-all duration-150">
                      <GoChevronLeft className='text-4xl' />
                    </div>
                  </div>
                  <div onClick={swipeRight3} className="w-[70px] flex justify-center items-center transform -translate-y-1/2 absolute top-1/2 -right-1 z-20">
                    <div className="custom-next3 flex items-center justify-center h-[131px] w-[65px]  bg-gradient-to-l from-[#000000c2] hover:from-[#000000e5] to-transparent text-white cursor-pointer transition-all duration-150">
                      <GoChevronRight className='text-4xl' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full  bg-[#141414] '>
            <div className='max-w-[1600px] mx-auto overflow-hidden -translate-y-24'>
              <div className="flex flex-col justify-end ">
                <div className="text-white text-xl font-semibold ">
                  <div className='flex items-end h-[50px] group pl-10 translate-y-9'>
                    <h3>You May like</h3>
                    <span
                      className="w-0 text-sm font-semibold text-cyan-500 translate-x-0 group-hover:translate-x-2 whitespace-nowrap opacity-0 transition-all delay-300 duration-200 group-hover:opacity-100 group-hover:w-[100px] ml-2 flex items-center"
                    >
                      Explore All
                    </span>
                  </div>
                </div>
              </div>
              <div className={`relative min-h-[150px] flex items-center  transition-all duration-500 ${isSwipedRight4 ? 'pl-0' : 'pl-10'} `}>
                <Swiper
                  className='h-[245px]'
                  cssMode={true}
                  navigation={{
                    nextEl: '.custom-next4',
                    prevEl: '.custom-prev4',
                  }}
                  keyboard={true}
                  modules={[Navigation, Keyboard]}
                >
                  {topM && topM.map((item) =>
                    <SwiperSlide key={item.id} className="swiper-slide-trend2 cursor-pointer">
                      <div
                        onMouseEnter={() => handleMouseEnter(item.id)}
                        onMouseLeave={handleMouseLeave}
                        className="transition-all duration-500 h-full flex justify-center items-center"
                      >
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                          alt="movie"
                          className="object-cover rounded-sm h-[130px] w-[234px]"
                        />
                        {hoveredCard === item.id && (
                          <div
                            className="absolute top-[10px] rounded-md bg-[#141414] z-20 hover:scale-110 transition-all duration-300 delay-200 shadow-md shadow-[#000000b6]"
                          >
                            {/* Background Image */}
                            <img
                              src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                              alt=""
                              className='rounded-t-md' />
                            <div className="flex justify-between pt-3 px-4">
                              <div className="flex gap-3 mb-4">
                                <button onClick={openVideo} className="w-[30px] h-[30px] rounded-full text-lg font-semibold bg-white transition-all duration-200 hover:bg-[#ddd] text-black flex justify-center gap-1 items-center">
                                  <IoPlaySharp className="text-xl" />
                                </button>
                                <button className="w-[30px] h-[30px]  rounded-full flex justify-center items-center transition-all duration-200 hover:bg-[#99999946] text-[#f1f1f1] text-xl border-2 border-[#999] bg-[#222]">
                                  <BsPlusLg />
                                </button>
                                <button className="w-[30px] h-[30px]  rounded-full flex justify-center items-center transition-all duration-200 hover:bg-[#99999946] text-[#f1f1f1] text-xl border-2 border-[#999] bg-[#222]">
                                  <AiOutlineLike />
                                </button>
                              </div>
                              <button onClick={() => handleSlideMoreInfo(item.id, "topM")} className="w-[30px] h-[30px]  rounded-full flex justify-center items-center transition-all duration-200 hover:bg-[#99999946] text-[#f1f1f1] text-xl border-2 border-[#999] bg-[#222]">
                                <GoChevronDown />
                              </button>
                            </div>

                            {/* Metadata */}
                            <div className="flex items-center gap-2 text-sm text-white px-4 pb-1">
                              <p className="border border-[#999] text-[#999] text-[.7rem] flex justify-center items-center w-[30px] h-[15px]">
                                13
                              </p>
                              <p className="border border-[#999] text-[#ddd] text-xs text-center rounded-[3px] w-[30px] h-[15px]">
                                HD
                              </p>
                              <p className="text-[#999]">{item.release_date?.slice(0, 4) || item.first_air_date?.slice(0, 4)}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </SwiperSlide>
                  )
                  }
                </Swiper>
                <div>
                  <div className="flex justify-center w-[70px] items-center transform -translate-y-1/2 absolute top-1/2 -left-1 z-20">
                    <div className="custom-prev4 flex items-center justify-center h-[131px] w-[65px]  bg-gradient-to-r from-[#000000c2] hover:from-[#000000e5] to-transparent text-white cursor-pointer transition-all duration-150">
                      <GoChevronLeft className='text-4xl' />
                    </div>
                  </div>
                  <div onClick={swipeRight4} className="w-[70px] flex justify-center items-center transform -translate-y-1/2 absolute top-1/2 -right-1 z-20">
                    <div className="custom-next4 flex items-center justify-center h-[131px] w-[65px]  bg-gradient-to-l from-[#000000c2] hover:from-[#000000e5] to-transparent text-white cursor-pointer transition-all duration-150">
                      <GoChevronRight className='text-4xl' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full bg-[#141414] '>
            <div className='max-w-[1600px] mx-auto overflow-hidden -translate-y-32'>
              <div className="flex flex-col justify-end ">
                <div className="text-white text-xl font-semibold ">
                  <div className='flex items-end h-[50px] group pl-10 translate-y-9'>
                    <h3>You May like</h3>
                    <span
                      className="w-0 text-sm font-semibold text-cyan-500 translate-x-0 group-hover:translate-x-2 whitespace-nowrap opacity-0 transition-all delay-300 duration-200 group-hover:opacity-100 group-hover:w-[100px] ml-2 flex items-center"
                    >
                      Explore All
                    </span>
                  </div>
                </div>
              </div>
              <div className={`relative min-h-[150px] flex items-center  transition-all duration-500 ${isSwipedRight5 ? 'pl-0' : 'pl-10'} `}>
                <Swiper
                  className='h-[245px]'
                  cssMode={true}
                  navigation={{
                    nextEl: '.custom-next5',
                    prevEl: '.custom-prev5',
                  }}
                  keyboard={true}
                  modules={[Navigation, Keyboard]}
                >
                  {topTv && topTv.map((item) =>
                    <SwiperSlide key={item.id} className="swiper-slide-trend2 cursor-pointer">
                      <div
                        onMouseEnter={() => handleMouseEnter(item.id)}
                        onMouseLeave={handleMouseLeave}
                        className="transition-all duration-500 h-full flex justify-center items-center"
                      >
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                          alt="movie"
                          className="object-cover rounded-sm h-[130px] w-[234px]"
                        />
                        {hoveredCard === item.id && (
                          <div
                            className="absolute top-[10px] rounded-md bg-[#141414] z-20 hover:scale-110 transition-all duration-300 delay-200 shadow-md shadow-[#000000b6]"
                          >
                            {/* Background Image */}
                            <img
                              src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                              alt=""
                              className='rounded-t-md' />
                            <div className="flex justify-between pt-3 px-4">
                              <div className="flex gap-3 mb-4">
                                <button onClick={openVideo} className="w-[30px] h-[30px] rounded-full text-lg font-semibold bg-white transition-all duration-200 hover:bg-[#ddd] text-black flex justify-center gap-1 items-center">
                                  <IoPlaySharp className="text-xl" />
                                </button>
                                <button className="w-[30px] h-[30px]  rounded-full flex justify-center items-center transition-all duration-200 hover:bg-[#99999946] text-[#f1f1f1] text-xl border-2 border-[#999] bg-[#222]">
                                  <BsPlusLg />
                                </button>
                                <button className="w-[30px] h-[30px]  rounded-full flex justify-center items-center transition-all duration-200 hover:bg-[#99999946] text-[#f1f1f1] text-xl border-2 border-[#999] bg-[#222]">
                                  <AiOutlineLike />
                                </button>
                              </div>
                              <button onClick={() => handleSlideMoreInfo(item.id, "topTv")} className="w-[30px] h-[30px]  rounded-full flex justify-center items-center transition-all duration-200 hover:bg-[#99999946] text-[#f1f1f1] text-xl border-2 border-[#999] bg-[#222]">
                                <GoChevronDown />
                              </button>
                            </div>

                            {/* Metadata */}
                            <div className="flex items-center gap-2 text-sm text-white px-4 pb-1">
                              <p className="border border-[#999] text-[#999] text-[.7rem] flex justify-center items-center w-[30px] h-[15px]">
                                13
                              </p>
                              <p className="border border-[#999] text-[#ddd] text-xs text-center rounded-[3px] w-[30px] h-[15px]">
                                HD
                              </p>
                              <p className="text-[#999]">{item.release_date?.slice(0, 4) || item.first_air_date?.slice(0, 4)}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </SwiperSlide>
                  )
                  }
                </Swiper>
                <div>
                  <div className="flex justify-center w-[70px] items-center transform -translate-y-1/2 absolute top-1/2 -left-1 z-20">
                    <div className="custom-prev5 flex items-center justify-center h-[131px] w-[65px]  bg-gradient-to-r from-[#000000c2] hover:from-[#000000e5] to-transparent text-white cursor-pointer transition-all duration-150">
                      <GoChevronLeft className='text-4xl' />
                    </div>
                  </div>
                  <div onClick={swipeRight5} className="w-[70px] flex justify-center items-center transform -translate-y-1/2 absolute top-1/2 -right-1 z-20">
                    <div className="custom-next5 flex items-center justify-center h-[131px] w-[65px]  bg-gradient-to-l from-[#000000c2] hover:from-[#000000e5] to-transparent text-white cursor-pointer transition-all duration-150">
                      <GoChevronRight className='text-4xl' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
        {/* Mobile */}
        <div div className='block xs:hidden w-[90%] mx-auto' >
          <div className='w-full pt-4'>
            <div
              className="absolute -z-10 inset-0 pointer-events-none"
              style={{ backgroundColor: dominantColor }}
            ></div>

            <img ref={imgRef} className='object-cover min-h-[440px] w-full h-[490px] rounded-xl' src={moneyH} alt="" />
          </div>
        </div >
        <div className='block xs:hidden w-full relative'>
          <div
            className="h-[240px] absolute -z-10 inset-0 pointer-events-none "
            style={{
              background: `linear-gradient(to top, black, ${dominantColor})`,
            }}
          ></div>
          <div className='w-[90%] mx-auto text-white pt-4 px-2'>
            <p className='text-lg font-semibold'>New on Netflix</p>
            <Swiper
              cssMode={true}
              modules={[Navigation, Keyboard]}
            >
              {data && data.map((item) => {
                return (
                  <SwiperSlide key={item.id} className='swiper-slide-trend cursor-pointer'>
                    <div className='scale-[.94] hover:scale-[.98] transition-all duration-500'>
                      <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} className='rounded-lg h-[190px] w-[130px] md:h-[240px] md:w-[170px] lg:h-[270px] lg:w-[220px]' />
                    </div>
                  </SwiperSlide>
                )
              })
              }
            </Swiper>
          </div>
          <div className='bg-black pb-12'>
            <div className='w-[90%] mx-auto text-white pt-4 px-2'>
              <p className='text-lg font-semibold'>Award-winning Period Pieces</p>
              <Swiper
                cssMode={true}
                modules={[Navigation, Keyboard]}
              >
                {tv && tv.map((item) => {
                  return (
                    <SwiperSlide key={item.id} className='swiper-slide-trend cursor-pointer'>
                      <div className='scale-[.94] hover:scale-[.98] transition-all duration-500'>
                        <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} className='rounded-lg h-[190px] w-[130px] md:h-[240px] md:w-[170px] lg:h-[270px] lg:w-[220px]' />
                      </div>
                    </SwiperSlide>
                  )
                })
                }
              </Swiper>
            </div>
          </div>
          <div className='bg-black pb-12'>
            <div className='w-[90%] mx-auto text-white pt-4 px-2'>
              <p className='text-lg font-semibold'>Top-rated Tv Shows</p>
              <Swiper
                cssMode={true}
                modules={[Navigation, Keyboard]}
              >
                {topTv && topTv.map((item) => {
                  return (
                    <SwiperSlide key={item.id} className='swiper-slide-trend cursor-pointer'>
                      <div className='scale-[.94] hover:scale-[.98] transition-all duration-500'>
                        <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} className='rounded-lg h-[190px] w-[130px] md:h-[240px] md:w-[170px] lg:h-[270px] lg:w-[220px]' />
                      </div>
                    </SwiperSlide>
                  )
                })
                }
              </Swiper>
            </div>
          </div>
          <div className='bg-black pb-12'>
            <div className='w-[90%] mx-auto text-white pt-4 px-2'>
              <p className='text-lg font-semibold'>Top-rated Movies</p>
              <Swiper
                cssMode={true}
                modules={[Navigation, Keyboard]}
              >
                {topM && topM.map((item) => {
                  return (
                    <SwiperSlide key={item.id} className='swiper-slide-trend cursor-pointer'>
                      <div className='scale-[.94] hover:scale-[.98] transition-all duration-500'>
                        <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} className='rounded-lg h-[190px] w-[130px] md:h-[240px] md:w-[170px] lg:h-[270px] lg:w-[220px]' />
                      </div>
                    </SwiperSlide>
                  )
                })
                }
              </Swiper>
            </div>
          </div>
        </div>
      </main >
    </>

  )
}

export default Home