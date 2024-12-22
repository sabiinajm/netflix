import { useContext, useEffect, useState } from "react";
import { IoIosArrowRoundBack, IoMdArrowDropdown } from "react-icons/io";
import { RiLayoutGridFill } from "react-icons/ri";
import { RxTextAlignLeft } from "react-icons/rx";
import { DATA, TOPMOVIES, TOPTV } from "../../../context/DataContext";
import { Link, useNavigate, useParams } from "react-router-dom";

function Genres({ header, setRandomImage, genreId }) {
    const { data } = useContext(DATA);
    const { topM } = useContext(TOPMOVIES);
    const { topTv } = useContext(TOPTV);

    let selectedData = [];
    if (header === 'movies') {
        selectedData = topM;
    } else if (header === 'tv shows') {
        selectedData = topTv;
    } else {
        selectedData = data;
    }

    useEffect(() => {
        if (selectedData && selectedData.length > 0) {
            const filteredData = genreId
                ? selectedData.filter(item => item.genre_ids.includes(genreId)) // GenreId is parsed as number
                : selectedData;

            console.log('Filtered Data:', filteredData);
        }
    }, [selectedData, genreId]);

    const navigate = useNavigate();
    const { genreid } = useParams();

    const genreMap = {
        28: "Action",
        10759: "Adventure",
        16: "Animation",
        35: "Comedy",
        80: "Crime",
        99: "Documentary",
        18: "Drama",
        14: "Fantasy",
        27: "Horror",
        10402: "Musical",
        9648: "Mystery",
        10749: "Romance",
        878: "Sci-Fi",
        53: "Thriller",
        37: "Western",
    };

    const [isOpen, setIsOpen] = useState(false);
    const [selectedGenre, setSelectedGenre] = useState('Genres');

    useEffect(() => {
        if (genreid) {
            setSelectedGenre(genreMap[genreid]);
            setIsOpen(false);
        }
    }, [genreid]);

    function toggleDropdown() {
        setIsOpen(!isOpen);
    }

    const handleSelect = (genreId) => {
        setSelectedGenre(genreMap[genreId]);
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

    const [scroll, setScroll] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const availableGenres = Object.entries(genreMap).filter(([genreId]) => {
        return selectedData.some(item => item.genre_ids.includes(parseInt(genreId)));
    });

    return (
        <div className={`w-full fixed left-0 top-[70px] p-6 z-50 transition-all duration-500 ${scroll > 5 ? 'bg-[#141414]' : ''}`}>
            <div className="max-w-[1450px] px-9 mx-auto flex items-center gap-6">
                <div className="flex gap-4 items-end">
                    <button onClick={() => navigate(-1)} style={{ textShadow: "3px 3px 6px rgba(0, 0, 0, 0.4)" }} className={`text-2xl font-bold text-[#ff00006c] items-center ${genreid ? 'flex' : 'hidden'}`}>
                        <IoIosArrowRoundBack />back
                    </button>
                    <p className="text-4xl font-bold text-white">{header}</p>
                </div>
                <div className="flex relative">
                    <div className="relative w-[80px] sm:w-[110px]">
                        <button
                            onClick={toggleDropdown}
                            className={`w-full h-[28px] bg-black hover:bg-transparent ${isOpen ? 'bg-transparent' : ''} flex items-center justify-between text-white text-sm font-semibold border border-white outline-none px-2 pl-1 ${genreid ? 'hidden' : 'flex'}`}
                        >
                            {selectedGenre}
                            <IoMdArrowDropdown />
                        </button>
                        {isOpen && (
                            <div className="absolute bg-[#000000f0] w-[280px] z-10">
                                <div className="grid grid-cols-3 gap-2 p-2">
                                    {availableGenres.map(([genreId, genreName]) => (
                                        <Link to={`/genre/${genreName}/${genreId}`}
                                            key={genreId}
                                            onClick={() => handleSelect(genreName)}
                                            className="text-white cursor-pointer text-xs hover:underline p-1 rounded"
                                        >
                                            {genreName}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="w-[110px] h-[40px] flex pl-4 text-xl items-center top-[20px] absolute right-[30px] text-[#d5d5d5]">
                <div className="cursor-pointer border-[1px] shadow-md border-[#d5d5d5] w-[45px] h-[30px] flex justify-center items-center hover:text-[#adadad]">
                    <RxTextAlignLeft onClick={handleRandomClick} />
                </div>
                <div className="cursor-pointer border-y-[1px] border-r-[1px] shadow-md border-[#d5d5d5] w-[45px] h-[30px] flex justify-center items-center hover:text-[#adadad]">
                    <RiLayoutGridFill onClick={handleGrid} />
                </div>
            </div>
        </div>
    );
}

export default Genres;
