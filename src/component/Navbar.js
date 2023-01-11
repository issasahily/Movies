import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <div className="navbar">
           <Link to={"/"}><h3>Movie Star</h3></Link>
            <li className="nav-list">
                <Link to="/" ><ul>Home</ul></Link>
            </li>
        </div>
     );
}
 
export default Navbar;