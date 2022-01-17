import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { withRouter } from "react-router-dom";


function ExtraDetails(props) {
    const [extra, setextra] = useState({
        skill1:"",
        skill2:"",
        skill3:"",
        skill4:"",
        skill5:"",
        skill6:"",
        interest1:"",
        interest2:"",
        interest3:"",
        interest4:"",
        interest5:"",
        interest6:"",
    })

    let changedata = (event)=>{
        setextra({
            ...extra,
            [event.target.name] : event.target.value
        })
    }
    let submitdata =()=>{
        props.dataPush(extra)
    }
    return (
        <div>
            <div style={{ padding: "20px" }}>
                <Card className="container">
                    <Card.Header className="text-center">Extra Details</Card.Header>
                    <Card.Body>
                        <p>Skills/Languages</p>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridskill1">
                                <Form.Control name='skill1' type="text" placeholder="Skill 1" value={extra.skill1} onChange={changedata}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridskill2">
                            <Form.Control name='skill2' type="text" placeholder="Skill 2" value={extra.skill2} onChange={changedata}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridskill3">
                            <Form.Control name='skill3' type="text" placeholder="Skill 3" value={extra.skill3} onChange={changedata}/>
                            </Form.Group>
                        </Row><br />
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridskill4">
                            <Form.Control name='skill4' type="text" placeholder="Skill 4" value={extra.skill4} onChange={changedata}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridskill5">
                            <Form.Control name='skill5' type="text" placeholder="Skill 5" value={extra.skill5} onChange={changedata}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridskill6">
                            <Form.Control name='skill6' type="text" placeholder="Skill 6" value={extra.skill6} onChange={changedata}/>
                            </Form.Group>
                        </Row><br />
                        <hr/><br/>
                        <p>Interest</p>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridinterest1">
                                <Form.Control type="text" name='interest1' placeholder="Interest 1" value={extra.interest1} onChange={changedata} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridinterest2">
                                <Form.Control type="text" name='interest2' placeholder="Interest 2" value={extra.interest2} onChange={changedata} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridinterest3">
                                <Form.Control type="text" name='interest3' placeholder="Interest 3" value={extra.interest3} onChange={changedata} />
                            </Form.Group>
                        </Row><br />
                        <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridinterest4">
                                <Form.Control type="text" name='interest4' placeholder="Interest 4" value={extra.interest4} onChange={changedata} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridinterest5">
                                <Form.Control type="text" name='interest5' placeholder="Interest 5" value={extra.interest5} onChange={changedata} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridinterest6">
                                <Form.Control type="text" name='interest6' placeholder="Interest 6" value={extra.interest6} onChange={changedata} />
                            </Form.Group>
                        </Row><br />
                       
                        <Button md={12} style={{background:"red", width:"90px", margin:"8px"}} onClick={()=>{props.history.goBack()}}>Back</Button>
                        <Button md={12} style={{background:"red", width:"90px", margin:"8px"}} onClick={submitdata}>Submit</Button>
                    </Card.Body>
                    <Card.Footer className="text-center"><Button md={12} varient="primary">Download Resume</Button></Card.Footer>
                </Card>
            </div>
        </div>
    )
}

export default withRouter(ExtraDetails)
