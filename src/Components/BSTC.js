import React from 'react';
import './Styles/BSTC.css';
import {Container, Col, Row } from 'react-bootstrap';

function bstc() {
    return(
        <div className='bstc'> 
            <h1 className='bstc-head'>Babel Software Testing Certification Champions</h1>
            <h5 className='bstc-intro'>There are always new, grander challenges to confront, and a true winner will embrace each one.</h5>
            <Container>
                <Row className='bstc-winner'>
                    <Col>
                        <img alt='Kanishk' className='winner-img' src={ require('../Images/BSTC/Kanishk.png').default } />
                        <h3 className='bstc-name'>Kanishk Yadav</h3>
                        <h5>Marks : 40</h5>
                    </Col>
                    <Col>
                        <img alt='Chetan' className='winner-img' src={require('../Images/BSTC/Chetan.png').default} />
                        <h3 className='bstc-name'>Chetan Gupta</h3>
                        <h5>Marks : 39</h5>
                    </Col>
                    <Col>
                        <img alt='Mukesh' className='winner-img' src={require('../Images/BSTC/Mukesh.png').default} />
                        <h3 className='bstc-name'>Mukesh Bani</h3>
                        <h5>Marks : 38</h5>
                    </Col>
                </Row>
                <Row className='bstc-winner'>
                    <Col>
                        <img alt='Aditya' className='winner-img' src={require('../Images/BSTC/Aditya.png').default} />
                        <h3 className='bstc-name'>Adityaveer Singh</h3>
                        <h5>Marks : 38</h5>
                    </Col>
                    <Col>
                        <img alt='Sumit' className='winner-img' src={require('../Images/BSTC/Sumit.png').default} />
                        <h3 className='bstc-name'>Sumit Verma</h3>
                        <h5>Marks : 38</h5>
                    </Col>
                    <Col>
                        <img alt='Arshad' className='winner-img' src={require('../Images/BSTC/Arshad.png').default} />
                        <h3 className='bstc-name'>Md Arshad Khan</h3>
                        <h5>Marks : 37</h5>
                    </Col>
                </Row>
                <Row className='bstc-winner'>
                    <Col>
                        <img alt='Mayank' className='winner-img' src={require('../Images/BSTC/Mayank.png').default} />
                        <h3 className='bstc-name'>Mayank Panwar</h3>
                        <h5>Marks : 36</h5>
                    </Col>
                    <Col>
                        <img alt='Tarun' className='winner-img' src={require('../Images/BSTC/Tarun.png').default} />
                        <h3 className='bstc-name'>Tarun Thusu</h3>
                        <h5>Marks : 36</h5>
                    </Col>
                    <Col>
                        <img alt='Sahil' className='winner-img' src={require('../Images/BSTC/Sahil.png').default} />
                        <h3 className='bstc-name'>Sahil Choudhary</h3>
                        <h5>Marks : 35</h5>
                    </Col>
                </Row>
                <Row className='bstc-winner'>
                    <Col>
                        <img alt='Nitesh' className='winner-img' src={require('../Images/BSTC/Nitesh.png').default} />
                        <h3 className='bstc-name'>Nitesh Shankar Pandey</h3>
                        <h5>Marks : 33</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default bstc