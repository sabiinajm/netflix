import { Link } from 'react-router-dom'
import logo from '../../assets/imgs/logo.png'
function Error() {
    return (
        <>
            <div className="absolute top-0 bg-[#141414] h-[80px] w-screen z-[999]">
                <img src={logo} alt="logo" className='max-w-[130px] m-3' />
            </div>
            <div className='fixed z-[900] top-0'>
                <img src="https://assets.nflxext.com/ffe/siteui/pages/errors/bg-lost-in-space.png" alt="errorImg" className=' w-screen h-screen object-cover' />
                <div className='absolute top-[90px] text-white drop-shadow-custom flex flex-col gap-3 justify-center min-h-[500px] w-full items-center'>
                    <h1 className='text-5xl font-bold'>Lost your way?</h1>
                    <p className='text-xl'>Sorry, we can't find that page. You'll find lots to explore on the home page.</p>
                    <Link to={'/login'} className="w-[120px] h-[40px] flex justify-center items-center bg-white text-black font-semibold rounded-sm">Netflix Home</Link>
                </div>
            </div>
        </>
    )
}
export default Error