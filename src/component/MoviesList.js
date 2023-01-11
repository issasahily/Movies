import { Link } from "react-router-dom";
import { useState } from "react";
const MoviesList = ({movies}) => {
    const [search,setSearch]=useState('');
    const [category,setCategory]=useState('All');
    return ( 
        <div>
            <div className="filter">
                
                <select  id="category" className="select" onChange={(e)=>setCategory(e.target.value)}>
                    <option value="All">All</option>
                    <option value="historic">Historic</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="super hero">super Hero</option>
                    <option value="science fiction">science fiction</option>
                </select>
             <input 
             className="serach"
            type="search"
            value={search}
            placeholder="search..."
            onChange={(e)=>setSearch(e.target.value)}
            />
            </div>
        <div className="movie-list">
            {movies.filter((item)=>{
                return search.toLowerCase()===''
                ? item
                :item.title.toLowerCase().includes(search);
            })
            .filter((item)=>{
                return category==='All'
                ? item
                :item.category.toLowerCase().includes(category);
            })
            .map(movie=>(
                <div  className="moive-preview"  key={movie.id}> 
                <Link to={`/movies/${movie.id}`}>
                <img src={movie.image} alt="movie"/>
                <h3 className="title">{movie.title}</h3>
                </Link>
                </div>
            ))}
        </div>
        </div>
     );
}
 
export default MoviesList;