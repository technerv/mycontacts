import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';

function Heading() {

    return (
      <>
      <Navbar bg="myNav" variant="dark" sticky="top" expand="sm" collapseOnSelect>
            <Navbar.Brand href="/">
              Phone Book Django React App
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
            <Nav>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
            </Navbar.Collapse>

      </Navbar>
      </>
    )
}

export default Heading;
