import { GoChevronDown } from "react-icons/go"
import { AiOutlineLike } from "react-icons/ai"
import { BsPlusLg } from "react-icons/bs"
import { IoPlaySharp } from "react-icons/io5"
function Card({type, item, handleSlideMoreInfo, handleMouseEnter, handleMouseLeave, hoveredCard }) {
    return (
        <div onMouseEnter={() => handleMouseEnter(item.id)} onMouseLeave={handleMouseLeave} className="transition-all duration-500 h-full flex justify-center items-center">
            <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="movie" className="object-cover rounded-sm h-[130px] w-[234px]" />
            {hoveredCard === item.id && (
                <div className="absolute top-[10px] rounded-md bg-[#141414] z-20 hover:scale-110 transition-all duration-300 delay-200 shadow-md shadow-[#000000b6]">
                    <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="" className="rounded-t-md" />
                    <div className="flex justify-between pt-3 px-4">
                        <div className="flex gap-3 mb-4">
                            <button className="w-[30px] h-[30px] rounded-full text-lg font-semibold bg-white transition-all duration-200 hover:bg-[#ddd] text-black flex justify-center items-center">
                                <IoPlaySharp className="text-xl" />
                            </button>
                            <button className="w-[30px] h-[30px] rounded-full flex justify-center items-center transition-all duration-200 hover:bg-[#99999946] text-[#f1f1f1] text-xl border-2 border-[#999] bg-[#222]">
                                <BsPlusLg />
                            </button>
                            <button className="w-[30px] h-[30px] rounded-full flex justify-center items-center transition-all duration-200 hover:bg-[#99999946] text-[#f1f1f1] text-xl border-2 border-[#999] bg-[#222]">
                                <AiOutlineLike />
                            </button>
                        </div>
                        <button onClick={() => handleSlideMoreInfo(item.id, type === "tvshows" ? "topTv" : type === "movies" ? "topM" : type === "data" ? "data" : "")}
                            className="w-[30px] h-[30px] rounded-full flex justify-center items-center transition-all duration-200 hover:bg-[#99999946] text-[#f1f1f1] text-xl border-2 border-[#999] bg-[#222]">
                            <GoChevronDown />
                        </button>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white px-4 pb-1">
                        <p className="border border-[#999] text-[#999] text-[.7rem] flex justify-center items-center w-[30px] h-[15px]">13</p>
                        <p className="border border-[#999] text-[#ddd] text-xs text-center rounded-[3px] w-[30px] h-[15px]">HD</p>
                        {item.release_date ? item.release_date.slice(0, 4) : item.first_air_date?.slice(0, 4)}
                    </div>
                </div>
            )}
        </div>
    )
}
export default Card