import React from 'react';
import "./Styles/Team-intro.css";
import {Container, Row, Col} from 'react-bootstrap';
import ImgFb from '../Images/Icons/facebook.png';
import ImgInsta from '../Images/Icons/instagram.png';
import ImgLinkedin from '../Images/Icons/linkedin.png'

function Contact() {
    return(
      
        <div className='contact'>
            
            <h5>You can reach us at:</h5>
            <a href='https://www.babelmedia.com/' target="_blank" rel="noreferrer" ><h4 className='babelMedia'>Babel MediaPrivate Limited</h4></a>
            <h5 className='follow'>Follow us on</h5>
            <Container>
            
                <Row>
                    <Col>
                      <a className='iconList' href='https://www.facebook.com/KeywordsStudios/' target="_blank" rel="noreferrer" >
                        <img alt='fb' src={ImgFb} className='iconImg' />
                      </a>
                      <a className='iconList' href='https://www.instagram.com/keywordsstudiosfamily/?hl=en' target="_blank" rel="noreferrer" >
                        <img alt='fb' src={ImgInsta} className='iconImg' />
                      </a>
                      <a className='iconList' href='https://www.linkedin.com/company/keywordsstudios/mycompany/' target="_blank" rel="noreferrer" >
                        <img alt='fb' src={ImgLinkedin} className='iconImg' />
                      </a>
                    </Col>
                </Row>
            </Container>
            
            
        </div>

    )
}
export default Contact; 