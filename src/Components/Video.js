import React from 'react';
import {Container} from 'react-bootstrap';
import './Styles/BSTC.css';
import video1 from '../Images/Video.mp4'

function Video(){
    return(
        <div>
            <Container>
                <div className='video'>
                     <h1 className='video-head'> Experts Corner</h1>
                    <video src={video1} controls='controls' width='600' height='300' autoPlay='false' />
                </div>
            </Container>
        </div>
    )
}

export default Video;