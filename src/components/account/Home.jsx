import React, { useContext, useEffect, useRef, useState } from 'react'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import { Swiper, SwiperSlide } from 'swiper/react'
import breakingB from '../../assets/imgs/breakingb.webp'
import breakingBLogo from '../../assets/imgs/breakingblogo.webp'
import moneyH from '../../assets/imgs/moneyH.jpg'
import { Keyboard, Navigation } from 'swiper/modules'
import ColorThief from 'colorthief';

import { DATA, TV } from '../../context/DataContext'


function Home() {
  const { data } = useContext(DATA)
  const { tv } = useContext(TV)
  const [dominantColor, setDominantColor] = useState('');
  const imgRef = useRef();

  useEffect(() => {
    if (imgRef.current) {
      const colorThief = new ColorThief();

      imgRef.current.onload = () => {
        const color = colorThief.getColor(imgRef.current); // [R, G, B]
        setDominantColor(`rgba(${color[0]}, ${color[1]}, ${color[2]}, 1)`);
      };
    }
  }, []);
  return (
    <>
      <main>
        <div className='hidden xs:block '>
          <div className='absolute top-0 h-[730px] w-full'>
            <img className="object-cover h-full w-full" src={breakingB} alt="" />
            <div className='h-[880px] w-full  absolute top-0 bg-gradient-to-bl from-transparent to-[#141414ae]'></div>
            <div className='max-w-[1450px] px-6 mx-auto '>
              <div className='absolute top-[180px] max-w-[400px] max-h-[230px]'>
                <div>
                  <img className='object-cover' src={breakingBLogo} alt="" />
                  <p className='text-white text-sm my-4 font-semibold'>Bryan Cranston scored four Emmys for his portrayal of a father who sells meth to support his family in what Forbes calls the "Best. Show. Ever."</p>
                  <div className='flex flex-wrap gap-3'>
                    <button className='w-[110px] outline-none h-[45px] bg-white hover:bg-[#ddd] font-semibold text-lg rounded-md'>Play</button>
                    <button className='w-[150px] outline-none h-[45px] bg-[#888888a1] hover:bg-[#88888866] text-white font-semibold text-lg rounded-md'>More Info</button>
                  </div>
                </div>

              </div>
              <div className='bg-[#14141488] w-[110px] h-[40px] flex pl-4 text-xl items-center bottom-[380px] absolute right-0 text-white border-l-[3px] border-white'>
                <p>+18</p>
              </div>
            </div>
          </div>
          <div className='h-[670px] flex items-end'>
            <div className='w-full overflow-hidden z-20 bg-gradient-to-b from-transparent to-[#141414]'>
              <div className="max-w-[1600px] mx-auto px-4">
                <div className="max-w-[1450px] flex flex-col justify-end mx-auto px-4">
                  <div className="text-white text-xl font-semibold ">
                    <div className='flex items-center group'>
                      <h3>Critically Acclaimed TV Dramas</h3>
                      <span
                        className="w-0 font-semibold text-cyan-500 translate-x-0 group-hover:translate-x-2 whitespace-nowrap opacity-0 transition-all delay-300 duration-200 group-hover:opacity-100 group-hover:w-[100px] ml-2 flex items-center"
                      >
                        Explore All
                      </span>
                    </div>

                  </div>
                </div>
                <div className="relative min-h-[150px] flex items-center">
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
                      <SwiperSlide key={index} className='swiper-slide-trend2 cursor-pointer'>
                        <div className='transition-all duration-500'>
                          <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="movie" className='object-fill rounded-sm h-[130px] w-[230px]' />
                        </div>
                      </SwiperSlide>
                    )
                    }
                  </Swiper>
                  <div>
                    <div className="flex justify-center items-center transform -translate-y-1/2 absolute top-1/2 -left-1 z-20">
                      <div className="custom-prev2 flex items-center justify-center h-[130px] w-[40px]  bg-[#00000061] text-white rounded-md hover:bg-[#0000008d] cursor-pointer transition-all duration-150">
                        <GoChevronLeft className='text-4xl' />
                      </div>
                    </div>
                    <div className="w-[55px] flex justify-center items-center transform -translate-y-1/2 absolute top-1/2 -right-1 z-20">
                      <div className="custom-next2 flex items-center justify-center h-[130px] w-[48px] bg-[#00000061] text-white rounded-md hover:bg-[#0000008d] cursor-pointer transition-all duration-150">
                        <GoChevronRight className='text-4xl' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full  bg-[#141414] '>
            <div className="max-w-[1600px] mx-auto px-4">
              <div className="max-w-[1450px] flex flex-col justify-end mx-auto px-4">
                <div className="text-white text-xl font-semibold ">
                  <div className='flex items-center group'>
                    <h3>Critically Acclaimed TV Dramas</h3>
                    <span
                      className="w-0 font-semibold text-cyan-500 translate-x-0 group-hover:translate-x-2 whitespace-nowrap opacity-0 transition-all delay-300 duration-200 group-hover:opacity-100 group-hover:w-[100px] ml-2 flex items-center"
                    >
                      Explore All
                    </span>
                  </div>

                </div>
              </div>
              <div className="relative min-h-[200px] flex items-center">
                <Swiper
                  cssMode={true}
                  navigation={{
                    nextEl: '.custom-next2',
                    prevEl: '.custom-prev2',
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
                  <div className="flex justify-center items-center transform -translate-y-1/2 absolute top-1/2 -left-1 z-20">
                    <div className="custom-prev2 flex items-center justify-center h-[130px] w-[40px]  bg-[#00000061] text-white rounded-md hover:bg-[#0000008d] cursor-pointer transition-all duration-150">
                      <GoChevronLeft className='text-4xl' />
                    </div>
                  </div>
                  <div className="w-[55px] flex justify-center items-center transform -translate-y-1/2 absolute top-1/2 -right-1 z-20">
                    <div className="custom-next2 flex items-center justify-center h-[130px] w-[48px] bg-[#00000061] text-white rounded-md hover:bg-[#0000008d] cursor-pointer transition-all duration-150">
                      <GoChevronRight className='text-4xl' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className='block xs:hidden w-[90%] mx-auto'>
          <div className='w-full pt-4'>
            <div
              className="absolute -z-10 inset-0 pointer-events-none"
              style={{ backgroundColor: dominantColor }}
            ></div>

            <img ref={imgRef} className='object-cover min-h-[440px] w-full h-[490px] rounded-xl' src={moneyH} alt="" />
          </div>
        </div>
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
        </div>
      </main >
    </>

  )
}

export default Home