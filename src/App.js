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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function App() {

  const [resumedata, setresumedata] = useState([])

  let dataPush = (reciveddata)=>{
    let dataCopy = [...resumedata];
    dataCopy.push(reciveddata);
    setresumedata(dataCopy)
  }
  console.log(resumedata);
  return (
    <Router>
      <div className="App">
      <Navigation/>

      <Switch>
        <Route exact path="/"><Personal dataPush={dataPush}/></Route>
        <Route exact path="/Education"><Educational dataPush={dataPush}/></Route>
        <Route exact path="/Projects"><ProjectsDeveloped dataPush={dataPush}/></Route>
        <Route exact path="/Experience"><Experience dataPush={dataPush}/></Route>
        <Route exact path="/Extras"><ExtraDetails dataPush={dataPush}/></Route>
      </Switch>
    </div>
    </Router>
    

  );
}

export default App;
