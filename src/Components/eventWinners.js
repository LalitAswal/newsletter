import React from 'react';
import "./Styles/EventWinners.css"
import {Container, Col, Row } from 'react-bootstrap';
import RepublicDayQuiz from './Winners/RepublicDayQuiz';
import MovieQuiz from "./Winners/MovieQuiz";
import FitnessChallenge from "./Winners/FitnessChallenge";
import SportsQuiz from "./Winners/SportsQuiz";
import PuzzleContest from "./Winners/PuzzleContest";
import Song from "./Winners/Song";
import MonthlyRR from "./Winners/R&R";

function eventWinners() {
    return(
        <div className='events'>
            <div className='eventwin'>
                <h1>Event Winners</h1>
            </div>
            <p className="eventDesc">Tired and stressed out of executing daily task and testing? Don’t you worry, we got you covered. To keep our testers on the light mood, many small and big events are held at regular intervals where all the employees participate, laugh and have fun together. These events are generally hosted by our Beloved HR and the RECK team. During this pandemic time, where all are generally tied to their home for most of the time carrying out daily task, these events are the best stress busters. Here are some some events along with their winnner.</p>
            <hr className='eventLine' />
            
            <Container>
            <h3 className='month'>March</h3>
                <Row>
                    <Col className="republicQuiz">
                         <div>
                            <h5 >Tambola Quiz:</h5>
                            <p>Below are the winners of Tambola quiz.</p>
                         </div>
                         <RepublicDayQuiz />
                         <hr className='quizSeprator' />
                    </Col>
                </Row>
                <Row>
                    <Col className="republicQuiz">
                         <div>
                            <h5>TV Quiz:</h5>
                         </div>
                         <MovieQuiz />
                         <hr className='quizSeprator' />
                    </Col>
                </Row>
                <Row>
                    <Col className="republicQuiz">
                         <div>
                            <h5>Plank Challenge:</h5>
                         </div>
                         <FitnessChallenge />
                         <hr className='quizSeprator' />
                    </Col>
                </Row>
                <Row>
                    <Col className="republicQuiz">
                         <div>
                            <h5>Holi Quiz:</h5>
                        </div>
                         <SportsQuiz />
                         <hr className='quizSeprator' />
                    </Col>
                </Row>
                <Row>
                    <Col className="republicQuiz">
                         <div>
                            <h5>Passing the Colour:</h5>
                            <p>
                              The Winners of this challenge  is Team3 lead by Pulkit Baghel
                            </p>
                        </div>
                         <PuzzleContest />
                    </Col>
                </Row>
     
                <h3 className='month'>April</h3>
                <Row>
                    <Col className="republicQuiz">
                         <div>
                            <h5>Identify the Song:</h5>
                        </div>
                         <Song />
                         <hr className='quizSeprator' />
                    </Col>
                </Row>
                <Row>
                    <Col className="republicQuiz last">
                         <div>
                            <h5>R&R Quiz:</h5>
                        </div>
                         <MonthlyRR />
                    </Col>
                </Row>

            </Container>
        </div>
    )
}
export default eventWinners;