import { useContext, useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiLayoutGridFill } from "react-icons/ri";
import { RxTextAlignLeft } from "react-icons/rx";
import { DATA } from "../../../context/DataContext";
function Genres({ header, setRandomImage }) {
    const {data} = useContext(DATA)
    const genres = [
        "Action", "Comedy", "Drama", "Thriller", "Fantasy",
        "Sci-Fi", "Horror", "Adventure", "Romance", "Animation",
        "Documentary", "Mystery", "Crime", "Musical", "Western"
    ];
    const [isOpen, setIsOpen] = useState(false);
    const [selectedGenre, setSelectedGenre] = useState("Genres ");

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (genre) => {
        setSelectedGenre(genre);
        setIsOpen(false);
    };

    const handleGrid = () => {
        setRandomImage(false);

    };
    const handleRandomClick = () => {
        if (data && data.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.length);
            setRandomImage(data[randomIndex]);
        }
    };
    
    
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`w-full fixed left-0 top-[70px] p-6  z-50 transition-all duration-500 ${scroll > 5 ? 'bg-[#141414]' : ''}`}>
            <div className="max-w-[1450px] px-9 mx-auto flex items-center gap-6">
                <p className="text-4xl font-bold text-white">{header} </p>
                <div className="flex relative">
                    <div className="relative w-[80px] sm:w-[110px]">
                        <button
                            onClick={toggleDropdown}
                            className={`w-full h-[28px] bg-black hover:bg-transparent ${isOpen ? 'bg-transparent' : ''} flex items-center justify-between text-white text-sm font-semibold border border-white outline-none px-2 pl-1`}
                        >
                            {selectedGenre}
                            <IoMdArrowDropdown />
                        </button>
                        {isOpen && (
                            <div className="absolute bg-[#000000f0] w-[280px]  z-10">
                                <div className="grid grid-cols-3 gap-2 p-2">
                                    {genres.map((genre, index) => (
                                        <div
                                            key={index}
                                            onClick={() => handleSelect(genre)}
                                            className="text-white cursor-pointer text-xs hover:underline p-1 rounded"
                                        >
                                            {genre}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='w-[110px] h-[40px] flex pl-4 text-xl items-center top-[20px] absolute right-[30px] text-[#d5d5d5]'>
                <div className="cursor-pointer border-[1px] shadow-md border-[#d5d5d5] w-[45px] h-[30px] flex justify-center items-center hover:text-[#adadad]">
                    <RxTextAlignLeft onClick={handleRandomClick} />
                </div>
                <div className="cursor-pointer border-y-[1px] border-r-[1px] shadow-md border-[#d5d5d5] w-[45px] h-[30px] flex justify-center items-center hover:text-[#adadad]">
                    <RiLayoutGridFill onClick={handleGrid} />

                </div>
            </div>
        </div>
    )
}
export default Genres