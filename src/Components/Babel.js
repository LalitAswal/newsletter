import React from 'react';
import './Styles/Heading.css';
import logoimg from '../Images/Babel1.png';
import {Container, Row } from 'react-bootstrap';
function Babel(){
    return(
      <Container noGutters fluid className='heading'>
           <img src={ require("../Images/head-background.jpg").default } className='bg-img' alt='kwsbg' />
          <div className='kws'>
          <Row>
            <img className='logo' alt='logo' src={logoimg} />
            <h1 className='babel-head'>Keywords India Scoop</h1>
             
             <div className='babel-intro'>
                <p>
                  Hello, Namaste, Sata srī akāla, Bonjour, Hallo, Hola Babel Family Welcome to one and only Babel News Platform!
                </p>
              </div>
          </Row>
             
             
        </div>
      </Container>
        
    )
}

export default Babel;