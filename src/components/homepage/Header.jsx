import { HiLanguage } from "react-icons/hi2"
import logo from '../../assets/imgs/logo.png'

function Header() {
    return (
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
    )
}
export default Header