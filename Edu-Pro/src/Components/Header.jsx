import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { FaLaptop } from "react-icons/fa";

function Header() {
  return (<>
   <Navbar expand="lg" className="bg-info">
      <Container>
        <FaLaptop />
        <Navbar.Brand href="#home">Edu-Pro</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
      <Nav.Link><Link to={"/"}>Home</Link></Nav.Link>
      <Nav.Link><Link to={"/course"}>Course</Link></Nav.Link>
      <Nav.Link><Link to={"/Contact"}>Contact</Link></Nav.Link>

         
             
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 </>
  )
}

export default Header