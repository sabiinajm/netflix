import { useParams } from "react-router-dom";
import RandomImage from "./RandomImage";

function GenrePage() {
    const { header, genreId, genreName } = useParams();

    return (
        <div className="bg-[#141414]">
            <RandomImage header={genreName} genreId={parseInt(genreId)} type={header} /> 
        </div>
    );
}

export default GenrePage;
