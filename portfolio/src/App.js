import React, {useState, useEffect} from 'react';
import ReactGA from 'react-ga';
import axios from 'axios';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';

function App() 
{
  const [state, setState] = useState({resumeData: {}})

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  useEffect(() => {
    axios.get('/resumeData.json')
    .then(res => {
      setState({resumeData: res.data})
    })
    .catch(err => {
      console.log(err);
      alert(err);
    })
  }, [])

    return (
      <div className="App">
        <Header data={state.resumeData.main}/>
        <About data={state.resumeData.main}/>
        <Resume data={state.resumeData.resume}/>
        <Portfolio data={state.resumeData.portfolio}/>
        <Footer data={state.resumeData.main}/>
      </div>
    );
}

export default App;
