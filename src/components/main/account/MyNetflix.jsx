import { useContext, useState } from "react"
import { PROFILES } from "../../../context/ProfileContext"
import { IoMdArrowDropdown } from "react-icons/io"
import MyList from "./MyList"

function MyNetflix() {
    const { selectedProfile } = useContext(PROFILES)
    const [onProfile, setOnProfile] = useState(false)
    return (
        <>
            <div className="absolute -z-10 min-h-screen inset-0 pointer-events-none bg-[#141414]" ></div >
            <div className=" bg-[#141414] absolute top-[40px] w-full">
                <div className="flex justify-center flex-col items-center bg-[#141414] w-full">
                    <img onMouseEnter={() => setOnProfile(true)} className='h-[65px] my-4 rounded-md' src={selectedProfile}
                        alt="Selected Profile" />
                    <div className="flex text-white items-center">
                        <h2>sabina</h2>
                        <IoMdArrowDropdown />
                    </div>
                </div>
                <h1 className="text-white pt-10 px-3">My List</h1>
            </div>
                <MyList />
        </>
    )
}
export default MyNetflix