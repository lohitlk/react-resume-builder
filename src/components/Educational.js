import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { withRouter } from "react-router-dom";

function Educational(props) {
    const [edu, setedu] = useState({
        college:"",
        colstart:"",
        colend:"",
        colqualification:"",
        coldescription:"",
        school:"",
        schstart:"",
        schend:"",
        schqualification:"",
        schdescription:""
    })

    let changedata = (event)=>{
        setedu({
            ...edu,
            [event.target.name]:event.target.value
        })
    }
    let goPro = ()=>{
        props.history.push("/Projects")
        props.dataPush(edu)
    }
    return (
        <div>
            <div style={{ padding: "20px" }}>
                <Card className="container">
                    <Card.Header className="text-center">Educational Details</Card.Header>
                    <Card.Body>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridcollege">
                                <Form.Control type="text" name="college" placeholder="College/University *" value={edu.college} onChange={changedata}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridcolstart">
                                <Form.Control type="date" name="colstart" placeholder="dd-mm-yyyy" value={edu.colstart} onChange={changedata}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridcolend">
                                <Form.Control type="date" name="colend" placeholder="dd-mm-yyyy" value={edu.colend} onChange={changedata}/>
                            </Form.Group>
                        </Row><br />
                        <Row className="mb-3">

                            <Form.Group as={Col} className='col-md-4' controlId="formGridcolqualification">
                                <Form.Control type="text" name="colqualification" placeholder="Qualification *" value={edu.colqualification} onChange={changedata}/>
                            </Form.Group>
                            <Form.Group as={Col} className='col-md-8' controlId="formGridcoldescription">
                                <Form.Control type="text" name="coldescription" placeholder="Description *" value={edu.coldescription} onChange={changedata}/>
                            </Form.Group>
                        </Row><br />
                        <hr/><br/>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridschool">
                                <Form.Control type="text" name="school" placeholder="School *" value={edu.school} onChange={changedata}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridScstart">
                                <Form.Control type="date" name="schstart" placeholder="dd-mm-yyyy" value={edu.schstart} onChange={changedata}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridscend">
                                <Form.Control type="date" name="schend" placeholder="dd-mm-yyyy" value={edu.schend} onChange={changedata}/>
                            </Form.Group>
                        </Row><br />
                        <Row className="mb-3">

                            <Form.Group as={Col} className='col-md-4' controlId="formGridscqualification">
                                <Form.Control type="text"  name="schqualification" placeholder="Qualification *" value={edu.schqualification} onChange={changedata}/>
                            </Form.Group>
                            <Form.Group as={Col} className='col-md-8' controlId="formGridschdesc">
                                <Form.Control type="text" name="schdescription" placeholder="Description *" value={edu.schdescription} onChange={changedata}/>
                            </Form.Group>
                        </Row><br />
                        <Button md={12} style={{background:"red", width:"90px", margin:"8px"}} onClick={()=>{props.history.goBack()}}>Back</Button>
                        <Button md={12} style={{background:"red", width:"90px", margin:"8px"}} onClick={goPro}>Next</Button>
                    </Card.Body>
                    <Card.Footer className="text-center">Page 2</Card.Footer>
                </Card>
            </div>
        </div>
    )
}

export default withRouter(Educational)
