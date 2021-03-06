import './App.css';
import Titles from './Components/Titles'
import Home from './Components/Home'
import Demo from './Components/Demo';
import Footer from './Components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import data from "./Data/sample.json"

function App() {

  let movies = data.entries.filter(record => record.programType === 'movie')
  let series = data.entries.filter(record => record.programType === 'series')

  return (
    <div className="App" id="App">
      <Demo />
      
     
      <Router>
        <div>
          <Switch>
            <Route path="/movies">
            <Titles data={movies} name="Movies"/>
            </Route>
            <Route path="/series">
             <Titles data={series} name="Series"/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>

      <Footer></Footer>
    </div>
  );
}

export default App;
