import homeBg from '../../assets/imgs/home-bg.jpg'
import movie1 from '../../assets/imgs/movie1.webp'
import show1 from '../../assets/imgs/show1.webp'
import show2 from '../../assets/imgs/show2.jpg'
import Mname from '../../assets/imgs/movieName.png'

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/effect-fade";
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay, Keyboard, EffectFade } from 'swiper/modules';


import { useEffect, useState } from 'react';

import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import { BsPlusLg } from 'react-icons/bs';
import { RiCloseLargeFill } from 'react-icons/ri';

import { Link } from 'react-router-dom';

function Main() {
  const [openIndex, setOpenIndex] = useState(null)
  const [openModel, setOpenModel] = useState(false)

  function toggleAccordion(index) {
    setOpenIndex(openIndex === index ? null : index)
  }

  useEffect(() => {
    document.body.style.overflow = openModel ? "hidden" : "auto"
  }, [openModel])


  const [bgImage, setBgImage] = useState(show1);

  function handleSlideChange(swiper) {
    const currentSlide = swiper.slides[swiper.activeIndex];
    const imgElement = currentSlide.querySelector("img");
    setBgImage(imgElement.src);
  };


  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleInput = (e) => {
    const value = e.target.value;
    setEmail(value);

  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) {
      setError("Email is required.")
      return
    }
    if (!emailRegex.test(email)) {
      setError("Invalid email format.")
      return;
    }
    setError("")
  };

  const isValid = !error && emailRegex.test(email);

  return (
    <main className='bg-[#0f0f0f] '>
      {/* Hero */}
      <div className='h-full w-full relative'>
        <div className='w-[96%] !h-[440px] mx-auto rounded-2xl pt-6 relative'>
          <Swiper
            spaceBetween={20}
            effect={'fade'}
            navigation={{
              nextEl: '.main-next',
              prevEl: '.main-prev',
            }}
            pagination={{
              clickable: true,
              type: "bullets",
            }}
            keyboard={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            onSlideChange={handleSlideChange}
            modules={[Keyboard, EffectFade, Navigation, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className='relative'>
                <img src={homeBg} alt="" className='object-cover object-top mx-auto w-[95%] h-[360px] lg:h-[470px] rounded-2xl border-l-2 border-t-2 border-white' />
                <div className='h-full w-[95%] absolute top-0 left-[2.5%] bg-gradient-to-b from-transparent to-[#000000ca] rounded-2xl'></div>
                <div className='w-full flex justify-center items-center'>
                  <div className='min-h-[150px] min-w-[180px]  xs:w-[350px] lg:w-[400px]  flex flex-col px-4 mx-auto text-center absolute bottom-6'>
                    <div className='font-bold'>
                      <h1 className='text-white text-xl xs:text-4xl xl:text-5xl lg:w-[500px] '>Unlimited movies, TV shows, and more</h1>
                    </div>
                    <h3 className='text-[#fffc] lg:text-white  p-2 md:text-lg md:p-5'>Starts at EUR 7.99. Cancel anytime.</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='relative'>
                <img src={show1} alt="" className='object-cover object-top mx-auto w-[95%] h-[360px] lg:h-[470px] rounded-2xl border-l-2 border-t-2 border-white' />
                <div className='h-full w-[95%] absolute top-0 left-[2.5%] bg-gradient-to-b from-transparent to-[#000000ca] rounded-2xl'></div>
                <div className='text-xs absolute bottom-0  text-white font-semibold flex gap-4 flex-col items-center w-full pb-8'>
                  <img className='w-[90px] h-[20px]' src="https://occ-0-7292-3467.1.nflxso.net/dnm/api/v6/S4oi7EPZbv2UEPaukW54OORa0S8/AAAABbckRek5GWN0qQdhLaxG6diy5-ukGQt4JnzaE_TWBbLm3m6Jdi_0FkI98D2-70dXtSXyrpZ3zOvSDVUA0vZcvIgZQjj478FZ.webp?r=9d7" alt="" />
                  <img className='w-[170px] h-[25px]' src="https://occ-0-7292-3467.1.nflxso.net/dnm/api/v6/S4oi7EPZbv2UEPaukW54OORa0S8/AAAABaCuXIY1JChR69J3kc2j9zSl-pt8C1bF4B8-Hx1nJrYtCBtlqQgxFWspu87aSyDTd20c8tpmLZF1LY7o0g4aH_B8x5PwGRVUIA.webp?r=ea7" alt="" />
                  <ul className='flex gap-6 list-disc'>
                    <li>2024</li>
                    <li>16+</li>
                    <li>Show</li>
                    <li>Sports</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='relative'>
                <img src={show2} alt="" className='object-cover object-top mx-auto w-[95%] h-[360px] lg:h-[470px] rounded-2xl border-l-2 border-t-2 border-white' />
                <div className='h-full w-[95%] absolute top-0 left-[2.5%] bg-gradient-to-b from-transparent to-[#000000ca] rounded-2xl'></div>
                <div className='text-xs absolute bottom-0  text-white font-semibold flex gap-4 flex-col items-center w-full pb-8'>
                  <img className='w-[190px] h-[55px]' src={Mname} alt="" />
                  <ul className='flex gap-6 list-disc'>
                    <li>2024</li>
                    <li>16+</li>
                    <li>Show</li>
                    <li>Sports</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div>
            <div className=" w-[40px] flex justify-center items-center transform -translate-y-1/2 lg:translate-y-4 lg:w-[180px] absolute top-1/2 left-1 lg:-left-4 z-20">
              <div className="main-prev flex items-center justify-center h-[90px] w-[30px]  bg-[#444] text-white rounded-full hover:bg-[#2a2a2a] border-[1px] cursor-pointer transition-all duration-150">
                <GoChevronLeft />
              </div>
            </div>
            <div className=" w-[40px] flex justify-center items-center transform -translate-y-1/2 lg:translate-y-4 lg:w-[180px] absolute top-1/2 right-1 lg:-right-4 z-20">
              <div className="main-next flex items-center justify-center h-[90px] w-[30px] bg-[#444] text-white rounded-full hover:bg-[#2a2a2a] border-[1px]  cursor-pointer transition-all duration-150">
                <GoChevronRight />
              </div>
            </div>
          </div>
        </div>
        <img src={bgImage} alt="bgBlur" className='blur-xl w-full absolute -top-4 opacity-25 transition-all duration-200 object-cover h-[1100px]' />
      </div>
      <div alt="bg" className='bg-[#0f0f0f] -z-10  w-full absolute top-0 h-[1100px]' />
      <div className='flex flex-col min-h-[200px] pb-6 lg:min-h-[240px] px-4 max-w-[500px] lg:max-w-[900px] mx-auto justify-end items-center text-center'>
        <p className='text-[#fffc] text-white  p-2'>Ready to watch? Enter your email to create or restart your membership.</p>
        <form onSubmit={handleSubmit} className='flex flex-col items-center w-full xs:flex-row xs:justify-evenly xs:max-w-[600px]'>
          <div className="relative w-[90%] xs:w-[60%] my-2">
            <input
              onChange={handleInput}
              value={email}
              type="text"
              placeholder="Email address"
              className={`${error && 'border-red-700'} rounded-full peer focus:outline-2 outline-offset-2 h-[50px] md:h-[60px] bg-[#191919b2] text-white border-[#dddddd4c] border-[1px] w-full 
                placeholder:text-transparent focus:pt-8 focus:pb-6 pl-4 py-2`}
            />
            <label
              className=" absolute top-1 left-0 p-3 pl-5 h-full text-white text-sm truncate pointer-events-none transition-all ease-in-out duration-100
        origin-[0_0] peer-focus:scale-90  peer-focus:-translate-y-4 peer-focus:text-gray-400 
        peer-[:not(:placeholder-shown)]:scale-90   peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:text-gray-400"
            >
              Email address
            </label>
          </div>
          {error && <p className='text-red-600 xs:hidden mb-1'>{error}</p>}
          <button
          onClick={handleSubmit}
            className='bg-[#ff0f0f] my-2 rounded-full z-30 w-[160px] h-[50px] md:h-[55px] lg:w-[220px] lg:text-2xl lg:font-semibold md:w-[140px] text-white hover:bg-[#c11119] transition-all duration-300'>
            {isValid ? (
              <Link to="/signup/registration" className="flex h-full justify-center items-center">
                Get Started <GoChevronRight className="text-xl md:ml-4 md:text-3xl" />
              </Link>
            ) : (
              <span className="flex h-full justify-center items-center">
                Get Started <GoChevronRight className="text-xl md:ml-4 md:text-3xl" />
              </span>
            )}
          </button>
        </form>
        {error && <p className='text-red-600 hidden xs:block'>{error}</p>}
      </div>
      <div className='bg-[#0f0f0f] text-[#0000ff0c]'>
        <div className='max-w-[1100px] mx-auto px-6 '>
          <h1 className='text-lg md:text-3xl text-[#ffffff99] font-bold pb-3'>Trending Now</h1>
          <div className="relative min-h-[200px] lg:min-h-[320px] flex items-center">
            <Swiper className='swiper-fade'
              cssMode={true}
              navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
              }}
              keyboard={true}
              modules={[Navigation, Keyboard]}
            >
              <SwiperSlide className='swiper-slide-trend cursor-pointer'>
                <div onClick={() => setOpenModel(true)} className='scale-[.94] hover:scale-[.98] transition-all duration-500'>
                  <img src={movie1} alt="movie" className='rounded-lg h-[190px] w-[130px] md:h-[240px] md:w-[170px] lg:h-[270px] lg:w-[220px]' />
                </div>
              </SwiperSlide>
              <SwiperSlide className='swiper-slide-trend cursor-pointer'>
                <div onClick={() => setOpenModel(true)} className='scale-[.94] hover:scale-[.98] transition-all duration-500'>
                  <img src={movie1} alt="movie" className='rounded-lg h-[190px] w-[130px] md:h-[240px] md:w-[170px] lg:h-[270px] lg:w-[220px]' />
                </div>
              </SwiperSlide>
              <SwiperSlide className='swiper-slide-trend cursor-pointer'>
                <div onClick={() => setOpenModel(true)} className='scale-[.94] hover:scale-[.98] transition-all duration-500'>
                  <img src={movie1} alt="movie" className='rounded-lg h-[190px] w-[130px] md:h-[240px] md:w-[170px] lg:h-[270px] lg:w-[220px]' />
                </div>
              </SwiperSlide>
              <SwiperSlide className='swiper-slide-trend cursor-pointer'>
                <div onClick={() => setOpenModel(true)} className='scale-[.94] hover:scale-[.98] transition-all duration-500'>
                  <img src={movie1} alt="movie" className='rounded-lg h-[190px] w-[130px] md:h-[240px] md:w-[170px] lg:h-[270px] lg:w-[220px]' />
                </div>
              </SwiperSlide>
              <SwiperSlide className='swiper-slide-trend cursor-pointer'>
                <div onClick={() => setOpenModel(true)} className='scale-[.94] hover:scale-[.98] transition-all duration-500'>
                  <img src={movie1} alt="movie" className='rounded-lg h-[190px] w-[130px] md:h-[240px] md:w-[170px] lg:h-[270px] lg:w-[220px]' />
                </div>
              </SwiperSlide>
              <SwiperSlide className='swiper-slide-trend cursor-pointer'>
                <div onClick={() => setOpenModel(true)} className='scale-[.94] hover:scale-[.98] transition-all duration-500'>
                  <img src={movie1} alt="movie" className='rounded-lg h-[190px] w-[130px] md:h-[240px] md:w-[170px] lg:h-[270px] lg:w-[220px]' />
                </div>
              </SwiperSlide>
              <SwiperSlide className='swiper-slide-trend cursor-pointer'>
                <div onClick={() => setOpenModel(true)} className='scale-[.94] hover:scale-[.98] transition-all duration-500'>
                  <img src={movie1} alt="movie" className='rounded-lg h-[190px] w-[130px] md:h-[240px] md:w-[170px] lg:h-[270px] lg:w-[220px]' />
                </div>
              </SwiperSlide>
              <SwiperSlide className='swiper-slide-trend cursor-pointer'>
                <div onClick={() => setOpenModel(true)} className='scale-[.94] hover:scale-[.98] transition-all duration-500'>
                  <img src={movie1} alt="movie" className='rounded-lg h-[190px] w-[130px] md:h-[240px] md:w-[170px] lg:h-[270px] lg:w-[220px]' />
                </div>
              </SwiperSlide>
            </Swiper>
            <div>
              <div className="h-[180px] w-[40px] flex justify-center items-center transform -translate-y-1/2 absolute top-1/2 -left-1 z-20">
                <div className="custom-prev flex items-center justify-center h-[60px] w-[20px]  bg-[#c1c1c188] text-white rounded-full hover:bg-[#c1c1c136] cursor-pointer transition-all duration-150">
                  <GoChevronLeft />
                </div>
              </div>
              <div className="h-[180px] w-[40px] flex justify-center items-center transform -translate-y-1/2 absolute top-1/2 -right-1 z-20">
                <div className="custom-next flex items-center justify-center h-[60px] w-[20px] bg-[#c1c1c188] text-white rounded-full hover:bg-[#c1c1c136] cursor-pointer transition-all duration-150">
                  <GoChevronRight />
                </div>
              </div>
            </div>

          </div>
          {openModel && (
            <div className="w-full h-full fixed top-0 left-0 bg-[#0005] z-[100]"
              onClick={() => setOpenModel(false)}>
              <div className="w-full h-full relative flex justify-center items-center">
                <div className="border-[1px] border-[#444] rounded-lg flex-col fixed z-30 max-w-[650px] w-full flex justify-center items-center">
                  <div className="relative w-full rounded-lg">
                    <img
                      className="object-cover rounded-t-lg min-h-[160px] max-h-[350px] w-full"
                      src="https://occ-0-7292-2774.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABUyQYz-ajhCi9HrswnnTR5STcMfrExUeihXlWxaqfmxhr7MoVX2loFarI7JXZjR_FHLy4wfUnDTfokCeVvf4iGnR7wg2QM5B4ESB.webp?r=985"
                      alt=""
                    />
                    <div className="absolute top-0 min-h-[160px] h-full w-full bg-gradient-to-b from-transparent z-20 to-[#161616]"></div>
                    <img
                      className="min-w-[170px] w-[50%] absolute bottom-0 z-20 p-2"
                      src="https://occ-0-7292-2774.1.nflxso.net/dnm/api/v6/S4oi7EPZbv2UEPaukW54OORa0S8/AAAABYKpip_lfUOhGieAWfBmXrNhJLdgEGbksbqTehyeyiFAvEhto4MtOiWMgf_cqU1rde4rLr6JTKft2qvZ_Ukwy9atvKjcsEQRjg.webp?r=7c6"
                      alt=""
                    />
                    <div
                      className="absolute top-5 right-5 rounded-full cursor-pointer flex items-center justify-center h-[35px] w-[35px]  z-30  hover:bg-[#ffffff46] transition-all duration-300"
                      onClick={() => setOpenModel(false)}
                    >
                      <RiCloseLargeFill className="text-white text-2xl" />
                    </div>
                  </div>
                  <div className="bg-[#141414] w-full rounded-b-lg">
                    <div className="text-[#ffffffb3] text-[.6rem] xs:text-[.8rem] w-[90%] mx-auto pt-2 flex gap-2 flex-wrap">
                      <p className="bg-[#414141] py-[3px] px-[6px] rounded-sm">2024</p>
                      <p className="bg-[#414141] py-[3px] px-[6px] rounded-sm">16+</p>
                      <p className="bg-[#414141] py-[3px] px-[6px] rounded-sm">Movie</p>
                      <p className="bg-[#414141] py-[3px] px-[6px] rounded-sm">Comedies</p>
                      <p className="bg-[#414141] py-[3px] px-[6px] rounded-sm">Romance</p>
                    </div>
                    <p className="text-white text-[.8rem] pt-8 pb-4 w-[90%] mx-auto">
                      On a quest to reconnect with the man of her dreams, Layla races across
                      New York City to find a ticket to a sold-out Pentatonix Christmas Eve
                      concert.
                    </p>
                    <div className="w-[90%] mx-auto">
                      <Link to={'/signup/registration'} className="bg-[#ff0f0f] mb-6 rounded-[.3rem] w-full xs:w-[150px] xs:mx-0 h-[42px] lg:w-[220px] lg:text-xl lg:font-semibold my-2 text-white hover:bg-[#c11119] transition-all duration-300 flex justify-center items-center">
                        Get Started <GoChevronRight className="text-xl md:ml-4 md:text-3xl" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* More Reasons To Join */}
          <div className='pt-8'>
            <h1 className='text-lg md:text-2xl text-white font-semibold py-5'>More Reasons to Join</h1>
            <div className='grid gap-3 md:grid-cols-2 lg:grid-cols-4'>
              <div className='text-white hover:scale-95 hover:rotate-2 transition-all duration-300 relative p-4 pb-24 lg:min-h-[250px] rounded-2xl  bg-gradient-to-br from-[#192145] to-[#200e19]'>
                <h1 className='text-xl font-semibold py-3'>Enjoy on your TV</h1>
                <h3 className='text-[#ffffffb3] leading-6 text-sm'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
                <svg className='absolute bottom-4 right-4' width="72" height="72" viewBox="0 0 72 72" fill="none"><g id="television-core-small"><path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M37.2 53.3992C37.2 52.7365 36.6628 52.1992 36 52.1992H34.8C34.1373 52.1992 33.6 52.7365 33.6 53.3992V56.2636C33.6 56.9129 33.0834 57.4433 32.4347 57.4739C30.3013 57.5744 28.1719 57.7834 26.0546 58.1011L19.444 59.0926C18.2692 59.2688 17.4 60.2782 17.4 61.4662V62.0992C17.4 62.4304 17.6686 62.6992 18 62.6992H52.8C53.1314 62.6992 53.4 62.4304 53.4 62.0992V61.4662C53.4 60.2782 52.5309 59.2688 51.3561 59.0926L44.7454 58.1011C42.6282 57.7834 40.4987 57.5744 38.3653 57.4739C37.7167 57.4433 37.2 56.9129 37.2 56.2636V53.3992Z" fill="url(#paint0_radial_5179_1308)"></path><path id="Vector_2" d="M18.6 60.7388C18.6 60.2306 18.9587 59.796 19.4602 59.711C22.0196 59.2775 29.7585 58.0508 35.4 58.0508C41.0415 58.0508 48.7804 59.2775 51.3398 59.711C51.8412 59.796 52.2 60.2306 52.2 60.7388C52.2 60.902 52.0575 61.0268 51.8967 61.0004C50.1219 60.707 40.9704 59.2409 35.4 59.2409C29.8295 59.2409 20.678 60.707 18.9033 61.0004C18.7425 61.0268 18.6 60.902 18.6 60.7388Z" fill="url(#paint1_radial_5179_1308)"></path><path id="Vector_3" d="M63 12H8.99995C8.00584 12 7.19995 12.8059 7.19995 13.8V51.6C7.19995 52.5941 8.00584 53.4 8.99995 53.4H63C63.9941 53.4 64.8 52.5941 64.8 51.6V13.8C64.8 12.8059 63.9941 12 63 12Z" fill="url(#paint2_linear_5179_1308)"></path><path id="Vector_4" d="M63 12H8.99995C8.00584 12 7.19995 12.8059 7.19995 13.8V51.6C7.19995 52.5941 8.00584 53.4 8.99995 53.4H63C63.9941 53.4 64.8 52.5941 64.8 51.6V13.8C64.8 12.8059 63.9941 12 63 12Z" fill="url(#paint3_radial_5179_1308)"></path><path id="Vector_5" fillRule="evenodd" clipRule="evenodd" d="M8.99995 12.6H63C63.663 12.6 64.2 13.1372 64.2 13.8V50.4H7.79995V13.8C7.79995 13.1372 8.33719 12.6 8.99995 12.6ZM7.19995 50.4V13.8C7.19995 12.8059 8.00581 12 8.99995 12H63C63.9942 12 64.8 12.8059 64.8 13.8V50.4V51.6C64.8 52.5941 63.9942 53.4 63 53.4H8.99995C8.00581 53.4 7.19995 52.5941 7.19995 51.6V50.4Z" fill="url(#paint4_radial_5179_1308)"></path><path id="Vector_6" d="M35.4 52.8C36.3941 52.8 37.2 52.3971 37.2 51.9C37.2 51.4029 36.3941 51 35.4 51C34.4059 51 33.6 51.4029 33.6 51.9C33.6 52.3971 34.4059 52.8 35.4 52.8Z" fill="url(#paint5_radial_5179_1308)"></path></g><defs><radialGradient id="paint0_radial_5179_1308" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50.3269 49.3723) rotate(118.526) scale(55.1579 46.2871)"><stop stopColor="#802600"></stop><stop offset="0.333333" stopColor="#6F181D"></stop><stop offset="0.666667" stopColor="#5B1333"></stop><stop offset="1" stopColor="#391945"></stop></radialGradient><radialGradient id="paint1_radial_5179_1308" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(48.1077 53.6128) rotate(158.116) scale(32.7275 42.219)"><stop stopColor="#99421D"></stop><stop offset="0.333333" stopColor="#99161D"></stop><stop offset="0.666667" stopColor="#7D1845"></stop><stop offset="1" stopColor="#59216E"></stop></radialGradient><linearGradient id="paint2_linear_5179_1308" x1="10.4727" y1="14.9572" x2="56.1755" y2="51.4814" gradientUnits="userSpaceOnUse"><stop stopColor="#99161D"></stop><stop offset="0.245283" stopColor="#CA005B"></stop><stop offset="0.346698" stopColor="#FF479A"></stop><stop offset="0.46934" stopColor="#CC3CFF"></stop><stop offset="0.735849" stopColor="#BC1A22"></stop><stop offset="1" stopColor="#C94FF5"></stop></linearGradient><radialGradient id="paint3_radial_5179_1308" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(38.6181 23.8286) rotate(90) scale(25.9571 25.8545)"><stop stopColor="#1C0E20" stopOpacity="0"></stop><stop offset="1" stopColor="#1C0E20"></stop></radialGradient><radialGradient id="paint4_radial_5179_1308" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(54 20.1938) rotate(144.293) scale(47.2897 44.8232)"><stop stopColor="#EF7744"></stop><stop offset="0.333333" stopColor="#E50914"></stop><stop offset="0.666667" stopColor="#A70D53"></stop><stop offset="1" stopColor="#792A95"></stop></radialGradient><radialGradient id="paint5_radial_5179_1308" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(36.525 51.3562) rotate(135) scale(4.58735)"><stop stopColor="#FFDCCC"></stop><stop offset="0.333333" stopColor="#FFBDC0"></stop><stop offset="0.666667" stopColor="#F89DC6"></stop><stop offset="1" stopColor="#E4A1FA"></stop></radialGradient></defs></svg>
              </div>
              <div className='text-white hover:scale-95 hover:-rotate-2 transition-all duration-300 relative p-4 pb-24 rounded-2xl  bg-gradient-to-br from-[#192145] to-[#200e19]'>
                <h1 className='text-xl font-semibold py-3'>Download your shows to watch offline</h1>
                <h3 className='text-[#ffffffb3] leading-6 text-sm'>Save your favorites easily and always have something to watch.</h3>
                <svg className='absolute bottom-4 right-4' width="72" height="72" viewBox="0 0 72 72" fill="none"><g id="download-core-small"><path id="Vector" d="M36 70.2008C54.8882 70.2008 70.2001 54.8889 70.2001 36.0008C70.2001 17.1126 54.8882 1.80078 36 1.80078C17.1119 1.80078 1.80005 17.1126 1.80005 36.0008C1.80005 54.8889 17.1119 70.2008 36 70.2008Z" fill="url(#paint0_radial_5179_7940)"></path><path id="Vector_2" opacity="0.4" d="M64.7658 36.195C65.5206 51.5916 53.7908 63.5824 38.5668 62.977C23.3428 62.3722 10.3893 49.4 9.63446 34.0034C8.87954 18.6068 20.6091 6.61594 35.8331 7.22116C51.0571 7.82638 64.0104 20.7984 64.7658 36.195Z" fill="url(#paint1_radial_5179_7940)"></path><path id="Vector_3" d="M62.3657 37.9958C63.1205 53.3924 51.3908 65.3832 36.1668 64.7778C20.9428 64.173 7.9893 51.2008 7.23444 35.8041C6.47952 20.4075 18.2091 8.41672 33.4331 9.02194C48.6571 9.62716 61.6103 22.5992 62.3657 37.9958Z" fill="url(#paint2_radial_5179_7940)"></path><path id="Vector_4" opacity="0.5" d="M64.7658 36.195C65.5206 51.5916 53.7908 63.5824 38.5668 62.977C23.3428 62.3722 10.3893 49.4 9.63446 34.0034C8.87954 18.6068 20.6091 6.61594 35.8331 7.22116C51.0571 7.82638 64.0104 20.7984 64.7658 36.195Z" fill="url(#paint3_radial_5179_7940)"></path><path id="Vector_5" opacity="0.6" d="M36.9 60.6C48.6636 60.6 58.2 51.0637 58.2 39.3C58.2 27.5363 48.6636 18 36.9 18C25.1363 18 15.6 27.5363 15.6 39.3C15.6 51.0637 25.1363 60.6 36.9 60.6Z" fill="url(#paint4_radial_5179_7940)"></path><path id="Vector_6" fillRule="evenodd" clipRule="evenodd" d="M39.0849 42.2727L46.3387 35.76L48.8945 38.5142L38.9118 47.477L37.8466 48.4333L36.6071 47.477L24.9899 38.5142L27.0434 35.76L35.4849 42.2727L33.6 21.6016H37.2L39.0849 42.2727Z" fill="url(#paint5_radial_5179_7940)"></path><path id="Vector_7" opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M61.6566 34.9618C61.7832 35.3893 62.391 35.3233 62.3694 34.878C61.6962 21.1369 50.1509 9.55975 36.5817 9.01957C34.4606 8.93515 32.4155 9.12541 30.4772 9.55909C30.0745 9.64915 30.1575 10.2082 30.5697 10.2246C45.0094 10.7979 57.6246 21.2971 61.6566 34.9618Z" fill="url(#paint6_radial_5179_7940)"></path></g><defs><radialGradient id="paint0_radial_5179_7940" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(36.0001 36.1837) rotate(-90) scale(34.3829)"><stop offset="0.782019" stopColor="#982DBE"></stop><stop offset="0.906819" stopColor="#B038DC" stopOpacity="0.2"></stop><stop offset="1" stopColor="#E4A1FA" stopOpacity="0"></stop></radialGradient><radialGradient id="paint1_radial_5179_7940" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(52.9937 20.0992) rotate(135) scale(49.9836)"><stop stopColor="#FFDCCC"></stop><stop offset="0.333333" stopColor="#FFBDC0"></stop><stop offset="0.666667" stopColor="#F89DC6"></stop><stop offset="1" stopColor="#E4A1FA"></stop></radialGradient><radialGradient id="paint2_radial_5179_7940" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(52.7999 19.6937) rotate(135) scale(53.1037)"><stop stopColor="#FFA984"></stop><stop offset="0.333333" stopColor="#FF787F"></stop><stop offset="0.666667" stopColor="#F45FA2"></stop><stop offset="1" stopColor="#C44AF1"></stop></radialGradient><radialGradient id="paint3_radial_5179_7940" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(52.9937 20.0992) rotate(135) scale(49.9836)"><stop stopColor="#FFDCCC"></stop><stop offset="0.333333" stopColor="#FFBDC0"></stop><stop offset="0.666667" stopColor="#F89DC6"></stop><stop offset="1" stopColor="#E4A1FA"></stop></radialGradient><radialGradient id="paint4_radial_5179_7940" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(36.9 39.3) scale(21.3)"><stop stopColor="white"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint5_radial_5179_7940" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(31.2 32.1016) rotate(39.5226) scale(15.5567)"><stop stopColor="#EF7744"></stop><stop offset="0.2406" stopColor="#E50914"></stop><stop offset="1" stopColor="#792A95"></stop></radialGradient><radialGradient id="paint6_radial_5179_7940" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50.7 21.3) rotate(-180) scale(30)"><stop stopColor="white"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient></defs></svg>
              </div>
              <div className='text-white hover:scale-95 hover:rotate-2 transition-all duration-300 relative p-4 pb-24 rounded-2xl  bg-gradient-to-br from-[#192145] to-[#200e19]'>
                <h1 className='text-xl font-semibold py-3'>Watch everywhere</h1>
                <h3 className='text-[#ffffffb3] leading-6 text-sm'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
                <svg className='absolute bottom-4 right-4' width="72" height="72" viewBox="0 0 72 72" fill="none"><g id="telescope-core-small"><path id="Vector" d="M24.0492 36.6016L33.6 46.3898L17.8029 56.8633C17.8029 56.8633 15.8891 57.6983 13.625 55.2638C11.361 52.8293 12.1235 51.238 12.1235 51.238L24.0492 36.6016Z" fill="url(#paint0_radial_5179_1664)"></path><path id="Vector_2" d="M25.0344 34.1992L36 46.151L25.0616 53.8043C25.0616 53.8043 21.8289 55.0984 18.0987 51.0172C14.3686 46.9358 15.9198 44.5105 15.9198 44.5105L25.0344 34.1992Z" fill="url(#paint1_radial_5179_1664)"></path><path id="Vector_3" d="M39 13.0195L59.1 33.6788L32.5325 50.4142C32.5325 50.4142 28.7459 50.2552 24.3978 45.4897C20.0498 40.7243 21.4096 35.8101 21.4096 35.8101L39 13.0195Z" fill="url(#paint2_radial_5179_1664)"></path><path id="Vector_4" d="M57.6709 15.3516C63.1044 21.2807 63.9858 29.2883 59.6386 33.2371C55.2916 37.186 47.3628 35.5806 41.9292 29.6515C36.4954 23.7224 35.6145 15.7148 39.9615 11.766C44.3084 7.81716 52.2372 9.42252 57.6709 15.3516Z" fill="url(#paint3_radial_5179_1664)"></path><path id="Vector_5" d="M58.3787 31.255C54.8121 34.5032 48.2143 33.0817 43.6421 28.0798C39.07 23.078 38.2547 16.39 41.8213 13.1419C45.3879 9.89364 51.9857 11.3152 56.5579 16.3171C61.1298 21.3189 61.9452 28.0069 58.3787 31.255Z" fill="url(#paint4_radial_5179_1664)"></path><path id="Vector_6" opacity="0.85" d="M59.6783 28.823C60.576 24.1785 59.6544 20.5934 56.1603 16.6199C52.6662 12.6464 47.3508 10.8657 43.7796 12.7598C39.371 15.098 48.3734 13.5961 53.4577 19.5815C57.8259 24.724 58.8516 33.1009 59.6783 28.823Z" fill="url(#paint5_radial_5179_1664)"></path><path id="Vector_7" opacity="0.4" d="M50.3979 25.2452C50.4549 26.7239 49.2932 27.7677 47.8032 27.5766C46.3131 27.3856 45.059 26.032 45.002 24.5532C44.945 23.0745 46.1067 22.0307 47.5968 22.2218C49.0868 22.4128 50.341 23.7664 50.3979 25.2452Z" fill="url(#paint6_radial_5179_1664)"></path><path id="Vector_8" opacity="0.6" d="M36.9217 21.0039L26.4258 34.3627C26.3297 36.4604 28.2903 39.5534 30.0334 40.8344L41.2345 29.9105C39.6 28.2005 36.9591 24.1025 36.9217 21.0039Z" fill="url(#paint7_radial_5179_1664)"></path><path id="Vector_9" fillRule="evenodd" clipRule="evenodd" d="M20.0576 9.60156L21.479 11.7187L24 11.0654L22.3575 13.0272L23.7789 15.1444L21.3424 14.2397L19.7 16.2016L19.8365 13.6806L17.4 12.7759L19.9209 12.1225L20.0576 9.60156ZM58.776 52.8016L58.9623 56.4685L62.4 57.4188L59.0774 58.7347L59.2637 62.4016L57.0239 59.548L53.7014 60.8638L55.6397 57.7843L53.4 54.9307L56.8377 55.8811L58.776 52.8016ZM15.206 24.2101L15.8768 21.0016L13.4793 23.1964L10.6853 21.5563L11.9975 24.553L9.59998 26.7478L12.8085 26.405L14.1207 29.4016L14.7915 26.1931L18 25.8502L15.206 24.2101Z" fill="url(#paint8_linear_5179_1664)"></path></g><defs><radialGradient id="paint0_radial_5179_1664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(36.6875 32.7016) rotate(135) scale(34.9134)"><stop stopColor="#99421D"></stop><stop offset="0.333333" stopColor="#99161D"></stop><stop offset="0.666667" stopColor="#7D1845"></stop><stop offset="1" stopColor="#59216E"></stop></radialGradient><radialGradient id="paint1_radial_5179_1664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(42.5937 27.2992) rotate(135) scale(44.5477 44.5279)"><stop stopColor="#EF7744"></stop><stop offset="0.333333" stopColor="#E50914"></stop><stop offset="0.666667" stopColor="#A70D53"></stop><stop offset="1" stopColor="#792A95"></stop></radialGradient><radialGradient id="paint2_radial_5179_1664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(42.3 29.106) rotate(135) scale(31.8127)"><stop stopColor="#FB540D"></stop><stop offset="0.333333" stopColor="#E50914"></stop><stop offset="0.666667" stopColor="#A70D53"></stop><stop offset="1" stopColor="#792A95"></stop></radialGradient><radialGradient id="paint3_radial_5179_1664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(57.675 14.7078) rotate(134.326) scale(24.0433 24.0367)"><stop stopColor="#FFDCCC"></stop><stop offset="0.333333" stopColor="#FFBDC0"></stop><stop offset="0.666667" stopColor="#F89DC6"></stop><stop offset="1" stopColor="#E4A1FA"></stop></radialGradient><radialGradient id="paint4_radial_5179_1664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(52.1305 21.273) rotate(141.875) scale(9.87138 12.8159)"><stop offset="0.307292" stopColor="#F89DC6"></stop><stop offset="0.645392" stopColor="#E75094"></stop><stop offset="1" stopColor="#59216E"></stop></radialGradient><radialGradient id="paint5_radial_5179_1664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(55.8 15.6) rotate(135) scale(13.1522)"><stop stopColor="white"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint6_radial_5179_1664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(49.2362 22.9648) rotate(131.079) scale(5.08644 6.006)"><stop stopColor="white"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint7_radial_5179_1664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(36.8758 29.1353) rotate(137.622) scale(13.5764)"><stop stopColor="#FFA984"></stop><stop offset="1" stopColor="#F7636B" stopOpacity="0"></stop></radialGradient><linearGradient id="paint8_linear_5179_1664" x1="44.65" y1="27.9016" x2="24.25" y2="48.3016" gradientUnits="userSpaceOnUse"><stop stopColor="#EF7744"></stop><stop offset="0.333333" stopColor="#E50914"></stop><stop offset="0.666667" stopColor="#A70D53"></stop><stop offset="1" stopColor="#792A95"></stop></linearGradient></defs></svg>
              </div>
              <div className='text-white hover:scale-95 hover:-rotate-2 transition-all duration-300 relative p-4 pb-24 rounded-2xl  bg-gradient-to-br from-[#192145] to-[#200e19]'>
                <h1 className='text-xl font-semibold py-3'>Create profiles for kids</h1>
                <h3 className='text-[#ffffffb3] leading-6 text-sm'>Send kids on adventures with their favorite characters in a space made just for them — free with your membership.</h3>
                <svg className='absolute bottom-4 right-4' width="72" height="72" viewBox="0 0 72 72" fill="none"><g id="profiles-core-small"><path id="Vector" d="M10.8 15.6008C10.8 12.9499 12.949 10.8008 15.5999 10.8008H40.8C43.4509 10.8008 45.6 12.9498 45.6 15.6008V40.8007C45.6 43.4516 43.4509 45.6007 40.8 45.6007H15.6C12.949 45.6007 10.8 43.4517 10.8 40.8007V15.6008Z" fill="url(#paint0_radial_5179_7919)"></path><path id="Vector_2" d="M9.59998 14.4016C9.59998 11.7506 11.749 9.60162 14.4 9.60156H39.6C42.251 9.60156 44.4 11.7506 44.4 14.4016V39.6015C44.4 42.2525 42.251 44.4015 39.6 44.4015H14.4C11.749 44.4016 9.59998 42.2525 9.59998 39.6015V14.4016Z" fill="url(#paint1_radial_5179_7919)"></path><path id="Vector_3" d="M18.6 21.9008C18.6 23.0606 17.6598 24.0008 16.5 24.0008C15.3402 24.0008 14.4 23.0606 14.4 21.9008C14.4 20.741 15.3402 19.8008 16.5 19.8008C17.6598 19.8008 18.6 20.741 18.6 21.9008Z" fill="url(#paint2_radial_5179_7919)"></path><path id="Vector_4" d="M39.6 21.9008C39.6 23.0606 38.6598 24.0008 37.5 24.0008C36.3402 24.0008 35.4 23.0606 35.4 21.9008C35.4 20.741 36.3402 19.8008 37.5 19.8008C38.6598 19.8008 39.6 20.741 39.6 21.9008Z" fill="url(#paint3_radial_5179_7919)"></path><path id="Vector_5" d="M23.6713 29.4501C23.2437 29.1967 22.6917 29.3379 22.4383 29.7655C22.1848 30.1932 22.3261 30.7452 22.7537 30.9986C23.8254 31.6337 26.769 32.7744 30.6375 32.7744C34.506 32.7744 37.4497 31.6337 38.5213 30.9986C38.949 30.7452 39.0902 30.1932 38.8368 29.7655C38.5834 29.3379 38.0313 29.1967 37.6037 29.4501C36.8191 29.9151 34.194 30.9744 30.6375 30.9744C27.081 30.9744 24.456 29.9151 23.6713 29.4501Z" fill="url(#paint4_radial_5179_7919)"></path><path id="Vector_6" opacity="0.35" d="M19.2 44.4016H28.2L32.4 27.6016C30.2787 28.1801 28.4542 29.5387 27.2921 31.4053L19.2 44.4016Z" fill="url(#paint5_radial_5179_7919)"></path><path id="Vector_7" d="M27.6 32.4016C27.6 29.7506 29.749 27.6016 32.4 27.6016L57.6 27.6016C60.2508 27.6016 62.4 29.7506 62.4 32.4016V57.6015C62.4 60.2524 60.2508 62.4016 57.6 62.4016H32.4C29.749 62.4016 27.6 60.2524 27.6 57.6016V32.4016Z" fill="url(#paint6_radial_5179_7919)"></path><path id="Vector_8" d="M36.6 39.9008C36.6 41.0606 35.6598 42.0008 34.5 42.0008C33.3402 42.0008 32.4 41.0606 32.4 39.9008C32.4 38.741 33.3402 37.8008 34.5 37.8008C35.6598 37.8008 36.6 38.741 36.6 39.9008Z" fill="url(#paint7_radial_5179_7919)"></path><path id="Vector_9" d="M57.6 39.9008C57.6 41.0606 56.6598 42.0008 55.5 42.0008C54.3402 42.0008 53.4 41.0606 53.4 39.9008C53.4 38.741 54.3402 37.8008 55.5 37.8008C56.6598 37.8008 57.6 38.741 57.6 39.9008Z" fill="url(#paint8_radial_5179_7919)"></path><path id="Vector_10" d="M41.8213 47.6025C41.3937 47.349 40.8416 47.4903 40.5882 47.9179C40.3348 48.3455 40.476 48.8976 40.9037 49.1509C41.9753 49.786 44.919 50.9267 48.7875 50.9267C52.656 50.9267 55.5996 49.786 56.6713 49.1509C57.0989 48.8976 57.2402 48.3455 56.9867 47.9179C56.7333 47.4903 56.1813 47.349 55.7537 47.6025C54.969 48.0674 52.344 49.1267 48.7875 49.1267C45.231 49.1267 42.6059 48.0674 41.8213 47.6025Z" fill="url(#paint9_radial_5179_7919)"></path></g><defs><radialGradient id="paint0_radial_5179_7919" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(39.075 17.6882) rotate(135) scale(32.8097)"><stop stopColor="#99421D"></stop><stop offset="0.333333" stopColor="#99161D"></stop><stop offset="0.666667" stopColor="#7D1845"></stop><stop offset="1" stopColor="#59216E"></stop></radialGradient><radialGradient id="paint1_radial_5179_7919" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(62.4 8.70157) rotate(133.87) scale(75.3216)"><stop stopColor="#FFDCCC"></stop><stop offset="0.333333" stopColor="#FFBDC0"></stop><stop offset="0.666667" stopColor="#F89DC6"></stop><stop offset="1" stopColor="#E4A1FA"></stop></radialGradient><radialGradient id="paint2_radial_5179_7919" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60.3 11.1008) rotate(133.939) scale(68.7426 55.9547)"><stop stopColor="#99421D"></stop><stop offset="0.333333" stopColor="#99161D"></stop><stop offset="0.666667" stopColor="#7D1845"></stop><stop offset="1" stopColor="#59216E"></stop></radialGradient><radialGradient id="paint3_radial_5179_7919" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60.3 11.1008) rotate(133.939) scale(68.7426 55.9547)"><stop stopColor="#99421D"></stop><stop offset="0.333333" stopColor="#99161D"></stop><stop offset="0.666667" stopColor="#7D1845"></stop><stop offset="1" stopColor="#59216E"></stop></radialGradient><radialGradient id="paint4_radial_5179_7919" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60.3 11.0994) rotate(133.939) scale(68.7426 55.9548)"><stop stopColor="#99421D"></stop><stop offset="0.333333" stopColor="#99161D"></stop><stop offset="0.666667" stopColor="#7D1845"></stop><stop offset="1" stopColor="#59216E"></stop></radialGradient><radialGradient id="paint5_radial_5179_7919" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(39.6 27.9016) rotate(135) scale(23.3345)"><stop stopColor="#FFA984"></stop><stop offset="0.333333" stopColor="#FF787F"></stop><stop offset="0.666667" stopColor="#F45FA2"></stop><stop offset="1" stopColor="#C44AF1"></stop></radialGradient><radialGradient id="paint6_radial_5179_7919" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(61.8 29.7016) rotate(135) scale(43.2749)"><stop stopColor="#EF7744"></stop><stop offset="0.333333" stopColor="#E50914"></stop><stop offset="0.666667" stopColor="#A70D53"></stop><stop offset="1" stopColor="#792A95"></stop></radialGradient><radialGradient id="paint7_radial_5179_7919" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(62.1 11.1008) rotate(137.146) scale(73.6614 60.3576)"><stop stopColor="#FFDCCC"></stop><stop offset="0.333333" stopColor="#FDF6F6"></stop><stop offset="0.666667" stopColor="#FADCE9"></stop><stop offset="1" stopColor="#E4A1FA"></stop></radialGradient><radialGradient id="paint8_radial_5179_7919" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(62.1 11.1008) rotate(137.146) scale(73.6614 60.3576)"><stop stopColor="#FFDCCC"></stop><stop offset="0.333333" stopColor="#FDF6F6"></stop><stop offset="0.666667" stopColor="#FADCE9"></stop><stop offset="1" stopColor="#E4A1FA"></stop></radialGradient><radialGradient id="paint9_radial_5179_7919" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(62.1 11.1017) rotate(137.146) scale(73.6614 60.3576)"><stop stopColor="#FFDCCC"></stop><stop offset="0.333333" stopColor="#FDF6F6"></stop><stop offset="0.666667" stopColor="#FADCE9"></stop><stop offset="1" stopColor="#E4A1FA"></stop></radialGradient></defs></svg>
              </div>
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div>
            <h1 className='text-lg md:text-2xl text-white font-semibold pt-10 pb-6'>Frequently Asked Questions</h1>
            <div className='grid gap-2' id="accordion-collapse" data-accordion="collapse">
              <div>
                <h2 id="accordion-collapse-heading-1">
                  <button
                    type="button"
                    className="flex rounded-2xl items-center justify-between bg-[#2d2d2d] transition duration-300 w-full p-5 font-medium text-white hover:bg-[#414141]"
                    aria-expanded={openIndex === 0}
                    aria-controls="accordion-collapse-body-1"
                    onClick={() => toggleAccordion(0)}
                  >
                    <span className="xs:text-xl">What is Netflix?</span>
                    <BsPlusLg className={`${openIndex === 0 ? 'rotate-45' : ''} text-3xl`} />
                  </button>
                </h2>

                <div
                  id="accordion-collapse-body-1"
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === 0 ? 'max-h-[1000px]' : 'max-h-0'}`}
                  aria-labelledby="accordion-collapse-heading-1"
                >
                  <div className="p-5 mt-2 rounded-2xl bg-[#2d2d2d] border-t-[1px] border-black text-white">
                    <p className="mb-2">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
                    <p>You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
                  </div>
                </div>

              </div>
              <div>
                <h2 id="accordion-collapse-heading-1">
                  <button
                    type="button"
                    className="flex rounded-2xl items-center justify-between bg-[#252525] transition duration-300 w-full p-5 font-medium text-white hover:bg-[#414141]"
                    aria-expanded={openIndex === 1}
                    aria-controls="accordion-collapse-body-2"
                    onClick={() => toggleAccordion(1)}
                  >
                    <span className="xs:text-xl">How much does Netflix cost?</span>
                    <BsPlusLg className={`${openIndex === 1 ? 'rotate-45' : ''} text-3xl`} />
                  </button>
                </h2>
                <div
                  id="accordion-collapse-body-1"
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === 1 ? 'max-h-[1000px]' : 'max-h-0'}`}
                  aria-labelledby="accordion-collapse-heading-1"
                >
                  <div className="p-5 mt-2 rounded-2xl bg-[#2d2d2d] border-t-[1px] border-black text-white">
                    <p className="mb-2">Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR 7.99 to EUR 11.99 a month (pre-tax). No extra costs, no contracts.</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 id="accordion-collapse-heading-1">
                  <button
                    type="button"
                    className="flex items-center rounded-2xl justify-between bg-[#252525] transition duration-300 w-full p-5 font-medium text-white hover:bg-[#414141]"
                    aria-expanded={openIndex === 2}
                    aria-controls="accordion-collapse-body-3"
                    onClick={() => toggleAccordion(2)}
                  >
                    <span className="xs:text-xl">Where can I watch?</span>
                    <BsPlusLg className={`${openIndex === 2 ? 'rotate-45' : ''} text-3xl`} />
                  </button>
                </h2>
                <div
                  id="accordion-collapse-body-1"
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === 2 ? 'max-h-[1000px]' : 'max-h-0'}`}
                  aria-labelledby="accordion-collapse-heading-1"
                >
                  <div className="p-5 mt-2 rounded-2xl bg-[#2d2d2d] border-t-[1px] border-black text-white">
                    <p className="mb-2">Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
                    <p className="mb-2">You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 id="accordion-collapse-heading-1">
                  <button
                    type="button"
                    className="flex items-center rounded-2xl justify-between bg-[#252525] transition duration-300 w-full p-5 font-medium text-white hover:bg-[#414141]"
                    aria-expanded={openIndex === 3}
                    aria-controls="accordion-collapse-body-4  <BsPlusLg className={`${openIndex === 1 ? 'rotate-45' : ''} text-3xl`} />"
                    onClick={() => toggleAccordion(3)}
                  >
                    <span className="xs:text-xl">How do I cancel?</span>
                    <BsPlusLg className={`${openIndex === 3 ? 'rotate-45' : ''} text-3xl`} />
                  </button>
                </h2>
                <div
                  id="accordion-collapse-body-1"
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === 3 ? 'max-h-[1000px]' : 'max-h-0'}`}
                  aria-labelledby="accordion-collapse-heading-1"
                >
                  <div className="p-5 mt-2 rounded-2xl bg-[#2d2d2d] border-t-[1px] border-black text-white">
                    <p className="mb-2">Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 id="accordion-collapse-heading-1">
                  <button
                    type="button"
                    className="flex items-center rounded-2xl justify-between bg-[#252525] transition duration-300 w-full p-5 font-medium text-white hover:bg-[#414141]"
                    aria-expanded={openIndex === 4}
                    aria-controls="accordion-collapse-body-5"
                    onClick={() => toggleAccordion(4)}
                  >
                    <span className="xs:text-xl">What can I watch on Netflix?</span>
                    <BsPlusLg className={`${openIndex === 4 ? 'rotate-45' : ''} text-3xl`} />
                  </button>
                </h2>
                <div
                  id="accordion-collapse-body-1"
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === 4 ? 'max-h-[1000px]' : 'max-h-0'}`}
                  aria-labelledby="accordion-collapse-heading-1"
                >
                  <div className="p-5 mt-2 rounded-2xl bg-[#2d2d2d] border-t-[1px] border-black text-white">
                    <p className="mb-2">Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 id="accordion-collapse-heading-1">
                  <button
                    type="button"
                    className="flex items-center rounded-2xl justify-between bg-[#252525] transition duration-300 w-full p-5 font-medium text-white hover:bg-[#414141]"
                    aria-expanded={openIndex === 5}
                    aria-controls="accordion-collapse-body-6"
                    onClick={() => toggleAccordion(5)}
                  >
                    <span className="xs:text-xl">is Netflix good for kids?</span>
                    <BsPlusLg className={`${openIndex === 5 ? 'rotate-45' : ''} text-3xl`} />
                  </button>
                </h2>
                <div
                  id="accordion-collapse-body-1"
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === 5 ? 'max-h-[1000px]' : 'max-h-0'}`}
                  aria-labelledby="accordion-collapse-heading-1"
                >
                  <div className="p-5 mt-2 rounded-2xl bg-[#2d2d2d] border-t-[1px] border-black text-white">
                    <p className="mb-2">The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.</p>
                    <p className="mb-2">Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 id="accordion-collapse-heading-1">
                  <button
                    type="button"
                    className="flex items-center rounded-2xl justify-between bg-[#252525] transition duration-300 w-full p-5 font-medium text-white hover:bg-[#414141]"
                    aria-expanded={openIndex === 6}
                    aria-controls="accordion-collapse-body-7"
                    onClick={() => toggleAccordion(6)}
                  >
                    <span className="xs:text-xl">Why am I seeing this language?</span>
                    <BsPlusLg className={`${openIndex === 6 ? 'rotate-45' : ''} text-3xl`} />
                  </button>
                </h2>
                <div
                  id="accordion-collapse-body-1"
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === 6 ? 'max-h-[1000px]' : 'max-h-0'}`}
                  aria-labelledby="accordion-collapse-heading-1"
                >
                  <div className="p-5 my-2 rounded-2xl bg-[#2d2d2d] border-t-[1px] border-black text-white">
                    <p className="mb-2">Your browser preferences determine the language shown here.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ready to watch? */}
            <div className='pt-8'>
              <Link to={'/signup/registration'} >
                <button className='bg-red-600 hover:bg-red-800 transition-all duration-300 text-white w-[140px] h-[40px] rounded-full mx-auto block'>Get started</button>
              </Link>
              <p className='py-2 text-white  sm:text-center'>Create or restart your membership</p>
            </div>
          </div>
        </div>
      </div>
    </main >
  )
}
export default Main