import React from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Resume/>
      <Projects/>
    </div>
  );
}

export default App;
