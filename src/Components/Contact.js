import React from 'react';
import "./Styles/Team-intro.css";
import {Container, Row, Col} from 'react-bootstrap';
import ImgFb from '../Images/Icons/facebook.png';
import ImgInsta from '../Images/Icons/instagram.png';
import ImgLinkedin from '../Images/Icons/linkedin.png'

function Contact() {
    return(
      
        <div className='contact'> 
            <h5 className='feedback'>Please share your feedback and suggestions about this newsletter and help us getting better!</h5>
            <a href='https://forms.office.com/r/4EhPTP8WQc' target="_blank" rel="noreferrer" ><h4 className='babelMedia'>Feedback</h4></a>
            <h5 className='follow'>Follow</h5>
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