import React from 'react';
import "./Styles/Team-intro.css";
import {Container, Row, Col} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';



function Contact() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
     <Container>
      <Navbar.Brand href="">
      <img
      width="30"
      height="30"
      className="d-inline-block align-top"
        src={ require("../Images/Babel1.png").default } 
        
      />{' '}
      Keywords India Scoop
    </Navbar.Brand>
    
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="#experts">Experts Corner</Nav.Link>
      
          <NavDropdown title="Promotions" id="collasible-nav-dropdown"  >
          <NavDropdown.Item href="#seniormanager">Senior Manager</NavDropdown.Item>
          <NavDropdown.Item href="#seta">Senior Exective Talent Acquisition</NavDropdown.Item>
          <NavDropdown.Item href="#apm">Associate Project Manager</NavDropdown.Item>
          <NavDropdown.Item href="#test_lead">QA Test Lead</NavDropdown.Item>
          <NavDropdown.Item href="#senior_tester">Senior Tester</NavDropdown.Item>
          
          </NavDropdown>
          <Nav.Link href="#BSTC">BSTC Champions</Nav.Link>
          <Nav.Link href="#event">Event Winner</Nav.Link>
          <Nav.Link href="#pricing">BPL Updates</Nav.Link>
          <Nav.Link href="#pricing">Quiz</Nav.Link>
          
          </Nav> 
         
          <a href='https://www.facebook.com/KeywordsStudios/'  target="_blank" rel="noreferrer"><i id='facebookid'  class="fab fa-facebook-square" ></i></a>
                      
          <a href='https://www.instagram.com/keywordsstudiosfamily/?hl=en' target="_blank" rel="noreferrer"><i class="fab fa-instagram-square"></i></a>
          <a href='https://www.linkedin.com/company/keywordsstudios/mycompany/' target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a>
         <a href='https://forms.office.com/r/4EhPTP8WQc' target="_blank" rel="noreferrer"> <i class="fas fa-comment-alt"></i></a>
        
         </Navbar.Collapse>
         </Container>
        
        </Navbar>
        

   )
}
export default Contact; 