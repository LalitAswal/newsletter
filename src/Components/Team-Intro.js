import React from "react";
import "./Styles/Team-intro.css";
import {Container, Col, Row } from 'react-bootstrap';
import Karan from "../Images/Karan-Sharma.png";
import Vimmy from '../Images/Vimmy-Vashishta.png';
import Yash from "../Images/Yash-Bhatnagar.png";
import Jay from "../Images/Jay-Bhat.png";
import Rahat from "../Images/Rahat-Pal.png";


function TeamIntro() {
    return(
        <div className='team-intro'>
            <Container>
            <h1 className='team-head'>Our Team</h1>
              <Row className="group">
                <Col>
                    <div>
                        <img className='introImage' src={Karan} alt='Karan' />
                        <h4 className='member'>Karan Sharma</h4>
                        <p>Content Editor/Web Designer</p>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img className='introImage' src={Vimmy} alt="Vimmy" />
                        <h4 className='member'>Vimmy Vashisht</h4>
                        <p>Content Writer</p>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img className='introImage' src={Yash} alt="Yash" />
                        <h4 className='member'>Yash Bhatnagar</h4>
                        <p>Content Writer</p>
                    </div>
                </Col>
               </Row>
               <Row className="group">
                <Col>
                    <div>
                        <img className='introImage' src={Rahat} alt="Rahat" />
                        <h4 className='member'>Rahat Pal</h4>
                        <p>Content Writer</p>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img className='introImage' src={Jay} alt="Jay" />
                        <h4 className='member'>Jay Bhat</h4>
                        <p>Web Developer</p>
                    </div>
                </Col>
               </Row>
            </Container>
        </div>
    )
}
export default TeamIntro;