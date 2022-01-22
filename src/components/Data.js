import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import htmlToPdfmake from 'html-to-pdfmake';
import CreatePdf from './CreatePdf';

//class Data extends React.Component {
// constructor(props){
//   let data = props.data;
//   console.log(data)
// }
//   printDocument() {

//     const doc = new jsPDF();

//     //get table html
//     const pdfTable = document.getElementById('divToPrint');
//     //html to pdf format
//     var html = htmlToPdfmake(pdfTable.innerHTML);

//     const documentDefinition = { content: html };
//     pdfMake.vfs = pdfFonts.pdfMake.vfs;
//     pdfMake.createPdf(documentDefinition).open();

//   };


//   render() {
//     const data = this.props.data
//     console.log(data);
//     return (
//       <div className="App container mt-5">


//         <button className="btn btn-primary" onClick={this.printDocument}>Export To PDF</button>
//       </div >
//     )
//   };
// }


function Data(props) {
  const [data, setdata] = useState([])
  useEffect(() => {
    getResumeData();

  }, []);
  let printDocument=()=> {

    const doc = new jsPDF();

    const pdfTable = document.getElementById('divToPrint');
    
    var html = htmlToPdfmake(pdfTable.innerHTML);

    const documentDefinition = { content: html };
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    pdfMake.createPdf(documentDefinition).open();

  };
  let getResumeData = async () => {
    const response = await axios.get("http://localhost:3001/resumedata");
    const fetchData = response.data;
    setdata(fetchData)
  }
  console.log(data)
  return (
    
    <div id='divToPrint' className='container'>
      {
        data.map((val, idx) => {
          console.log("featchdata", val.skill1)
          return (<div key={idx}> <h1 className='Name'>{val.firstname} {val.lastname}</h1>
            <p className='contact' style={{}}>{val.email}{" "} {val.phoneno}</p>
            <p className='education'>{val.college} {val.colstart} {val.colend} {val.colqualification} {val.coldescription}</p>
            <p className='project'>{val.title1} {val.description1} {val.link1}</p>
            <p className='Experience'>{val.institute1} {val.position1} {val.duration1}</p>
            <p className='extra'>{val.interest1} {val.skill1} </p></div>)
        })
      }
      <button className="btn btn-primary" onClick={printDocument}>Print to PDF</button>

    
    </div>
  )
}
export default Data;