import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { withRouter } from "react-router-dom";

function ProjectsDeveloped(props) {
    let goExp = ()=>{
        props.history.push("/Experience")
    }
    return (
        <div>
            <div style={{ padding: "20px" }}>
                <Card className="container">
                    <Card.Header className="text-center">Projects Developed</Card.Header>
                    <Card.Body>
                        <h4>Project1</h4>
                            <Form.Group controlId="formGridEmail">
                                <Form.Control type="text" placeholder="Title *" />
                            </Form.Group><br/>

                            <Form.Group controlId="formGridPassword">
                                <Form.Control type="text" placeholder="Link *" />
                            </Form.Group><br/>

                            <Form.Group controlId="formGridPassword">
                                <Form.Control type="text" placeholder="Description *" />
                            </Form.Group>
                            <br />
                        <hr /><br />
                        <h4>Project2</h4>
                        <Form.Group controlId="formGridEmail">
                                <Form.Control type="text" placeholder="Title *" />
                            </Form.Group><br/>

                            <Form.Group controlId="formGridPassword">
                                <Form.Control type="text" placeholder="Link *" />
                            </Form.Group><br/>
                            
                            <Form.Group controlId="formGridPassword">
                                <Form.Control type="text" placeholder="Description *" />
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
