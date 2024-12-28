import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import MoreInfo from "./MoreInfo";
import { DATA, TOPMOVIES, TOPTV } from "../../../context/DataContext";

function FilteredCards({ genreId, header }) {
    const { data } = useContext(DATA);
    const { topM } = useContext(TOPMOVIES);
    const { topTv } = useContext(TOPTV);

    let selectedData = [];
    if (header === 'Movies') {
        selectedData = topM;
    } else if (header === 'TV Shows') {
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
    const [hoveredCard, setHoveredCard] = useState(null);
    const handleMouseEnter = (id) => setHoveredCard(id);
    const handleMouseLeave = () => setHoveredCard(null);

    const [selectedItem, setSelectedItem] = useState(null);
    const [modal, setModal] = useState(false);

    function handleSlideMoreInfo(itemId) {
        const selectedItem = selectedData.find((item) => item.id === itemId);
        if (selectedItem) {
            setSelectedItem(selectedItem);
            setModal(!modal);
        }
    }

    return (
        <div className="grid grid-cols-1 px-6 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-[140px]">
            {
                selectedData
                    .filter(item => genreId ? item.genre_ids.includes(parseInt(genreId)) : true)
                    .map(item => (
                        <div
                            onMouseEnter={() => handleMouseEnter(item.id)}
                            onMouseLeave={handleMouseLeave}
                            key={item.id}
                            className="text-white"
                        >
                            <Card
                                type={selectedData}
                                item={item}
                                handleSlideMoreInfo={handleSlideMoreInfo}
                                handleMouseEnter={handleMouseEnter}
                                handleMouseLeave={handleMouseLeave}
                                hoveredCard={hoveredCard}
                            />
                        </div>
                    ))
            }
            {modal && selectedItem && (
                <MoreInfo
                    setModal={setModal}
                    image={`https://image.tmdb.org/t/p/original${selectedItem.backdrop_path}`}
                    year={selectedItem.release_date?.slice(0, 4) || selectedItem.first_air_date?.slice(0, 4)}
                    overview={selectedItem.overview} />
            )}
        </div>
    )
}
export default FilteredCards