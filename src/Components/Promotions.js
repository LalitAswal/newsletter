import React from 'react';
import {Container, Col, Row } from 'react-bootstrap';
import './Styles/BSTC.css';
function Promotions(){
    return(
        <div className='bstc'>
            <Container>
            <h1 className='promotion-head' >Promotions</h1>
            <p className='promotion-intro'>Celebrating our employee’s achievements as they are Encouraging others to strive for advancement</p>
                <div className='designation'>
                 <Row>
                    <Col>
                        <h4 className='designation-head'>Senior Manager</h4>
                    </Col>
                 </Row>
                 <Row>
                    <Col>
                    <img src={ require('../Images/Promotions/Deep.png').default } className='winner-img' alt='Deep' />
                        <h3 className='bstc-name' >Deep Singh Rajput</h3>
                    </Col>
                 </Row>
                </div>
                <hr />
                 <div className='designation'>
                    <Row>
                       <Col>
                          <h4 className='designation-head'>Senior Executive Talent Acquisition</h4>
                       </Col>
                     </Row>
                     <Row>
                       <Col>
                          <img src={require('../Images/Promotions/Vandana.png').default} className='winner-img' alt='Vandana' />
                          <h3 className='bstc-name' >Vandna Verma Kataria</h3>
                       </Col>
                     </Row>
                </div>
                <hr />
                <div className='designation'>
                    <Row>
                       <Col>
                           <h4 className='designation-head'>Associate Project Manager</h4>
                       </Col>
                    </Row>
                    <Row>
                       <Col>
                          <img src={require('../Images/Promotions/Harpaal.png').default} className='winner-img' alt='Harpaal' />
                          <h3 className='bstc-name' >Harpal Singh Cheema</h3>
                       </Col>
                       <Col>
                          <img src={ require('../Images/Promotions/Thomas.png').default  } className='winner-img' alt='Thomas' />
                          <h3 className='bstc-name' >Thomas George</h3>
                       </Col>
                    </Row>
                    <Row>
                       <Col>
                          <img src={require('../Images/Promotions/Shashwat.png').default} className='winner-img' alt='Shashwat' />
                          <h3 className='bstc-name' >Shashwat Iyer</h3>
                       </Col>
                       <Col>
                          <img src={require('../Images/Promotions/Indrani.png').default} className='winner-img' alt='Indrani' />
                          <h3 className='bstc-name' >Indrani Chowdhury</h3>
                       </Col>
                    </Row>
                </div>
                <hr />
                <div className='designation'>
                    <Row>
                    <Col>
                           <h4 className='designation-head'>QA Test Lead</h4>
                       </Col>
                    </Row>
                    <Row>
                       <Col>
                          <img src={require('../Images/Promotions/Chetna.png').default} className='winner-img' alt='Chetna' />
                          <h3 className='bstc-name' >Chetna Deshwal</h3>
                       </Col>
                       <Col>
                          <img src={require('../Images/Promotions/Ashish.png').default} className='winner-img' alt='Ashish' />
                          <h3 className='bstc-name' >Ashish Kumar</h3>
                       </Col>
                       <Col>
                          <img src={require('../Images/Promotions/Aman.png').default} className='winner-img' alt='Aman' />
                          <h3 className='bstc-name' >Aman Bedi</h3>
                       </Col>
                    </Row>
                </div>
                <hr />
                <div className='designation'>
                    <Row>
                       <Col>
                           <h4 className='designation-head'>Senior Tester</h4>
                       </Col>
                    </Row>
                    <Row>
                       <Col>
                          <img src={require('../Images/Promotions/Arman.png').default} className='winner-img' alt='Arman' />
                          <h3 className='bstc-name' >Arman Tiwari</h3>
                          
                       </Col>
                       <Col>
                           <img src={require('../Images/Promotions/Himanshu.png').default} className='winner-img' alt='Himanshu' />
                           <h3 className='bstc-name' >Himanshu Parashar</h3>
                           
                       </Col>
                       <Col>
                           <img src={require('../Images/Promotions/Piyush.png').default} className='winner-img' alt='Piyush' />
                           <h3 className='bstc-name' >Piyush Bhadani</h3>
                           
                      </Col>
                    </Row>
                    <Row>
                       <Col>
                           <img src={require('../Images/Promotions/Tushar.png').default} className='winner-img' alt='Tushar' />
                           <h3 className='bstc-name' >Tushar Tikshanshu</h3>
                           
                       </Col>
                       <Col>
                           <img src={require('../Images/Promotions/Pushpankar.png').default} className='winner-img' alt='Pushpankar' />
                           <h3 className='bstc-name' >Pushpankar Kiran</h3>
                           
                      </Col>
                       <Col>
                          <img src={require('../Images/Promotions/Rahul.png').default} className='winner-img' alt='Rahul' />
                          <h3 className='bstc-name' >Rahul mathur</h3>
                       </Col>
                    </Row>
                </div> 
            </Container>
        </div>
    )
}

export default Promotions;