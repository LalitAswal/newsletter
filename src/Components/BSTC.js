import React from 'react';
import './Styles/BSTC.css';
import {Container, Col, Row } from 'react-bootstrap';
import ImgNitesh from '../Images/BSTC/Nitesh.png';
import ImgMayank from '../Images/BSTC/Mayank.png';
import ImgSahil from '../Images/BSTC/Sahil.png';
import ImgTarun from '../Images/BSTC/Tarun.png';
import ImgMukesh from '../Images/BSTC/Mukesh.png';
import ImgChetan from '../Images/BSTC/Chetan.png';
import ImgKanishk from '../Images/BSTC/Kanishk Yadav.png';
import ImgAditya from '../Images/BSTC/Adityaveer Singh.png';
import ImgSumit from '../Images/BSTC/Sumit Verma.png';
import ImgArshad from '../Images/BSTC/Md Arshad Khan.png';


function bstc() {
    return(
        <div className='bstc'> 
            <h1 className='bstc-head'>Babel Software Testing Certification Champions</h1>
            <h5 className='bstc-intro'>There are always new, grander challenges to confront, and a true winner will embrace each one</h5>
            <Container>
                <Row className='bstc-winner'>
                    <Col>
                        <img alt='Kanishk' className='winner-img' src={ImgKanishk} />
                        <h3 className='bstc-name'>Kanishk Yadav</h3>
                        <h5>Marks : 40</h5>
                    </Col>
                    <Col>
                        <img alt='Chetan' className='winner-img' src={ImgChetan} />
                        <h3 className='bstc-name'>Chetan Gupta</h3>
                        <h5>Marks : 39</h5>
                    </Col>
                    <Col>
                        <img alt='Mukesh' className='winner-img' src={ImgMukesh} />
                        <h3 className='bstc-name'>Mukesh Bani</h3>
                        <h5>Marks : 38</h5>
                    </Col>
                </Row>
                <Row className='bstc-winner'>
                    <Col>
                        <img alt='Aditya' className='winner-img' src={ImgAditya} />
                        <h3 className='bstc-name'>Adityaveer Singh</h3>
                        <h5>Marks : 38</h5>
                    </Col>
                    <Col>
                        <img alt='Sumit' className='winner-img' src={ImgSumit} />
                        <h3 className='bstc-name'>Sumit Verma</h3>
                        <h5>Marks : 38</h5>
                    </Col>
                    <Col>
                        <img alt='Arshad' className='winner-img' src={ImgArshad} />
                        <h3 className='bstc-name'>Md Arshad Khan</h3>
                        <h5>Marks : 37</h5>
                    </Col>
                </Row>
                <Row className='bstc-winner'>
                    <Col>
                        <img alt='Mayank' className='winner-img' src={ImgMayank} />
                        <h3 className='bstc-name'>Mayank Panwar</h3>
                        <h5>Marks : 36</h5>
                    </Col>
                    <Col>
                        <img alt='Tarun' className='winner-img' src={ImgTarun} />
                        <h3 className='bstc-name'>Tarun Thusu</h3>
                        <h5>Marks : 36</h5>
                    </Col>
                    <Col>
                        <img alt='Sahil' className='winner-img' src={ImgSahil} />
                        <h3 className='bstc-name'>Sahil Choudhary</h3>
                        <h5>Marks : 35</h5>
                    </Col>
                </Row>
                <Row className='bstc-winner'>
                    <Col>
                        <img alt='Nitesh' className='winner-img' src={ImgNitesh} />
                        <h3 className='bstc-name'>Nitesh Shankar Pandey</h3>
                        <h5>Marks : 33</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default bstc