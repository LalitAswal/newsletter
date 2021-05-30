import React from 'react';
import {Container, Col, Row } from 'react-bootstrap';

function MovieQuiz() {
    return(
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={4}>1. Abhishek Uppal</Col>
                    <Col xs={12} md={4}>2. Abhishek Raj </Col>
                    <Col xs={12} md={4}>3. Aman Bedi </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>4. Daksh Dutta</Col>
                    <Col xs={12} md={4}>5. Himanshi Hurriya  </Col>
                    <Col xs={12} md={4}>4. Himanshu Parashar  </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>7. Mridul Kukreja  </Col>
                    <Col xs={12} md={4}>8. Nirdosh Kumar  </Col>
                    <Col xs={12} md={4}>9. Rahul Solanki  </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>10. Rohit Jain</Col>
                    <Col xs={12} md={4}>11. Shashank Singh</Col>
                    <Col xs={12} md={4}>12. Tarun Sardana</Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>13. Shashi Shekhar Sharma </Col>
                    <Col xs={12} md={4}>14. Utkarsh Chauhan </Col>
                    <Col xs={12} md={4}>15. Shashwat Iyer </Col>
                </Row>
            </Container>
        </div>
    )
}
export default MovieQuiz;