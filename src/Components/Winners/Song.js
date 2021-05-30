import React from 'react';
import {Container, Col, Row } from 'react-bootstrap';

function Song() {
    return(
        <div>
            <Container>
            <Row>
                    <Col xs={12} md={4}>1. Inder Parhar   </Col>
                    <Col xs={12} md={4}>2. Jatin Chawla   </Col>
                    <Col xs={12} md={4}>3. Karan Sharma    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>4. Kartikey Mahajan  </Col>
                    <Col xs={12} md={4}>5. Niket Sharma    </Col>
                    <Col xs={12} md={4}>6. Pratik Pal   </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>7. Rahat Pal    </Col>
                    <Col xs={12} md={4}>8. Rahul Chhoker    </Col>
                    <Col xs={12} md={4}>9. Rohit Jain   </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>10. Saurabh Bhatt </Col>
                    <Col xs={12} md={4}></Col>
                    <Col xs={12} md={4}></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Song;