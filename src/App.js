import logo from './logo.svg';
import './App.css';
import Serverdata from './components/Serverdata';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Personal from './components/Personal';
import Educational from './components/Educational';
import ProjectsDeveloped from './components/ProjectsDeveloped';
import Experience from './components/Experience';
import ExtraDetails from './components/ExtraDetails';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Navigation/>

      <Switch>
        <Route exact path="/"><Personal/></Route>
        <Route exact path="/Education"><Educational/></Route>
        <Route exact path="/Projects"><ProjectsDeveloped/></Route>
        <Route exact path="/Experience"><Experience/></Route>
        <Route exact path="/Extras"><ExtraDetails/></Route>
      </Switch>
    </div>
    </Router>
    

  );
}

export default App;
