import React from 'react';
import {Container, Col, Row } from 'react-bootstrap';
import './Styles/BSTC.css';
import Arman from '../Images/Promotions/Arman.png';
import Chetna from '../Images/Promotions/Chetna.png';
import Harpaal from '../Images/Promotions/Harpaal.png';
import Himanshu from '../Images/Promotions/Himanshu.png';
import Piyush from '../Images/Promotions/Piyush.png';
import Pushpankar from '../Images/Promotions/Pushpankar.png';
import Tushar from '../Images/Promotions/Tushar.png';

function Promotions(){
    return(
        <div className='bstc'>
            <Container>
            <h1 className='promotion-head' >Promotions</h1>
            <p className='promotion-intro'>Celebrating our employee’s achievements as they are Encouraging others to strive for advancement</p>
                <Row className='bstc-winner'>
                    <Col>
                        <img src={Harpaal} className='winner-img' alt='Harpaal' />
                        <h3 className='bstc-name' >Harpaal Cheema</h3>
                        <h6>Associate Project Manager</h6>
                    </Col>
                    
                    <Col>
                        <img src={Chetna} className='winner-img' alt='Chetna' />
                        <h3 className='bstc-name' >Chetna Deshwal</h3>
                        <h6>QA Test Lead</h6>
                    </Col>
                    <Col>
                        <img src={Arman} className='winner-img' alt='Arman' />
                        <h3 className='bstc-name' >Arman Tiwari</h3>
                        <h6>Senior Tester</h6>
                    </Col>
                </Row>
                <Row className='bstc-winner'>
                    <Col>
                        <img src={Himanshu} className='winner-img' alt='Himanshu' />
                        <h3 className='bstc-name' >Himanshu Parashar</h3>
                        <h6>Senior Tester</h6>
                    </Col>
                    <Col>
                        <img src={Piyush} className='winner-img' alt='Piyush' />
                        <h3 className='bstc-name' >Piyush Bhadani</h3>
                        <h6>Senior Tester</h6>
                    </Col>
                    <Col>
                        <img src={Tushar} className='winner-img' alt='Tushar' />
                        <h3 className='bstc-name' >Tushar Tikshanshu</h3>
                        <h6>Senior Tester</h6>
                    </Col>
                </Row>
                <Row className='bstc-winner'>
                <Col>
                        <img src={Pushpankar} className='winner-img' alt='Pushpankar' />
                        <h3 className='bstc-name' >Pushpankar Kiran</h3>
                        <h6>Senior Tester</h6>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Promotions;