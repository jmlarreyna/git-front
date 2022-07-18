import React, { useState } from "react";
import {Container, Navbar, Nav,} from "react-bootstrap";




const NavBar = () => {

  return (
    <Navbar className="normal"  expand="lg">
      <Container fluid>
    

        <Nav.Link className="text1" href="/">ADOPTANDO</Nav.Link>

        

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="inicial" href="/">Home</Nav.Link>
            <Nav.Link className="text" href="/mascotas">Mascotas</Nav.Link>
            <Nav.Link className="text" href="/formulario">Contacto</Nav.Link>
            
        


          </Nav>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
