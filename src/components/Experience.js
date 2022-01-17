import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { withRouter} from "react-router-dom";

function Experience(props) {
    let goExtra = ()=>{
        props.history.push("/Extras")
    }
    return (
        <div>
            <div style={{ padding: "20px" }}>
                <Card className="container">
                    <Card.Header className="text-center">Experience Details</Card.Header>
                    <Card.Body>
                        <p>Experience 1</p>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control type="text" placeholder="Institue/Organization *" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="text" placeholder="Position *" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="number" placeholder="Duration *" />
                            </Form.Group>
                        </Row><br />
                        <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="text" placeholder="Description *" />
                            </Form.Group>
                        <hr/><br/>
                        <p>Experience 2</p>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridorganization">
                                <Form.Control type="text" placeholder="Institue/Organization *" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPosition">
                                <Form.Control type="text" placeholder="Position *" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="number" placeholder="Duration *" />
                            </Form.Group>
                        </Row><br />
                        <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="text" placeholder="Description *" />
                            </Form.Group>
                        <Button md={12} style={{background:"red", width:"90px", margin:"8px"}} onClick={()=>{props.history.goBack()}}>Back</Button>
                        <Button md={12} style={{background:"red", width:"90px", margin:"8px"}} onClick={goExtra}>Next</Button>
                    </Card.Body>
                    <Card.Footer className="text-center">Page 4</Card.Footer>
                </Card>
            </div>
        </div>
    )
}

export default withRouter(Experience)
