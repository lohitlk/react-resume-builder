import './App.css';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Personal from './components/Personal';
import Educational from './components/Educational';
import ProjectsDeveloped from './components/ProjectsDeveloped';
import Experience from './components/Experience';
import ExtraDetails from './components/ExtraDetails';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import Data from './components/Data';
import axios from 'axios'

function App() {


  const [submit, setsubmit] = useState()
  let isSubmit = (recived)=>{
    setsubmit(recived)
  }
  
  console.log(submit)
  const [resumedata, setresumedata] = useState([])
  let dataPush = (reciveddata)=>{
    let dataCopy = [...resumedata];
    dataCopy.push(reciveddata);
    setresumedata(dataCopy)

  }

  console.log(resumedata);

  useEffect(()=>{
    fetchProducts();
    console.log("useeffect");
  },[submit]);

  let fetchProducts= async()=>{
    try{
        const response= await axios.post("http://localhost:3004/resumedata",resumedata);
        console.log(response.data);
        if(response.data.error) {
            const errMessage=response.data.message;
        }
        else{
            const fetchedProducts=response.data.allDataCopy;
        }
    }catch(err)
    {
        console.log(err);
    }
  };

  return (
    <Router>
      <div className="App">

      <Navigation/>

      <Switch>
        <Route exact path="/"><Personal dataPush={dataPush}/></Route>
        <Route exact path="/Education"><Educational dataPush={dataPush}/></Route>
        <Route exact path="/Projects"><ProjectsDeveloped dataPush={dataPush}/></Route>
        <Route exact path="/Experience"><Experience dataPush={dataPush}/></Route>
        <Route exact path="/Extras"><ExtraDetails dataPush={dataPush} isSubmit={isSubmit} data={resumedata}/></Route>
        {/* <Route exact path="/submit" ><Serverdata data = {resumedata}/></Route> */}
        <Route exact path="/submit" ><Data data = {resumedata}/></Route>
      </Switch>

    </div>
    </Router>


  );
}

export default App;
