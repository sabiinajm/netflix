import { IoIosInformationCircleOutline } from "react-icons/io"
import { DATA, TOPMOVIES, TOPTV, TV } from "../../../context/DataContext"
import { IoPlaySharp } from "react-icons/io5"
import { useContext, useEffect, useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Keyboard, Navigation } from 'swiper/modules'
import ColorThief from 'colorthief';
import MoreInfo from "./MoreInfo"

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
  return (
    <main>
      <div className="h-[600px] w-full hidden xs:block bg-[#141414]">
        {
          randomImage ? (
            <div>
              <img
                className="object-cover h-[600px] w-full bg-black"
                src={`https://image.tmdb.org/t/p/original` + randomImage.backdrop_path}
                alt="Preview"
              />
              <div className='h-[600px] w-full  absolute top-0 bg-gradient-to-bl from-transparent to-[#141414ae]'></div>
              <div className='max-w-[1450px] px-9 mx-auto '>
                <div className="absolute top-[100px] max-w-[600px] ">
                  <div className="transition-all duration-500 overflow-hidden">
                    <div className="opacity-100 max-h-screen transition-opacity duration-500">
                      <div className=" h-[150px] items-start">
                        <div className="w-full flex items-center gap-6">
                          <p className="text-4xl font-bold text-white">Tv Shows</p>
                          <div className='flex relative'>
                            <select className='w-[70px] h-[28px] sm:w-[110px] pl-1 bg-[#000] text-white font-semibold outline-none border-[#fff] border-[1px]'>
                              <option value="genres">Genres</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <p
                        className='text-white text-sm my-4 font-semibold transition-all duration-500 ease-in-out opacity-100 max-h-[100px]'
                      >{randomImage.overview}</p>
                      <div className="flex flex-wrap gap-3 pt-2">
                        <button className='w-[120px] h-[42px] rounded-md text-lg font-semibold bg-white transition-all duration-200 hover:bg-[#ddd] text-black flex justify-center gap-1 items-center'><IoPlaySharp className='text-3xl' /> Play</button>
                        <button onClick={handleShowMoreInfo}className="w-[150px] outline-none h-[45px] bg-[#888888a1] hover:bg-[#88888866] text-white font-semibold text-lg rounded-md flex justify-center gap-1 items-center">
                          <IoIosInformationCircleOutline className='text-3xl' /> More Info
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {showMoreInfo && <MoreInfo setShowMoreInfo={setShowMoreInfo} i image={`https://image.tmdb.org/t/p/original` + randomImage.backdrop_path} />}
                <div className='bg-[#14141488] w-[110px] h-[40px] flex pl-4 text-xl items-center bottom-[100px] absolute right-0 text-white border-l-[3px] border-white'>
                  <p>+18</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex gap-4 m-8 rounded absolute top-28 animate-pulse h-40 items-end">
              <div className="flex flex-col gap-4">
                <div className="h-6 w-32 rounded-t bg-[#313131]"></div>
                <div className="h-28 w-60 sm:w-64  rounded-t bg-[#202020]"></div>
              </div>
              <div className="h-28 w-60 sm:w-64 rounded-t bg-[#202020]"></div>
              <div className="h-28 w-60 sm:w-64 rounded-t bg-[#202020]"></div>
            </div>
          )
        }
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