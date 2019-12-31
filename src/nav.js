import React from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles= styled.div`
  .navbar-nav .nav-link{
    &:hover{
      color:white;
    }
  }
`;

function Navigation(){
  return(
    <Styles>
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand>Welcome</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/About">About</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/Projects">Projects</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Styles>
  )
}

export default Navigation;
