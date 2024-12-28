import { useContext, useState } from "react";
import { LIST } from "../../../context/MyListContext";
import Card from "./Card";
import MoreInfo from "./MoreInfo";

function MyList() {
  const { myList } = useContext(LIST);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modal, setModal] = useState(false);

  const handleMouseEnter = (id) => setHoveredCard(id);
  const handleMouseLeave = () => setHoveredCard(null);

  const handleSlideMoreInfo = (itemId) => {
    const selectedItem = myList.find((item) => item.id === itemId);
    if (selectedItem) {
      setSelectedItem(selectedItem);
      setModal(true);
    }
  };

  return (
    <main className="min-h-screen bg-[#141414]">
      <div className='max-w-[1450px] w-full mx-auto  px-8 pt-2 flex justify-center items-center'>
        {myList.length > 0 ? (
          <div className="grid grid-cols-1 px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-[180px] ">
            {myList.map((item) => (
              <Card
                key={item.id || Math.random()}
                type="myList"
                item={item}
                handleSlideMoreInfo={handleSlideMoreInfo}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                hoveredCard={hoveredCard}
              />
            ))}
          </div>
        ) : (
          <p className="text-white mx-auto pt-[120px]">Your list is empty.</p>
        )}
        {modal && selectedItem && (
          <MoreInfo
            setModal={setModal}
            image={selectedItem.image || `https://image.tmdb.org/t/p/original${selectedItem.backdrop_path}`}
            year={selectedItem.release_date?.slice(0, 4) || selectedItem.first_air_date?.slice(0, 4)}
            overview={selectedItem.overview} />
        )}
      </div>
    </main>
  );
}

export default MyList;
