import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { withRouter } from "react-router-dom";


function ExtraDetails(props) {
    return (
        <div>
            <div style={{ padding: "20px" }}>
                <Card className="container">
                    <Card.Header className="text-center">Extra Details</Card.Header>
                    <Card.Body>
                        <p>Skills/Languages</p>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control type="text" placeholder="Skill 1" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="text" placeholder="Skill 2" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="text" placeholder="skill 3" />
                            </Form.Group>
                        </Row><br />
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control type="text" placeholder="Skill 4" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="text" placeholder="Skill 5" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="text" placeholder="skill 6" />
                            </Form.Group>
                        </Row><br />
                        <hr/><br/>
                        <p>Interest</p>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control type="text" placeholder="Interest 1" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="text" placeholder="Interest 2" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="text" placeholder="Interest 3" />
                            </Form.Group>
                        </Row><br />
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control type="text" placeholder="Interest 4" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="text" placeholder="Interest 5" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="text" placeholder="Interest 6" />
                            </Form.Group>
                        </Row><br />
                       
                        <Button md={12} style={{background:"red", width:"90px", margin:"8px"}} onClick={()=>{props.history.goBack()}}>Back</Button>
                        <Button md={12} style={{background:"red", width:"90px", margin:"8px", cursor: "not-allowed"}}>Next</Button>
                    </Card.Body>
                    <Card.Footer className="text-center"><Button md={12} varient="primary">Download Resume</Button></Card.Footer>
                </Card>
            </div>
        </div>
    )
}

export default withRouter(ExtraDetails)
