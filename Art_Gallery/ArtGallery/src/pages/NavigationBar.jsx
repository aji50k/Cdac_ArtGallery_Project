import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { ROUTES } from '../constaints/RouteConstants';
import { LinkContainer } from "react-router-bootstrap";


export function NavigationBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Product App</Navbar.Brand>
      <Nav className="me-auto">
        
            <LinkContainer to={ROUTES.HOME}>
            <Nav.Link >Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to={ROUTES.GALLERY}>
            <Nav.Link >Gallery</Nav.Link>
            </LinkContainer>

            <LinkContainer to={ROUTES.PORTFOLIO_CREATION}>
            <Nav.Link >PortfolioCreation</Nav.Link>
            </LinkContainer>
            
            <LinkContainer to={ROUTES.USER_PROFILES}>
            <Nav.Link >UserProfile</Nav.Link>
            </LinkContainer>
      </Nav>
    </Container>
  </Navbar> 
);
}

