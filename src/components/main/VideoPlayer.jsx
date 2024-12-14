import { MdOutlineArrowBack } from 'react-icons/md'
import BreakingBvideo from '../../assets/imgs/BreakingBvideo.mp4'
import { useNavigate } from 'react-router-dom'
function VideoPlayer() {
    const navigate = useNavigate()
    function goBack() {
        navigate('/browse')
    }
    return (
        <>
            <div className='h-screen bg-black'>
                <MdOutlineArrowBack onClick={goBack} className='text-white absolute top-[30px] left-[20px] text-4xl  z-20' />
            </div>
        </>
    )
}

export default VideoPlayer