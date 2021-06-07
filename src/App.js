import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeamIntro from './Components/Team-Intro';
import EventWinners from './Components/eventWinners';
import Contact from './Components/Contact';
import Date from './Components/Date';
import BSTC from './Components/BSTC';
import Babel from './Components/Babel'
import Poem from './Components/Poem';
import News from './Components/News';
import Video from './Components/Video';
import Promotions from './Components/Promotions';
import About from './Components/About'

function App() {
  return (
    <div className="App">
       
      <div className='page-head'>
      <Date />
      <Babel />
      </div>
      <div className='body'>
      <About />
      <Date />
      <Video />
      <Date />
      <Promotions />
      <Date />
      <BSTC />
      <Date />
      <EventWinners />
      <Date />
      <Poem />
      <Date /> 
      <News />
      <Date /> 
      <TeamIntro />
      </div> 
      <Contact />
    </div>
  );
}

export default App;
