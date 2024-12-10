import { IoIosInformationCircleOutline } from "react-icons/io"
import { DATA, TOPMOVIES, TOPTV, TV } from "../../../context/DataContext"
import { IoPlaySharp } from "react-icons/io5"
import { useContext, useEffect, useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Keyboard, Navigation } from 'swiper/modules'
import ColorThief from 'colorthief';
import MoreInfo from "./MoreInfo"
import { RiLayoutGridFill } from "react-icons/ri"
import { RxTextAlignLeft } from "react-icons/rx"
import { GoChevronDown, GoChevronLeft, GoChevronRight } from "react-icons/go"
import { AiOutlineLike } from "react-icons/ai"
import { BsPlusLg } from "react-icons/bs"
import Loading from "./Loading"

function TvShows() {
  const { data } = useContext(DATA)
  const { tv } = useContext(TV)
  // const { comingM } = useContext(COMINGM)
  const { topM } = useContext(TOPMOVIES)
  const { topTv } = useContext(TOPTV)

  const [randomImage, setRandomImage] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.length);
      setRandomImage(data[randomIndex]);
    }
  }, [data]);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const handleShowMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo);
  }
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

  const [isSwipedRight, setIsSwipedRight] = useState(false);
  const swipeRight = () => {
    setIsSwipedRight(true);
  }
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <main>
      <div className="h-[600px] relative w-full hidden xs:block bg-[#141414]">
        {
          randomImage ? (
            <div>
              <img
                className="object-cover h-[600px] w-full bg-black"
                src={`https://image.tmdb.org/t/p/original` + randomImage.backdrop_path}
                alt="Preview"
              />
              <div className='bg-[#14141488] w-[110px] h-[40px] flex pl-4 text-xl items-center bottom-[100px] absolute right-0 text-white border-l-[3px] border-white'>
                <p>+18</p>
              </div>

              <div className='h-[600px] w-full  absolute top-0 bg-gradient-to-bl from-transparent to-[#141414ae]'></div>
              <div className='max-w-[1450px] px-9 mx-auto '>
                <div className="absolute top-[100px] max-w-[600px] ">
                  <div className="transition-all duration-500 overflow-hidden">
                    <div className="opacity-100 max-h-screen transition-opacity duration-500">
                      <div className=" h-[150px] items-start ">
                        <div className={`w-full fixed left-0 top-[70px] p-6 z-50 transition-all duration-500 ${scroll > 5 ? 'bg-[#141414]' : ''}`}>
                          <div className="max-w-[1450px] px-9 mx-auto flex items-center gap-6">
                            <p className="text-4xl font-bold text-white">Tv Shows</p>
                            <div className='flex relative'>
                              <select className='w-[70px] h-[28px] sm:w-[110px] pl-1 bg-[#000] text-white font-semibold outline-none border-[#fff] border-[1px]'>
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
                      <p
                        className='text-white text-sm my-4 font-semibold transition-all duration-500 ease-in-out opacity-100 max-h-[100px]'
                      >{randomImage.overview}</p>
                      <div className="flex flex-wrap gap-3 pt-2">
                        <button className='w-[120px] h-[42px] rounded-md text-lg font-semibold bg-white transition-all duration-200 hover:bg-[#ddd] text-black flex justify-center gap-1 items-center'><IoPlaySharp className='text-3xl' /> Play</button>
                        <button onClick={handleShowMoreInfo} className="w-[150px] outline-none h-[45px] bg-[#888888a1] hover:bg-[#88888866] text-white font-semibold text-lg rounded-md flex justify-center gap-1 items-center">
                          <IoIosInformationCircleOutline className='text-3xl' /> More Info
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {showMoreInfo && <MoreInfo setShowMoreInfo={setShowMoreInfo} image={`https://image.tmdb.org/t/p/original` + randomImage.backdrop_path} />}
              </div>
            </div>
          ) : (<Loading/> )
        }
      </div>
      <div className='w-full  bg-[#141414] '>
        <div className='max-w-[1600px] mx-auto overflow-hidden '>
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
          <div className={`relative min-h-[150px] flex items-center  transition-all duration-500 ${isSwipedRight ? 'pl-0' : 'pl-10'} `}>
            <Swiper
              className='h-[245px]'
              cssMode={true}
              navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
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
                            <button className="w-[30px] h-[30px] rounded-full text-lg font-semibold bg-white transition-all duration-200 hover:bg-[#ddd] text-black flex justify-center gap-1 items-center">
                              <IoPlaySharp className="text-xl" />
                            </button>
                            <button className="w-[30px] h-[30px]  rounded-full flex justify-center items-center transition-all duration-200 hover:bg-[#99999946] text-[#f1f1f1] text-xl border-2 border-[#999] bg-[#222]">
                              <BsPlusLg />
                            </button>
                            <button className="w-[30px] h-[30px]  rounded-full flex justify-center items-center transition-all duration-200 hover:bg-[#99999946] text-[#f1f1f1] text-xl border-2 border-[#999] bg-[#222]">
                              <AiOutlineLike />
                            </button>
                          </div>
                          <button className="w-[30px] h-[30px]  rounded-full flex justify-center items-center transition-all duration-200 hover:bg-[#99999946] text-[#f1f1f1] text-xl border-2 border-[#999] bg-[#222]">
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
                          <p className="text-[#999]">2024</p>
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
                <div className="custom-prev flex items-center justify-center h-[131px] w-[65px]  bg-gradient-to-r from-[#000000c2] hover:from-[#000000e5] to-transparent text-white cursor-pointer transition-all duration-150">
                  <GoChevronLeft className='text-4xl' />
                </div>
              </div>
              <div onClick={swipeRight} className="w-[70px] flex justify-center items-center transform -translate-y-1/2 absolute top-1/2 -right-1 z-20">
                <div className="custom-next flex items-center justify-center h-[131px] w-[65px]  bg-gradient-to-l from-[#000000c2] hover:from-[#000000e5] to-transparent text-white cursor-pointer transition-all duration-150">
                  <GoChevronRight className='text-4xl' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div div className='block xs:hidden w-[90%] mx-auto' >
        <div className='w-full pt-4'>
          <div
            className="absolute -z-10 inset-0 pointer-events-none bg-[#141414] "
          ></div>
          {randomImage ?
            <img className='object-cover min-h-[440px] w-full h-[490px] rounded-xl' src={`https://image.tmdb.org/t/p/original` + randomImage.backdrop_path}
              alt="" /> : ''
          }
        </div>
      </div >
      <div className='block xs:hidden w-full relative'>
        <div
          className="h-[240px] absolute -z-10 inset-0 pointer-events-none bg-gradient-to-t from-black to-[#141414] "
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
    </main>
  )
}
export default TvShows