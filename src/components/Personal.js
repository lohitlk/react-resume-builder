import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { withRouter } from "react-router-dom";

function Personal(props) {
  const [personal, setpersonal] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneno: "",
    weblink: "",
    gitlink: "",
    twitterlink: "",
    instalink: "",
    linkedin: "",
    facebook: "",
  })
  
  let changedata = (event) => {
    setpersonal({
      ...personal,
      [event.target.name]: event.target.value
    })
  }


  let goEdu = () => {
    props.history.push("/Education")
    props.dataPush(personal)
  }
  return (
    <div style={{ padding: "20px" }}>
      <Card className="container">
        <Card.Header className="text-center">Personal Details</Card.Header>
        <Card.Body>
          <Row>
            <Col md={6} xs={4}>
              <Form.Group as={Col} controlId="firstname">
                <Form.Control type="text" name="firstname" placeholder="First Name *" className="" value={personal.firstname} onChange={changedata} />
              </Form.Group><br />

              <Form.Group as={Col} controlId="Email">
                <Form.Control type="email" name="email" placeholder="Email *" value={personal.email} onChange={changedata} />
              </Form.Group><br />

              <Form.Group as={Col} controlId="weblink">
                <Form.Control type="text" name='weblink' placeholder="Your Website" value={personal.weblink} onChange={changedata} />
              </Form.Group>
              <br />
              <Form.Group as={Col} controlId="linkedin">
                <Form.Control type="text" name='linkedin' placeholder="Linked In" value={personal.linkedin} onChange={changedata} />
              </Form.Group>
              <br />
              <Form.Group as={Col} controlId="facebook">
                <Form.Control type="text" name='facebook' placeholder="Facebook" value={personal.facebook} onChange={changedata} />
              </Form.Group>
            </Col>
            <br />
            <Col md={6} xs={4}>
              <Form.Group as={Col} controlId="lastname">
                <Form.Control type="text" name='lastname' placeholder="Last Name *" value={personal.lastname} onChange={changedata} />
              </Form.Group><br />

              <Form.Group as={Col} controlId="phoneno">
                <Form.Control type="text" name='phoneno' placeholder="Phone Number" value={personal.phoneno} onChange={changedata} />
              </Form.Group><br />

              <Form.Group as={Col} controlId="gitlink">
                <Form.Control type="text" name='gitlink' placeholder="GitHub" value={personal.gitlink} onChange={changedata} />
              </Form.Group>
              <br />
              <Form.Group as={Col} controlId="twitterlink">
                <Form.Control type="text" name='twitterlink' placeholder="Twitter" value={personal.twitterlink} onChange={changedata} />
              </Form.Group>
              <br />
              <Form.Group as={Col} controlId="instagram">
                <Form.Control type="text" name='instalink' placeholder="Instagram" value={personal.instalink} onChange={changedata} />
              </Form.Group>
              <br />
              <Button md={12} onClick={goEdu} style={{ background: "red", width: "90px" }}>Next</Button>
            </Col>
          </Row><br />

        </Card.Body>
        <Card.Footer className="text-center">Page 1</Card.Footer>
      </Card>
    </div>
  )
}

export default withRouter(Personal) 
