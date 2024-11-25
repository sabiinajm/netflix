import React from 'react'
import logo from '../../assets/imgs/logo.png'
import { FaRegBell } from 'react-icons/fa'
import { IoSearchSharp } from 'react-icons/io5'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import { Swiper, SwiperSlide } from 'swiper/react'
import movieimg from '../../assets/imgs/movieimg.webp'
import logoname from '../../assets/imgs/logoname.webp'
import { Keyboard, Navigation } from 'swiper/modules'

function Home() {
  return (
    <>
      <header className='h-[60px] sticky z-10 top-0 w-full bg-gradient-to-b from-[#060606] to-transparent'>
        <div className='max-w-[1450px] mx-auto px-4 pt-2 flex justify-between items-center'>
          <div className='flex gap-3'>
            <div className='max-w-[130px]'>
              <img src={logo} alt="logo" />
            </div>
            <ul className='flex justify-center items-center text-white lg:hidden'>
              Browse
            </ul>
            <ul className=' hidden lg:flex justify-center items-center text-white gap-4'>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Tv Shows</a>
              </li>
              <li>
                <a>Movies</a>
              </li>
              <li>
                <a>Latest</a>
              </li>
              <li>
                <a>My List</a>
              </li>
              <li>
                <a>Browse By Language</a>
              </li>
            </ul>
          </div>
          <div className='flex text-white text-2xl gap-3'>
            <IoSearchSharp />
            <FaRegBell />
          </div>
        </div>
      </header>
      <main>
        <div className='absolute top-0 h-[880px] w-full'>
          <img className='object-cover h-[880px] w-full  ' src={movieimg} alt="" />
          <div className='h-[880px] w-full  absolute top-0 bg-gradient-to-bl from-transparent to-[#141414ae]'></div>
          <div className='max-w-[1450px] px-4 mx-auto '>
            <div className='absolute top-[230px] max-w-[500px] max-h-[230px]'>
              <div>
                <img className='object-cover' src={logoname} alt="" />
                <p className='text-white my-4 text-lg font-semibold'>A veteran cop relentlessly hunts a gang of audacious thieves who use modified TMAX bikes to outrun law enforcement around Paris' maze-like streets.</p>
                <div className='flex flex-wrap gap-3'>
                  <button className='w-[110px] outline-none h-[45px] bg-white hover:bg-[#ddd] font-semibold text-lg rounded-md'>Play</button>
                  <button className='w-[150px] outline-none h-[45px] bg-[#888888a1] hover:bg-[#88888866] text-white font-semibold text-lg rounded-md'>More Info</button>
                </div>
              </div>

            </div>
            <div className='bg-[#14141488] w-[110px] h-[40px] flex pl-4 text-xl items-center bottom-[300px] absolute right-0 text-white border-l-[3px] border-white'>
              <p>+16</p>
            </div>
          </div>
        </div>
        <div className='h-[820px] flex items-end'>
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
                  <SwiperSlide className='swiper-slide-trend2 cursor-pointer'>
                    <div className='transition-all duration-500'>
                      <img src="https://occ-0-7292-3466.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdno7nn0b7fwxbMnzvHgRPjxkMjr34zLX2PYX3fE62v7dJon9i0tO4uSckevh7tdcSqDlEoVLiolFSbv4zv_zbEiRjqjY6jNDDKE4uFgMjjFzth9-N7wdBC_WF2-tDAxuw6-.jpg?r=238" alt="movie" className='object-fill rounded-md h-[130px] w-[230px]' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='swiper-slide-trend2 cursor-pointer'>
                    <div className='transition-all duration-500'>
                      <img src="https://occ-0-7292-3466.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdno7nn0b7fwxbMnzvHgRPjxkMjr34zLX2PYX3fE62v7dJon9i0tO4uSckevh7tdcSqDlEoVLiolFSbv4zv_zbEiRjqjY6jNDDKE4uFgMjjFzth9-N7wdBC_WF2-tDAxuw6-.jpg?r=238" alt="movie" className='object-fill rounded-md h-[130px] w-[230px]' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='swiper-slide-trend2 cursor-pointer'>
                    <div className='transition-all duration-500'>
                      <img src="https://occ-0-7292-3466.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdno7nn0b7fwxbMnzvHgRPjxkMjr34zLX2PYX3fE62v7dJon9i0tO4uSckevh7tdcSqDlEoVLiolFSbv4zv_zbEiRjqjY6jNDDKE4uFgMjjFzth9-N7wdBC_WF2-tDAxuw6-.jpg?r=238" alt="movie" className='object-fill rounded-md h-[130px] w-[230px]' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='swiper-slide-trend2 cursor-pointer'>
                    <div className='transition-all duration-500'>
                      <img src="https://occ-0-7292-3466.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdno7nn0b7fwxbMnzvHgRPjxkMjr34zLX2PYX3fE62v7dJon9i0tO4uSckevh7tdcSqDlEoVLiolFSbv4zv_zbEiRjqjY6jNDDKE4uFgMjjFzth9-N7wdBC_WF2-tDAxuw6-.jpg?r=238" alt="movie" className='object-fill rounded-md h-[130px] w-[230px]' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='swiper-slide-trend2 cursor-pointer'>
                    <div className='transition-all duration-500'>
                      <img src="https://occ-0-7292-3466.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdno7nn0b7fwxbMnzvHgRPjxkMjr34zLX2PYX3fE62v7dJon9i0tO4uSckevh7tdcSqDlEoVLiolFSbv4zv_zbEiRjqjY6jNDDKE4uFgMjjFzth9-N7wdBC_WF2-tDAxuw6-.jpg?r=238" alt="movie" className='object-fill rounded-md h-[130px] w-[230px]' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='swiper-slide-trend2 cursor-pointer'>
                    <div className='transition-all duration-500'>
                      <img src="https://occ-0-7292-3466.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdno7nn0b7fwxbMnzvHgRPjxkMjr34zLX2PYX3fE62v7dJon9i0tO4uSckevh7tdcSqDlEoVLiolFSbv4zv_zbEiRjqjY6jNDDKE4uFgMjjFzth9-N7wdBC_WF2-tDAxuw6-.jpg?r=238" alt="movie" className='object-fill rounded-md h-[130px] w-[230px]' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='swiper-slide-trend2 cursor-pointer'>
                    <div className='transition-all duration-500'>
                      <img src="https://occ-0-7292-3466.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdno7nn0b7fwxbMnzvHgRPjxkMjr34zLX2PYX3fE62v7dJon9i0tO4uSckevh7tdcSqDlEoVLiolFSbv4zv_zbEiRjqjY6jNDDKE4uFgMjjFzth9-N7wdBC_WF2-tDAxuw6-.jpg?r=238" alt="movie" className='object-fill rounded-md h-[130px] w-[230px]' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='swiper-slide-trend2 cursor-pointer'>
                    <div className='transition-all duration-500'>
                      <img src="https://occ-0-7292-3466.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdno7nn0b7fwxbMnzvHgRPjxkMjr34zLX2PYX3fE62v7dJon9i0tO4uSckevh7tdcSqDlEoVLiolFSbv4zv_zbEiRjqjY6jNDDKE4uFgMjjFzth9-N7wdBC_WF2-tDAxuw6-.jpg?r=238" alt="movie" className='object-fill rounded-md h-[130px] w-[230px]' />
                    </div>
                  </SwiperSlide>
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
        <div className='w-full overflow-hidden bg-[#141414] z-20 '>
          <div className="max-w-[1600px] mx-auto px-4 z-20">
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
                <SwiperSlide className='swiper-slide-trend2 cursor-pointer'>
                  <div className='transition-all duration-500'>
                    <img src="https://occ-0-7292-3466.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdno7nn0b7fwxbMnzvHgRPjxkMjr34zLX2PYX3fE62v7dJon9i0tO4uSckevh7tdcSqDlEoVLiolFSbv4zv_zbEiRjqjY6jNDDKE4uFgMjjFzth9-N7wdBC_WF2-tDAxuw6-.jpg?r=238" alt="movie" className='object-fill rounded-md h-[130px] w-[230px]' />
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide-trend2 cursor-pointer'>
                  <div className='transition-all duration-500'>
                    <img src="https://occ-0-7292-3466.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdno7nn0b7fwxbMnzvHgRPjxkMjr34zLX2PYX3fE62v7dJon9i0tO4uSckevh7tdcSqDlEoVLiolFSbv4zv_zbEiRjqjY6jNDDKE4uFgMjjFzth9-N7wdBC_WF2-tDAxuw6-.jpg?r=238" alt="movie" className='object-fill rounded-md h-[130px] w-[230px]' />
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide-trend2 cursor-pointer'>
                  <div className='transition-all duration-500'>
                    <img src="https://occ-0-7292-3466.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdno7nn0b7fwxbMnzvHgRPjxkMjr34zLX2PYX3fE62v7dJon9i0tO4uSckevh7tdcSqDlEoVLiolFSbv4zv_zbEiRjqjY6jNDDKE4uFgMjjFzth9-N7wdBC_WF2-tDAxuw6-.jpg?r=238" alt="movie" className='object-fill rounded-md h-[130px] w-[230px]' />
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide-trend2 cursor-pointer'>
                  <div className='transition-all duration-500'>
                    <img src="https://occ-0-7292-3466.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdno7nn0b7fwxbMnzvHgRPjxkMjr34zLX2PYX3fE62v7dJon9i0tO4uSckevh7tdcSqDlEoVLiolFSbv4zv_zbEiRjqjY6jNDDKE4uFgMjjFzth9-N7wdBC_WF2-tDAxuw6-.jpg?r=238" alt="movie" className='object-fill rounded-md h-[130px] w-[230px]' />
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide-trend2 cursor-pointer'>
                  <div className='transition-all duration-500'>
                    <img src="https://occ-0-7292-3466.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdno7nn0b7fwxbMnzvHgRPjxkMjr34zLX2PYX3fE62v7dJon9i0tO4uSckevh7tdcSqDlEoVLiolFSbv4zv_zbEiRjqjY6jNDDKE4uFgMjjFzth9-N7wdBC_WF2-tDAxuw6-.jpg?r=238" alt="movie" className='object-fill rounded-md h-[130px] w-[230px]' />
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide-trend2 cursor-pointer'>
                  <div className='transition-all duration-500'>
                    <img src="https://occ-0-7292-3466.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdno7nn0b7fwxbMnzvHgRPjxkMjr34zLX2PYX3fE62v7dJon9i0tO4uSckevh7tdcSqDlEoVLiolFSbv4zv_zbEiRjqjY6jNDDKE4uFgMjjFzth9-N7wdBC_WF2-tDAxuw6-.jpg?r=238" alt="movie" className='object-fill rounded-md h-[130px] w-[230px]' />
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide-trend2 cursor-pointer'>
                  <div className='transition-all duration-500'>
                    <img src="https://occ-0-7292-3466.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdno7nn0b7fwxbMnzvHgRPjxkMjr34zLX2PYX3fE62v7dJon9i0tO4uSckevh7tdcSqDlEoVLiolFSbv4zv_zbEiRjqjY6jNDDKE4uFgMjjFzth9-N7wdBC_WF2-tDAxuw6-.jpg?r=238" alt="movie" className='object-fill rounded-md h-[130px] w-[230px]' />
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide-trend2 cursor-pointer'>
                  <div className='transition-all duration-500'>
                    <img src="https://occ-0-7292-3466.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdno7nn0b7fwxbMnzvHgRPjxkMjr34zLX2PYX3fE62v7dJon9i0tO4uSckevh7tdcSqDlEoVLiolFSbv4zv_zbEiRjqjY6jNDDKE4uFgMjjFzth9-N7wdBC_WF2-tDAxuw6-.jpg?r=238" alt="movie" className='object-fill rounded-md h-[130px] w-[230px]' />
                  </div>
                </SwiperSlide>
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

      </main >
    </>

  )
}

export default Home