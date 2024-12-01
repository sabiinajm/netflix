import React, { useContext, useEffect, useRef, useState } from 'react'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import { Swiper, SwiperSlide } from 'swiper/react'
import breakingB from '../../assets/imgs/breakingb.webp'
import BreakingBvideo from '../../assets/imgs/BreakingBvideo.mp4'
import breakingBLogo from '../../assets/imgs/breakingblogo.webp'
import moneyH from '../../assets/imgs/moneyH.jpg'
import { Keyboard, Navigation } from 'swiper/modules'
import ColorThief from 'colorthief';


import { DATA, TOPMOVIES, TOPTV, TV } from '../../context/DataContext'
import { IoPauseSharp, IoPlaySharp, IoVolumeHigh, IoVolumeMute } from 'react-icons/io5'
import { RiCloseLargeFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { BsPlusLg } from 'react-icons/bs'
import { AiOutlineLike } from 'react-icons/ai'
import { MdOutlineMessage } from 'react-icons/md'


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

  const [showImage, setShowImage] = useState(false)
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    const videoTimer = setTimeout(() => {
      setShowVideo(false);
      setShowImage(true);
    }, 15000);

    const imageTimer = setTimeout(() => {
      setShowImage(true);
    }, 15000);

    return () => {
      clearTimeout(videoTimer);
      clearTimeout(imageTimer);
    };
  }, []);

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

  const [info, setInfo] = useState(false)
  function moreInfo() {
    setInfo(true)
  }
  useEffect(() => {
    if (info) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [info]);


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
                      <button className="w-[110px] outline-none h-[45px] bg-white hover:bg-[#ddd] font-semibold text-lg rounded-md">
                        Play
                      </button>
                      <button onClick={moreInfo} className="w-[150px] outline-none h-[45px] bg-[#888888a1] hover:bg-[#88888866] text-white font-semibold text-lg rounded-md">
                        More Info
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {
                info && (
                  <div className="w-full overflow-y-auto h-full fixed top-0 left-0 bg-[#0005] z-[100]"
                  >
                    <div className="w-full h-full top-[90px] relative flex justify-center items-center">
                      <div className="border-[1px] border-[#444] rounded-lg flex-col fixed z-30 max-w-[800px] w-full flex justify-center items-center">
                        <div className="relative w-full rounded-lg">
                          <img
                            className="object-cover rounded-t-lg min-h-[160px] max-h-[450px] w-full"
                            src={breakingB}
                            alt=""
                          />
                          <img
                            className="absolute bottom-[80px] left-[20px] z-30 object-cover rounded-t-lg w-[350px]"
                            src={breakingBLogo}
                            alt=""
                          />
                          <div className='absolute bottom-[20px] z-40 flex gap-3 justify-between pl-8'>
                            <button className='w-[120px] h-[42px] rounded-sm text-lg font-semibold bg-white transition-all duration-200 hover:bg-[#ddd] text-black flex justify-center gap-1 items-center'><IoPlaySharp className='text-3xl' /> Play</button>
                            <button className='h-[40px] w-[40px] rounded-full flex justify-center items-center transition-all duration-200 hover:bg-[#99999946] text-[#f1f1f1] text-xl border-2 border-[#999] bg-[#222]'><BsPlusLg /></button>
                            <button className='h-[40px] w-[40px] rounded-full flex justify-center items-center transition-all duration-200 hover:bg-[#99999946] text-[#f1f1f1] text-xl border-2 border-[#999] bg-[#222]'><AiOutlineLike /></button>
                          </div>
                          <div className="absolute top-0 min-h-[160px] h-full w-full bg-gradient-to-b from-transparent z-20 to-[#141414]"></div>
                          <div
                            className="absolute top-5 right-5 rounded-full cursor-pointer flex items-center justify-center h-[35px] w-[35px]  z-30  hover:bg-[#ffffff46] transition-all duration-300"

                          >
                            <RiCloseLargeFill className="text-white text-2xl" />
                          </div>
                        </div>
                        <div className="bg-[#141414] w-full rounded-b-lg">
                          <div className='flex justify-between w-[90%] mx-auto'>
                            <div className='py-4'>
                              <div className='flex items-center gap-2'>
                                <p className='text-[#999]'>2024 24 Episodes</p>
                                <p className='border-[1px] border-white text-white text-xs text-center rounded-[3px] w-[30px] h-[17px]'>HD</p>
                                <MdOutlineMessage className='text-[#999]' />
                              </div>
                              <div className='flex items-center gap-2'>
                                <p className='border-[1px] border-white text-white text-xs text-center w-[30px] h-[17px]'>18+</p>
                                <p className='text-[#fff] text-sm'>violance, nudity</p>
                              </div>
                              <p className='text-white text-sm leading-8 py-4'>jhsjkajshjkajshjkaj</p>
                            </div>
                            <div className='text-sm w-[260px] gap-3 flex flex-col py-4'>
                              <p className='text-white '><span className='text-[#999]'>Cast:</span>Kentaro Kumagai, Sayaka Sembogi, Asuna Tomari, <span className='italic'>more</span></p>
                              <p className='text-white '><span className='text-[#999]'>Cast:</span>Kentaro Kumagai, Sayaka Sembogi, Asuna Tomari, <span className='italic'>more</span></p>
                              <p className='text-white '><span className='text-[#999]'>Cast:</span>Kentaro Kumagai, Sayaka Sembogi, Asuna Tomari, <span className='italic'>more</span></p>
                            </div>
                          </div>

                          <div className="w-[90%] mx-auto">
                            <Link className="bg-[#ff0f0f] mb-6 rounded-[.3rem] w-full xs:w-[150px] xs:mx-0 h-[42px] lg:w-[220px] lg:text-xl lg:font-semibold my-2 text-white hover:bg-[#c11119] transition-all duration-300 flex justify-center items-center">
                              Get Started <GoChevronRight className="text-xl md:ml-4 md:text-3xl" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
              <div className='bg-[#14141488] w-[110px] h-[40px] flex pl-4 text-xl items-center bottom-[320px] absolute right-0 text-white border-l-[3px] border-white'>
                <p>+18</p>
              </div>
              <div className={` justify-between absolute bottom-[220px] w-[90px] right-[50px] ${showImageBefore ? "hidden" : "flex"}`}>
                <div onClick={stopVideo} className='bg-[#14141488] transition-all duration-200 hover:bg-[#5c5c5c] w-[40px] rounded-full h-[40px] flex justify-center text-xl items-center text-white'>
                  {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
                </div>
                <div onClick={toggleMute} className='bg-[#14141488] transition-all duration-200 hover:bg-[#5c5c5c] w-[40px] rounded-full h-[40px] flex justify-center text-xl items-center  text-white'>
                  {isMuted ? <IoVolumeMute /> : <IoVolumeHigh />}
                </div>
              </div>
            </div>
          </div>
          <div className='h-[670px] flex items-end'>
            <div className='w-full z-20 bg-gradient-to-b from-transparent to-[#141414]'>
              <div className='max-w-[1600px] mx-auto overflow-hidden'>
                <div className="flex flex-col justify-end">
                  <div className="text-white text-xl font-semibold ">
                    <div className='flex items-center group pl-10'>
                      <h3>Critically Acclaimed TV Dramas</h3>
                      <span
                        className="w-0 font-semibold text-cyan-500 translate-x-0 group-hover:translate-x-2 whitespace-nowrap opacity-0 transition-all delay-300 duration-200 group-hover:opacity-100 group-hover:w-[100px] ml-2 flex items-center"
                      >
                        Explore All
                      </span>
                    </div>

                  </div>
                </div>
                <div className={`relative min-h-[150px] flex items-center  transition-all duration-500 ${isSwipedRight2 ? 'pl-0' : 'pl-10'} `}>
                  <Swiper
                    cssMode={true}
                    navigation={{
                      nextEl: '.custom-next2',
                      prevEl: '.custom-prev2',
                    }}
                    keyboard={true}
                    modules={[Navigation, Keyboard]}
                  >
                    {data && data.map((item, index) =>
                      <div>
                        <SwiperSlide key={index} className="swiper-slide-trend2 cursor-pointer">
                          <div className='transition-all duration-500'>
                            <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="movie" className='object-cover rounded-sm h-[130px] w-[230px]' />
                          </div>
                        </SwiperSlide>
                      </div>
                    )
                    }
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
            <div className='max-w-[1600px] mx-auto overflow-hidden'>
              <div className="flex flex-col justify-end ">
                <div className="text-white text-xl font-semibold ">
                  <div className='flex items-end h-[50px] group pl-10'>
                    <h3>You May like</h3>
                    <span
                      className="w-0 font-semibold text-cyan-500 translate-x-0 group-hover:translate-x-2 whitespace-nowrap opacity-0 transition-all delay-300 duration-200 group-hover:opacity-100 group-hover:w-[100px] ml-2 flex items-center"
                    >
                      Explore All
                    </span>
                  </div>

                </div>
              </div>
              <div className={`relative min-h-[150px] flex items-center  transition-all duration-500 ${isSwipedRight3 ? 'pl-0' : 'pl-10'} `}>
                <Swiper
                  cssMode={true}
                  navigation={{
                    nextEl: '.custom-next3',
                    prevEl: '.custom-prev3',
                  }}
                  keyboard={true}
                  modules={[Navigation, Keyboard]}
                >
                  {tv && tv.map((item, index) =>
                    <SwiperSlide key={index} className='swiper-slide-trend2 cursor-pointer'>
                      <div className='transition-all duration-500'>
                        <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="movie" className='object-fill rounded-sm h-[130px] w-[230px]' />
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
            <div className='max-w-[1600px] mx-auto overflow-hidden'>
              <div className="max-w-[1450px] flex flex-col justify-end ">
                <div className="text-white text-xl font-semibold ">
                  <div className='flex items-end h-[50px] group pl-10'>
                    <h3>To-rated Movies</h3>
                    <span
                      className="w-0 font-semibold text-cyan-500 translate-x-0 group-hover:translate-x-2 whitespace-nowrap opacity-0 transition-all delay-300 duration-200 group-hover:opacity-100 group-hover:w-[100px] ml-2 flex items-center"
                    >
                      Explore All
                    </span>
                  </div>

                </div>
              </div>
              <div className={`relative min-h-[150px] flex items-center  transition-all duration-500 ${isSwipedRight4 ? 'pl-0' : 'pl-10'} `}>
                <Swiper
                  cssMode={true}
                  navigation={{
                    nextEl: '.custom-next4',
                    prevEl: '.custom-prev4',
                  }}
                  keyboard={true}
                  modules={[Navigation, Keyboard]}
                >
                  {topM && topM.map((item, index) =>
                    <SwiperSlide key={index} className='swiper-slide-trend2 cursor-pointer'>
                      <div className='transition-all duration-500'>
                        <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="movie" className='object-fill rounded-sm h-[130px] w-[230px]' />
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
          {/* <div className='w-full  bg-[#141414] '>
            <div className='max-w-[1600px] mx-auto overflow-hidden'>
              <div className="max-w-[1450px] flex flex-col justify-end ">
                <div className="text-white text-xl font-semibold ">
                  <div className='flex items-end h-[50px] group pl-9'>
                    <h3>Critically Acclaimed TV Dramas</h3>
                    <span
                      className="w-0 font-semibold text-cyan-500 translate-x-0 group-hover:translate-x-2 whitespace-nowrap opacity-0 transition-all delay-300 duration-200 group-hover:opacity-100 group-hover:w-[100px] ml-2 flex items-center"
                    >
                      Explore All
                    </span>
                  </div>

                </div>
              </div>
              <div className={`relative min-h-[150px] flex items-center transition-all duration-500 ${isSwipedRight2 ? 'pl-0' : 'pl-10'} `}>
                <Swiper
                  cssMode={true}
                  navigation={{
                    nextEl: '.custom-next3',
                    prevEl: '.custom-prev3',
                  }}
                  keyboard={true}
                  modules={[Navigation, Keyboard]}
                >
                  {comingM && comingM.map((item, index) =>
                    <SwiperSlide key={index} className='swiper-slide-trend2 cursor-pointer'>
                      <div className='transition-all duration-500'>
                        <h1>{comingM.overview}</h1>
                        <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="movie" className='object-fill rounded-sm h-[130px] w-[230px]' />
                      </div>
                    </SwiperSlide>
                  )
                  }
                </Swiper>
                <div>
                  <div className="flex justify-center w-[70px] items-center transform -translate-y-1/2 absolute top-1/2 -left-1 z-20">
                    <div className="custom-prev3 flex items-center justify-center h-[131px] w-[65px]  bg-[#00000061] text-white hover:bg-[#0000008d] cursor-pointer transition-all duration-150">
                      <GoChevronLeft className='text-4xl' />
                    </div>
                  </div>
                  <div onClick={swipeRight2} className="w-[70px] flex justify-center items-center transform -translate-y-1/2 absolute top-1/2 -right-1 z-20">
                    <div className="custom-next3 flex items-center justify-center h-[131px] w-[65px] bg-[#00000061] text-white hover:bg-[#0000008d] cursor-pointer transition-all duration-150">
                      <GoChevronRight className='text-4xl' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className='w-full  bg-[#141414] '>
            <div className='max-w-[1600px] mx-auto overflow-hidden'>
              <div className="max-w-[1450px] flex flex-col justify-end ">
                <div className="text-white text-xl font-semibold ">
                  <div className='flex items-end h-[50px] group pl-9'>
                    <h3>Top-rated Tv Shows</h3>
                    <span
                      className="w-0 font-semibold text-cyan-500 translate-x-0 group-hover:translate-x-2 whitespace-nowrap opacity-0 transition-all delay-300 duration-200 group-hover:opacity-100 group-hover:w-[100px] ml-2 flex items-center"
                    >
                      Explore All
                    </span>
                  </div>

                </div>
              </div>
              <div className={`relative min-h-[150px] flex items-center transition-all duration-500 ${isSwipedRight5 ? 'pl-0' : 'pl-10'} `}>
                <Swiper
                  cssMode={true}
                  navigation={{
                    nextEl: '.custom-next5',
                    prevEl: '.custom-prev5',
                  }}
                  keyboard={true}
                  modules={[Navigation, Keyboard]}
                >
                  {topTv && topTv.map((item, index) =>
                    <SwiperSlide key={index} className='swiper-slide-trend2 cursor-pointer'>
                      <div className='transition-all duration-500'>
                        <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="movie" className='object-fill rounded-sm h-[130px] w-[230px]' />
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
              {data && data.map((item, index) => {
                return (
                  <SwiperSlide key={index} className='swiper-slide-trend cursor-pointer'>
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
                {tv && tv.map((item, index) => {
                  return (
                    <SwiperSlide key={index} className='swiper-slide-trend cursor-pointer'>
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
                {topTv && topTv.map((item, index) => {
                  return (
                    <SwiperSlide key={index} className='swiper-slide-trend cursor-pointer'>
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
                {topM && topM.map((item, index) => {
                  return (
                    <SwiperSlide key={index} className='swiper-slide-trend cursor-pointer'>
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