import React from 'react';
import {Container, Col, Row } from 'react-bootstrap';

function SportsQuiz() {
    return(
        <div>
            <Container>
            <Row>
                    <Col xs={12} md={4}>1. Akshita Bhardwaj </Col>
                    <Col xs={12} md={4}>2. Ashish Kanyal </Col>
                    <Col xs={12} md={4}>3. Himanshu Prashar  </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>4. Jasmeet Singh  </Col>
                    <Col xs={12} md={4}>5. Nabhdeep </Col>
                    <Col xs={12} md={4}>4. Niket Sharma  </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>7. Nikhil Varghese </Col>
                    <Col xs={12} md={4}>8. Parvesh Chauhan  </Col>
                    <Col xs={12} md={4}>9. Rahul Chhokar </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>10. Saurabh Bhatt</Col>
                    <Col xs={12} md={4}>11. Shashank Singh</Col>
                    <Col xs={12} md={4}>12. Swastik dhamija</Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>13. Tarun Sardana </Col>
                    <Col xs={12} md={4}>14. Tushar Choudhary </Col>
                    <Col xs={12} md={4}>Yash Bhatnagar </Col>
                </Row>
            </Container>
        </div>
    )
}
export default SportsQuiz;