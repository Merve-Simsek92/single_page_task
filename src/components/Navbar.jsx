import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbars = () => {
  return (
 
  
    <Navbar collapseOnSelect className='navbar navbar-expand-lg navbar-dark bg-dark shadow-lg fixed-top mb-' expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#">Merve Tech</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
       <Nav>
          <Nav.Link href="#aboutus">About</Nav.Link>
          <Nav.Link href="#portfolio">
          Portfolio
          </Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#services" >Services</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  )
}

export default Navbars