import { IoIosInformationCircleOutline } from "react-icons/io"
import { DATA, TOPMOVIES, TOPTV, TV } from "../../../context/DataContext"
import { IoPlaySharp } from "react-icons/io5"
import { useContext, useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Keyboard, Navigation } from 'swiper/modules'
import MoreInfo from "./MoreInfo"
import { RiLayoutGridFill } from "react-icons/ri"
import { RxTextAlignLeft } from "react-icons/rx"
import Loading from "./Loading"
import Carousel from "./Carousel"

function TvShows({ header = "Tv Shows", type = "tvshows" }) {
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
  const [isSwipedRight2, setIsSwipedRight2] = useState(false);
  const [isSwipedRight3, setIsSwipedRight3] = useState(false);
  const swipeRight = () => {
    setIsSwipedRight(true);
  }
  const swipeRight2 = () => {
    setIsSwipedRight2(true);
  }
  const swipeRight3 = () => {
    setIsSwipedRight3(true);
  }
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredCard2, setHoveredCard2] = useState(null);
  const [hoveredCard3, setHoveredCard3] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredCard(id);
  };
  const handleMouseEnter2 = (id) => {
    setHoveredCard2(id);
  };
  const handleMouseEnter3 = (id) => {
    setHoveredCard3(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };
  const handleMouseLeave2 = () => {
    setHoveredCard2(null);
  };
  const handleMouseLeave3 = () => {
    setHoveredCard3(null);
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
    console.log({ source })
    const selectedItem = sources[source]?.find((item) => item.id === itemId);
    if (selectedItem) {
      setSelectedItem(selectedItem);
      setModal(true)
    }
  }

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
                            <p className="text-4xl font-bold text-white">{header}</p>
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
                {modal && selectedItem && (
                  <MoreInfo
                    setModal={setModal}
                    image={`https://image.tmdb.org/t/p/original${selectedItem.backdrop_path}`}
                    year={selectedItem.release_date?.slice(0, 4) || selectedItem.first_air_date?.slice(0, 4)}
                    overview={selectedItem.overview}
                  />
                )}
              </div>
            </div>
          ) : (<Loading />)
        }
      </div>
      <div className='w-full  bg-[#141414] '>
        <Carousel
          title={type === "movies" ? "Action Movies" : "TV Dramas"}
          items={type === "movies" ? topM : type == "tvshows" ? topTv : []}
          genreId={18}
          type={type}
          isSwipedRight={isSwipedRight}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          handleSlideMoreInfo={handleSlideMoreInfo}
          hoveredCard={hoveredCard}
          customClass=""
          swipeRight={swipeRight}
        />
        <Carousel
          title={type === "movies" ? "Comedy Movies" : "Fantasy TV Shows"}
          items={type === "movies" ? topM : type == "tvshows" ? topTv : []}
          type={type}
          genreId={type === "movies" ? 14 : 35}
          isSwipedRight={isSwipedRight2}
          handleMouseEnter={handleMouseEnter2}
          handleMouseLeave={handleMouseLeave2}
          handleSlideMoreInfo={handleSlideMoreInfo}
          hoveredCard={hoveredCard2}
          customClass="2"
          swipeRight={swipeRight2}
        />
        <Carousel
          title={type === "movies" ? "Thriller Movies" : "Adventure TV Shows"}
          items={type === "movies" ? topM : type == "tvshows" ? topTv : []}
          genreId={type === "movies" ? 80 : 10765}
          type={type}
          isSwipedRight={isSwipedRight3}
          handleMouseEnter={handleMouseEnter3}
          handleMouseLeave={handleMouseLeave3}
          handleSlideMoreInfo={handleSlideMoreInfo}
          hoveredCard={hoveredCard3}
          customClass="3"
          swipeRight={swipeRight3}
        />
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