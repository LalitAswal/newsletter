import React from 'react';
import {Container, Col, Row } from 'react-bootstrap';

function MovieQuiz() {
    return(
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={4}>1. Abhishek Uppal</Col>
                    <Col xs={12} md={4}>2. Adityaveer Singh Rathe</Col>
                    <Col xs={12} md={4}>3. Bhuvesh Sachdev</Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>4. Harpal Singh Cheema</Col>
                    <Col xs={12} md={4}>5. Himanshu Prashar </Col>
                    <Col xs={12} md={4}>4. Mahipal </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>7. Manur Yadav </Col>
                    <Col xs={12} md={4}>8. Rahul Solanki </Col>
                    <Col xs={12} md={4}>9. Shashi Shekhar Sharma </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>10. Shikhar Sharma</Col>
                    <Col xs={12} md={4}>11. Siddharth Pandey</Col>
                    <Col xs={12} md={4}>12. Tarun Sardana</Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>13. Tushar Choudhary</Col>
                    <Col xs={12} md={4}>14. Utkarsh Chauhan </Col>
                    <Col xs={12} md={4}></Col>
                </Row>
            </Container>
        </div>
    )
}
export default MovieQuiz;