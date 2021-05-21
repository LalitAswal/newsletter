import React from 'react';
import "./Styles/EventWinners.css"
import {Container, Col, Row } from 'react-bootstrap';
import RepublicDayQuiz from './Winners/RepublicDayQuiz';
import MovieQuiz from "./Winners/MovieQuiz";
import FitnessChallenge from "./Winners/FitnessChallenge";
import SportsQuiz from "./Winners/SportsQuiz";


function eventWinners() {
    return(
        <div className='events'>
            <div className='eventwin'>
                <h1>Event Winners</h1>
            </div>
            <p className="eventDesc">Tired and stressed out of executing daily task and testing? Don’t you worry, we got you covered. To keep our testers on the light mood, many small and big events are held at regular intervals where all the employees participate, laugh and have fun together. These events are generally hosted by our Beloved HR and the RECK team. During this pandemic time, where all are generally tied to their home for most of the time carrying out daily task, these events are the best stress busters. Here are some some events along with their winnner.</p>
            <hr className='eventLine' />
            
            <Container>
                <Row>
                    <Col className="republicQuiz">
                         <div>
                            <h5 >Republic Day Quiz:</h5>
                            <p>This was an event conducted for the auspicious day of Republic Day whose winners are as follows:</p>
                         </div>
                         <RepublicDayQuiz />
                         <hr className='quizSeprator' />
                    </Col>
                </Row>
                <Row>
                    <Col className="republicQuiz">
                         <div>
                            <h5>Movie Quiz:</h5>
                            <p>This event was organized where clips of movies were played and we had to recognize movie using the clip that was played. Interesting game, really had us worked up. All participated but here are the winners of the game: </p>
                         </div>
                         <MovieQuiz />
                         <hr className='quizSeprator' />
                    </Col>
                </Row>
                <Row>
                    <Col className="republicQuiz">
                         <div>
                            <h5>Fitness Challenge:</h5>
                            <p>“Training gives us an outlet for suppressed energies created by stress and thus tones the spirit just as exercise conditions the body.” wonderfully said by Arnold Schwarzenegger. In this time where we are generally bound to our phones, consoles, computers etc., fitness is something that has been getting neglected for long. But don’t you worry guys we do have fitness challenges where various challenges set. Here are the winners of the fitness challenge: </p>
                         </div>
                         <FitnessChallenge />
                         <hr className='quizSeprator' />
                    </Col>
                </Row>
                <Row>
                    <Col className="republicQuiz">
                         <div>
                            <h5>Sports Quiz:</h5>
                            <p>
                            This event was organised where questions were asked related to all the major and minor sports that are being watched and played. We have a lot of huge fan of Cricket and Football in the company. The winner of the event are as follows: 
                            </p>
                        </div>
                         <SportsQuiz />
                         <hr className='quizSeprator' />
                    </Col>
                </Row>
                <Row>
                    <Col className="republicQuiz">
                         <div>
                            <h5>Puzzle Contest:</h5>
                            <p>
                            Puzzle games are one the best games we have played since childhood and taking us back to the memory lane, Puzzle contest were conducted and these were the winners for the same: 
                            </p>
                        </div>
                         <SportsQuiz />
                         <hr className='quizSeprator' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default eventWinners;