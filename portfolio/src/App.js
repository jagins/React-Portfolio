import React from 'react';
import './App.scss';

import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Resume/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
