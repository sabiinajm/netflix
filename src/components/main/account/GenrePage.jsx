import { useParams } from "react-router-dom";
import RandomImage from "./RandomImage";
import FilteredCards from "./FilteredCards";

function GenrePage() {
    const { header, genreId, genreName } = useParams();
    return (
        <div className="bg-[#141414]">
            <RandomImage header={genreName} genreId={parseInt(genreId)} type={header} />
            <FilteredCards header={genreName} genreId={parseInt(genreId)} />
        </div>
    );
}

export default GenrePage;
