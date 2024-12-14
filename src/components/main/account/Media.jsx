import { DATA, TOPMOVIES, TOPTV, TV } from "../../../context/DataContext"
import { useContext, useState } from "react"
import Carousel from "./Carousel"
import MoreInfo from "./MoreInfo"

function Media({ type }) {
    const { data } = useContext(DATA)
    const { tv } = useContext(TV)
    // const { comingM } = useContext(COMINGM)
    const { topM } = useContext(TOPMOVIES)
    const { topTv } = useContext(TOPTV)


    const [isSwipedRight, setIsSwipedRight] = useState(false);
    const [isSwipedRight2, setIsSwipedRight2] = useState(false);
    const [isSwipedRight3, setIsSwipedRight3] = useState(false);
    const swipeRight = () => {
        setIsSwipedRight(true);
    }
    const swipeRight2 = () => {
        setIsSwipedRight2(true);
    }
    const swipeRight3 = () => {
        setIsSwipedRight3(true);
    }
    const [hoveredCard, setHoveredCard] = useState(null);
    const [hoveredCard2, setHoveredCard2] = useState(null);
    const [hoveredCard3, setHoveredCard3] = useState(null);

    const handleMouseEnter = (id) => {
        setHoveredCard(id);
    };
    const handleMouseEnter2 = (id) => {
        setHoveredCard2(id);
    };
    const handleMouseEnter3 = (id) => {
        setHoveredCard3(id);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };
    const handleMouseLeave2 = () => {
        setHoveredCard2(null);
    };
    const handleMouseLeave3 = () => {
        setHoveredCard3(null);
    };
    const [selectedItem, setSelectedItem] = useState(null);
    const [modal, setModal] = useState(false);
    const handleSlideMoreInfo = (id, source) => {
        const sources = {
            data,
            tv,
            topM,
            topTv,
        };
        const selectedItem = sources[source]?.find((item) => item.id === id);
        if (selectedItem) {
            setSelectedItem(selectedItem);
            setModal(true);
        }
    };

    return (
        <main>
            {modal && selectedItem && (
                <MoreInfo
                    setModal={setModal}
                    image={`https://image.tmdb.org/t/p/original${selectedItem.backdrop_path}`}
                    year={selectedItem.release_date?.slice(0, 4) || selectedItem.first_air_date?.slice(0, 4)}
                    overview={selectedItem.overview}
                />
            )}
            <div className='w-full bg-[#141414] xs:pt-12'>
                <Carousel
                    title={type === "movies" ? "Action Movies" : type === "tvshows" ? "TV Dramas" : "New on Netflix"}
                    items={type === "movies" ? topM : type === "tvshows" ? topTv : type === "data" ? data : []}
                    genreId={type === "movies" || type === "tvshows" ? 18 : 35}
                    type={type}
                    isSwipedRight={isSwipedRight}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                    handleSlideMoreInfo={handleSlideMoreInfo}
                    hoveredCard={hoveredCard}
                    customClass=""
                    swipeRight={swipeRight}
                />
                <Carousel
                    title={type === "movies" ? "Comedy Movies" : type === "tvshows" ? "Fantasy TV Shows" : "Worth the Wait"}
                    items={type === "movies" ? topM : type === "tvshows" ? topTv : type === "data" ? data : []}
                    type={type}
                    genreId={type === "movies" ? 14 : type === "tvshows" ? 35 : 14}
                    isSwipedRight={isSwipedRight2}
                    handleMouseEnter={handleMouseEnter2}
                    handleMouseLeave={handleMouseLeave2}
                    handleSlideMoreInfo={handleSlideMoreInfo}
                    hoveredCard={hoveredCard2}
                    customClass="2"
                    swipeRight={swipeRight2}
                />
                <Carousel
                    title={type === "movies" ? "Thriller Movies" : type === "tvshows" ? "Adventure TV Shows" : "Coming Next Week"}
                    items={type === "movies" ? topM : type === "tvshows" ? topTv : type === "data" ? data : []}
                    genreId={type === "movies" ? 80 : type === "tvshows" ? 10765 : 16}
                    type={type}
                    isSwipedRight={isSwipedRight3}
                    handleMouseEnter={handleMouseEnter3}
                    handleMouseLeave={handleMouseLeave3}
                    handleSlideMoreInfo={handleSlideMoreInfo}
                    hoveredCard={hoveredCard3}
                    customClass="3"
                    swipeRight={swipeRight3}
                />
            </div>

        </main>
    )
}
export default Media