import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import homeBg from '../../assets/imgs/home-bg.jpg'
import movie1 from '../../assets/imgs/movie1.webp'
import logo from '../../assets/imgs/logo.png'
import { HiLanguage } from 'react-icons/hi2';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';

function Main() {
  return (
    <>
      <header>
        <nav className='max-w-[1150px] mx-auto py-2 px-6 flex flex-wrap  justify-between items-center'>
          <div className='w-[130px] lg:w-[180px]'>
            <img src={logo} alt="Netflix logo" />
          </div>
          <div className='w-[130px] sm:w-[240px] flex justify-between'>
            <div className='flex relative'>
              <HiLanguage className='text-white absolute top-2 left-2' />
              <select className='w-[40px] sm:w-[140px] rounded-[.3rem] pl-6 bg-[#191919b2] text-white outline-none border-[#dddddd4c] border-[1px]'>
                <option value="eng">English</option>
                <option value="ru">Russian</option>
                <option value="aze">Azerbaijani</option>
              </select>
            </div>
            <button className='bg-[#ff0f0f] text-white w-[80px] h-[32px] rounded-[.3rem] hover:bg-[#c11119] transition-all duration-300'>Sign In</button>
          </div>
        </nav>
      </header>
      <main>
        <div className='fixed top-0 -z-10 w-full h-full'>
          <img src={homeBg} alt="background" className='w-full h-full object-cover brightness-40' />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70"></div>
        </div>
        <div className=' min-h-[450px] lg:min-h-[450px] flex flex-col px-4 max-w-[500px] lg:max-w-[900px] mx-auto justify-center items-center text-center'>
          <div className='max-w-[400px] md:max-w-[600px] font-bold'>
            <h1 className='text-white text-4xl md:text-5xl lg:text-6xl'>Unlimited movies, TV shows, and more</h1>
          </div>
          <h3 className='text-[#fffc] lg:text-white  p-2 md:text-xl md:p-5 md:font-semibold'>Starts at EUR 7.99. Cancel anytime.</h3>
          <p className='text-[#fffc] lg:text-white  p-2'>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className='flex flex-col items-center w-full xs:flex-row xs:justify-evenly xs:max-w-[600px]'>
            <div className="relative w-[90%] xs:w-[60%] my-2">
              <input type="text" placeholder="Email address"
                className="peer h-[45px] lg:h-[50px] pl-3 rounded-[.3rem] bg-[#191919b2] text-white outline-none border-[#dddddd4c] border-[1px] w-full 
                        placeholder:text-transparent  focus:pt-6 focus:pb-2"/>
              <label
                className="absolute top-0 left-0 p-3 h-full text-white text-sm truncate pointer-events-none transition ease-in-out duration-100 
                        origin-[0_0] peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-400
                        peer-[:not(:placeholder-shown)]:scale-90text-[#dddddd4c]">Email address</label>
            </div>
            <button className='bg-[#ff0f0f] rounded-[.3rem] w-[120px] lg:h-[50px] lg:w-[220px] lg:text-2xl lg:font-semibold md:w-[140px] h-[45px] my-2 text-white hover:bg-[#c11119] transition-all duration-300 flex justify-center items-center'>Get Started <GoChevronRight className='text-xl md:ml-4 md:text-3xl' /></button>
          </div>
        </div>
        <div className="curve-container">
          <div className="gradient-devider"></div>
        </div>
        <div className='bg-black h-screen text-[#0000ff0c]'>

          <div className='max-w-[1100px] mx-auto px-6'>
            <h1 className='text-2xl text-white font-semibold pb-3'>Trending Now</h1>
            <select className='w-full md:w-[320px] h-[40px] rounded-[.3rem] pl-2 bg-[#191919b2] text-white outline-none border-[#dddddd4c] border-[1px]'>
              <option value="eng">Movies - English</option>
              <option value="ru">Movies - Other languages</option>
              <option value="aze">Tv Shows - English</option>
              <option value="ru">Tv Shows - Other languages</option>
            </select>
            <div className="my-8 relative px-9">
              <Swiper
                cssMode={true}
                navigation={{
                  nextEl: '.custom-next',
                  prevEl: '.custom-prev',
                }}
                mousewheel={true}
                keyboard={true}
                slidesPerView={1}
                breakpoints={{
                  400: { slidesPerView: 2 },
                  540: { slidesPerView: 3 },
                  660: { slidesPerView: 4 },
                  900: { slidesPerView: 5 },
                  1023: { slidesPerView: 4 },
                }}
                modules={[Navigation, Mousewheel, Keyboard]}
              >
                <SwiperSlide>
                  <div className=' h-[200px] w-[140px] lg:h-[300px] lg:w-[260px] flex items-center justify-center hover:scale-110 transition-all duration-500'>
                    <div className='h-[160px] w-[140px] lg:h-[260px] lg:w-[240px] relative  flex justify-center items-center'>
                      <img src={movie1} alt="movie" className='rounded-md w-[110px] lg:w-[170px] h-full lg:h-[260px] object-cover' />
                      <h1 className='text-6xl text-black font-bold shadow-text-white absolute bottom-11 left-1 lg:text-8xl '>1</h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=' h-[200px] w-[140px] lg:h-[300px] lg:w-[260px] flex items-center justify-center hover:scale-110 transition-all duration-500'>
                    <div className='h-[160px] w-[140px] lg:h-[260px] lg:w-[240px] relative  flex justify-center items-center'>
                      <img src={movie1} alt="movie" className='rounded-md w-[110px] lg:w-[170px] h-full lg:h-[260px] object-cover' />
                      <h1 className='text-6xl text-black font-bold shadow-text-white absolute bottom-11 left-1 lg:text-8xl '>1</h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=' h-[200px] w-[140px] lg:h-[300px] lg:w-[260px] flex items-center justify-center hover:scale-110 transition-all duration-500'>
                    <div className='h-[160px] w-[140px] lg:h-[260px] lg:w-[240px] relative  flex justify-center items-center'>
                      <img src={movie1} alt="movie" className='rounded-md w-[110px] lg:w-[170px] h-full lg:h-[260px] object-cover' />
                      <h1 className='text-6xl text-black font-bold shadow-text-white absolute bottom-11 left-1 lg:text-8xl '>1</h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=' h-[200px] w-[140px] lg:h-[300px] lg:w-[260px] flex items-center justify-center hover:scale-110 transition-all duration-500'>
                    <div className='h-[160px] w-[140px] lg:h-[260px] lg:w-[240px] relative  flex justify-center items-center'>
                      <img src={movie1} alt="movie" className='rounded-md w-[110px] lg:w-[170px] h-full lg:h-[260px] object-cover' />
                      <h1 className='text-6xl text-black font-bold shadow-text-white absolute bottom-11 left-1 lg:text-8xl '>1</h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=' h-[200px] w-[140px] lg:h-[300px] lg:w-[260px] flex items-center justify-center hover:scale-110 transition-all duration-500'>
                    <div className='h-[160px] w-[140px] lg:h-[260px] lg:w-[240px] relative  flex justify-center items-center'>
                      <img src={movie1} alt="movie" className='rounded-md w-[110px] lg:w-[170px] h-full lg:h-[260px] object-cover' />
                      <h1 className='text-6xl text-black font-bold shadow-text-white absolute bottom-11 left-1 lg:text-8xl '>1</h1>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div>
                <div className='bg-black w-[40px] h-[180px] flex justify-center items-center transform -translate-y-1/2 absolute top-1/2 left-0 z-50 '>
                  <div className="custom-prev flex items-center justify-center h-[120px] w-[28px]  bg-[#1f1f1f] text-white rounded-lg  hover:bg-[#2b2b2b] cursor-pointer transition-all duration-150">
                    <GoChevronLeft />
                  </div>
                </div>
                <div className='bg-black w-[40px] h-[180px] flex justify-center items-center transform -translate-y-1/2 absolute top-1/2 -right-5 z-50 '>
                  <div className="custom-next flex items-center  justify-center  h-[120px] w-[28px]   bg-[#1f1f1f] text-white rounded-lg hover:bg-[#2b2b2b] cursor-pointer transition-all duration-150">
                    <GoChevronRight />
                  </div>
                </div>
              </div>

            </div>
            <div>
              <h1 className='text-2xl text-white font-semibold pb-3'>More Reasons to Join</h1>
            </div>
          </div>
        </div>
      </main >
    </>
  )
}
export default Main