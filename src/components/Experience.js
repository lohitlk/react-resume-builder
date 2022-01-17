import React, { useState } from 'react'
import { Button, Card, Col, Form, Row, InputGroup } from 'react-bootstrap'
import { withRouter } from "react-router-dom";

function Experience(props) {
    const [experience, setexperience] = useState({
        institute1:"",
        position1:"",
        duration1:"",
        description1:"",
        institute2:"",
        position2:"",
        duration2:"",
        description2:"",
    })

    let changedata =(event)=>{
        setexperience({
            ...experience,
            [event.target.name]:event.target.value
        })
    }
    let goExtra = () => {
        props.history.push("/Extras")
        props.dataPush(experience)
    }
    return (
        <div>
            <div style={{ padding: "20px" }}>
                <Card className="container">
                    <Card.Header className="text-center">Experience Details</Card.Header>
                    <Card.Body>
                        <p>Experience 1</p>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridInstitute">
                                <Form.Control type="text" name='institute1' placeholder="Institue/Organization *" value={experience.institute1} onChange={changedata}/>
                             
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridposition">
                                <Form.Control type="text" name='position1' placeholder="Position *" value={experience.position1} onChange={changedata} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridduration">
                                <Form.Control type="number" name='duration1' placeholder="Duration *" value={experience.duration1} onChange={changedata}/>
                            </Form.Group>
                        </Row><br />
                        <Form.Group as={Col} controlId="formGriddescription">
                            <Form.Control type="text" name='description1' placeholder="Description *" value={experience.description1} onChange={changedata}/>
                        </Form.Group>
                        <hr /><br />
                        <p>Experience 2</p>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridorganization">
                                <Form.Control type="text" name='institute2' placeholder="Institue/Organization *" value={experience.institute2} onChange={changedata}  />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridposition">
                                <Form.Control type="text" name='position2' placeholder="Position *" value={experience.position2} onChange={changedata}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridduration">
                                <Form.Control type="number" name='duration2' placeholder="Duration *" value={experience.duration2} onChange={changedata}/>
                            </Form.Group>
                        </Row><br />
                        <Form.Group as={Col} controlId="formGriddescription">
                            <Form.Control type="text" name='description2' placeholder="Description *" value={experience.description2} onChange={changedata}/>
                        </Form.Group>
                        <Button md={12} style={{ background: "red", width: "90px", margin: "8px" }} onClick={() => { props.history.goBack() }}>Back</Button>
                        <Button md={12} style={{ background: "red", width: "90px", margin: "8px" }} onClick={goExtra}>Next</Button>
                    </Card.Body>
                    <Card.Footer className="text-center">Page 4</Card.Footer>
                </Card>
            </div>
        </div>
    )
}

export default withRouter(Experience)
