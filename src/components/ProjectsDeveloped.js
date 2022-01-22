import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { withRouter } from "react-router-dom";

function ProjectsDeveloped(props) {
    const [project, setproject] = useState({
        title1:"",
        link1:"",
        description1:"",
        title2:"",
        link2:"",
        description2:"",
    })
    const [title1Error, settitle1Error] = useState("")
    const [link1Error, setlink1Error] = useState("")
    const [description1Error, setdescription1Error] = useState("")
    const validateProject = () => {
        if(project.title1){
        if (project.title1 !== null || project.title1 !== "") {
            settitle1Error("")
          return true;
        }}
        else {
            settitle1Error("*required")
        }
        return false;
      }
      const validatelink = () => {
        if(project.link1){
        if (project.link1 !== null || project.link1 !== "") {
            setlink1Error("")
          return true;
        }}
        else {
            setlink1Error("*required")
        }
        return false;
      }
      const validatdescription = () => {
        if(project.description1){
        if (project.description1 !== null || project.description1 !== "") {
            setdescription1Error("")
          return true;
        }}
        else {
            setdescription1Error("* required")
        }
        return false;
      }


    let changedata=(event)=>{
        setproject({
            ...project,
            [event.target.name]:event.target.value
        })
    }
    let goExp = ()=>{
        if(validateProject() && validatelink() && validatdescription()){
        props.history.push("/Experience")
        props.dataPush(project)
    }
    }
    return (
        <div>
            <div style={{ padding: "20px" }}>
                <Card className="container">
                    <Card.Header className="text-center">Projects Developed</Card.Header>
                    <Card.Body>
                        <h4>Project1</h4>
                            <Form.Group controlId="formGridTitle">
                            <Form.Control type="text"  name="title1" placeholder="Title *" value={project.title1} onChange={changedata}/>
                            {title1Error && <div className="errormsg">{title1Error}</div>}
                            </Form.Group><br/>

                            <Form.Group controlId="formGridPassword">
                                <Form.Control type="text" name='link1' placeholder="Link *" value={project.link1} onChange={changedata} />
                                {link1Error && <div className="errormsg">{link1Error}</div>}
                            </Form.Group><br/>

                            <Form.Group controlId="formGridPassword">
                                <Form.Control type="text" name='description1' placeholder="Description *" value={project.description1} onChange={changedata} />
                                {description1Error && <div className="errormsg">{description1Error}</div>}
                            </Form.Group>
                            <br />
                        <hr /><br />
                        <h4>Project2</h4>
                        <Form.Group controlId="formGridEmail">
                                <Form.Control type="text" name='title2' placeholder="Title *" value={project.title2} onChange={changedata}/>
                            </Form.Group><br/>

                            <Form.Group controlId="formGridPassword">
                                <Form.Control type="text" name='link2' placeholder="Link *" value={project.link2} onChange={changedata}/>
                            </Form.Group><br/>
                            
                            <Form.Group controlId="formGridPassword">
                                <Form.Control type="text" name='description2' placeholder="Description *" value={project.description2} onChange={changedata} />
                            </Form.Group><br/>
                        
                        <Button md={12} style={{ background: "red", width: "90px", margin: "8px" }} onClick={()=>{props.history.goBack()}}>Back</Button>
                        <Button md={12} style={{ background: "red", width: "90px", margin: "8px" }} onClick={goExp}>Next</Button>
                    </Card.Body>
                    <Card.Footer className="text-center">Page 3</Card.Footer>
                </Card>
            </div>
        </div>
    )
}

export default withRouter(ProjectsDeveloped)
