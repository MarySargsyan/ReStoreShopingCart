import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

// Stateless Functional Component 

const NavBar = ({totalCounters})=>{
  return (
    <Navbar collapseOnSelect bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
         <img style={{height: "20px", marginBottom:"8px"}} src="https://cdn-icons-png.flaticon.com/512/0/747.png"/>
         {"  "}

          ReStore
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{float: 'right'}} href="#home">
              <img style={{height: "18px", marginBottom:"4px"}} src ="https://cdn-icons.flaticon.com/png/512/2662/premium/2662503.png?token=exp=1655802053~hmac=d1d227d97238b06645256e52ec5f99d3"/>
              {"  "}
              {totalCounters}
            </Nav.Link>          
          </Nav>
        </Navbar.Collapse>
      </Container>
  </Navbar>
  );
}
 
export default NavBar;