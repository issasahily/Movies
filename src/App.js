
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import MovieDetails from "./component/MovieDetails";
function App() {
 
  return (
    
    <Router>
      <div className="App">
      <Navbar/>

      <div className="content">
        <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="/movies/:id">
          <MovieDetails/>       
        </Route>
        </Switch>
        </div>
        
     
    </div>
    </Router>
  );
}

export default App;
