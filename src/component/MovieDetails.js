import { useHistory,useParams } from "react-router-dom";
import useFetch from "./useFetch";

const MovieDetails = () => {
    const{id} =useParams();
    const {data:movie}=useFetch('http://localhost:8000/movies/'+id);
    return ( 
        <div className="movie-details">
            {movie && 
            (
            <div className="movie-details-d">
                <img src={`.${movie.image}`} alt="movie"/>
                <h3>{movie.title}</h3>
                <p>{movie.time}min</p>
            </div>
            // src="../images/lotr.jpg"
            )}
        </div>
     );
}
 
export default MovieDetails;