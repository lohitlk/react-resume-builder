import React from 'react'
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap'

function Navigation() {
  return (
    <div>
      <Navbar expand={false} bg="primary" variant="dark">
        <Container fluid>
          
          <Navbar.Toggle aria-controls="offcanvasNavbar"/>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                
              </Nav>
              
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Navbar.Brand href="#">React Resume Builder</Navbar.Brand>
          <Nav.Link href="#" style={{color: "white"}}>Login</Nav.Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation
