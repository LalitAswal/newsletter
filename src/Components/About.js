import React from 'react';
import {Container} from 'react-bootstrap';
import './Styles/BSTC.css';

function About(){
    return(
        <Container className='about'>
            <h1 className='bstc-head'>About Us</h1>
            <div>
                <h1 className='about-intro'>Read not the Times, read the Eternities.</h1>
                <h3 className='about-des'>
                Diving into the happenings at keywords India.. Every member in this family is talented and unique but some brought glory and pride in this team. Lets get a sight of past (recent events), present (ongoing things) and future (our vision, our plans)
                </h3>
            </div>
        </Container>
    )
}

export default About;