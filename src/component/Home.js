import MoviesList from "./MoviesList";
import useFetch from "./useFetch";

const Home = () => {
    
    const {data:movies}=useFetch('http://localhost:8000/movies')
    return ( 
        <div>
           
               {movies && <MoviesList movies={movies} /> }
        </div>
     );
}
 
export default Home;