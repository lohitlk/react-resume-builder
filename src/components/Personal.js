import React, {useState} from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { withRouter } from "react-router-dom";

function Personal(props) {
  const [personal, setpersonal] = useState()

  let goEdu = ()=>{
props.history.push("/Education")
  }
  return (
    <div style={{padding: "20px"}}>
      <Card className="container">
        <Card.Header className="text-center">Personal Details</Card.Header>
        <Card.Body>
          <Row>
            <Col md={6} xs={4}>
              <Form.Group as={Col} controlId="firstname">
                <Form.Control type="text" placeholder="First Name *" />
              </Form.Group><br/>

              <Form.Group as={Col} controlId="firstname">
                <Form.Control type="text" placeholder="Email *" />
              </Form.Group><br/>

              <Form.Group as={Col} controlId="firstname">
                <Form.Control type="text" placeholder="Your Website" />
              </Form.Group>
              <br/>
              <Form.Group as={Col} controlId="firstname">
                <Form.Control type="text" placeholder="Linked In" />
              </Form.Group>
              <br/>
              <Form.Group as={Col} controlId="firstname">
                <Form.Control type="text" placeholder="Facebook" />
              </Form.Group>
            </Col>
            <br/>
            <Col md={6} xs={4}>
            <Form.Group as={Col} controlId="firstname">
                <Form.Control type="text" placeholder="Last Name *" />
              </Form.Group><br/>

              <Form.Group as={Col} controlId="firstname">
                <Form.Control type="text" placeholder="Phone Number" />
              </Form.Group><br/>

              <Form.Group as={Col} controlId="firstname">
                <Form.Control type="text" placeholder="GitHub" />
              </Form.Group>
              <br/>
              <Form.Group as={Col} controlId="firstname">
                <Form.Control type="text" placeholder="Twitter" />
              </Form.Group>
              <br/>
              <Form.Group as={Col} controlId="firstname">
                <Form.Control type="text" placeholder="Instagram" />
              </Form.Group>
              <br/>
            <Button md={12} onClick={goEdu} style={{background:"red", width:"90px"}}>Next</Button>
            </Col>
          </Row><br/>
          
        </Card.Body>
        <Card.Footer className="text-center">Page 1</Card.Footer>
      </Card>
    </div>
  )
}

export default withRouter(Personal) 
