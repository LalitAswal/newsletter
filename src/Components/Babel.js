import React from 'react';
import './Styles/Heading.css';
import logoimg from '../Images/Babel1.png';
import {Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
function Babel(){
    return(
      <Carousel>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={ require("../Images/head-background.jpg").default }
      alt=""
    />
    <Carousel.Caption>
      <h3>keywords studios family</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={ require("../Images/head-background3.jpg").default }
      alt="kwsbg"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ require("../Images/head-background2.jpg").default }
      alt="kwsbg"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>





      // <Container noGutters fluid className='heading'>
      //      <img src={ require("../Images/head-background.jpg").default } className='bg-img' alt='kwsbg' />
          
      // </Container>
        
    )
}

export default Babel;
