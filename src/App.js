import React, { Component } from 'react';
import MainHeader from './components/MainHeader';
import Barak from './components/Barak';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <MainHeader/>
          <Barak/>
          <AboutMe/>
          <Education/>
          <Experience/>
          <Projects/>
      </div>
    );
  }
}

export default App;
