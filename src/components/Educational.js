import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { withRouter, useHistory } from "react-router-dom";

function Educational(props) {
    let history = useHistory();
    let goPro = ()=>{
        props.history.push("/Projects")
    }
    return (
        <div>
            <div style={{ padding: "20px" }}>
                <Card className="container">
                    <Card.Header className="text-center">Educational Details</Card.Header>
                    <Card.Body>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control type="text" placeholder="Coloege/University *" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="date" placeholder="dd-mm-yyyy" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="date" placeholder="dd-mm-yyyy" />
                            </Form.Group>
                        </Row><br />
                        <Row className="mb-3">

                            <Form.Group as={Col} className='col-md-4' controlId="formGridPassword">
                                <Form.Control type="text" placeholder="Qualification *" />
                            </Form.Group>
                            <Form.Group as={Col} className='col-md-8' controlId="formGridPassword">
                                <Form.Control type="text" placeholder="Description *" />
                            </Form.Group>
                        </Row><br />
                        <hr/><br/>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control type="text" placeholder="Coloege/University *" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="date" placeholder="dd-mm-yyyy" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="date" placeholder="dd-mm-yyyy" />
                            </Form.Group>
                        </Row><br />
                        <Row className="mb-3">

                            <Form.Group as={Col} className='col-md-4' controlId="formGridPassword">
                                <Form.Control type="text" placeholder="Qualification *" />
                            </Form.Group>
                            <Form.Group as={Col} className='col-md-8' controlId="formGridPassword">
                                <Form.Control type="text" placeholder="Description *" />
                            </Form.Group>
                        </Row><br />
                        <Button md={12} style={{background:"red", width:"90px", margin:"8px"}} onClick={()=>{history.goBack()}}>Back</Button>
                        <Button md={12} style={{background:"red", width:"90px", margin:"8px"}} onClick={goPro}>Next</Button>
                    </Card.Body>
                    <Card.Footer className="text-center">Page 1</Card.Footer>
                </Card>
            </div>
        </div>
    )
}

export default withRouter(Educational)
