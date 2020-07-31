import React from 'react';
import earthmed from '../images/portfolio/earthmed.JPG';
import disney from '../images/portfolio/disney.png';
import animals from '../images/portfolio/animals.JPG';

function Projects()
{
    return (
        <section id='projects'>
            <h3>CHECK OUT SOME OF MY WORK</h3>
            <div className='project-container'>
                <div className='wrapper'>
                    <p>hello</p>
                   <img src={earthmed} alt='Earthmed Project'/>
                </div>
                
                <div className='wrapper'>
                    <p>hello</p>
                   <img src={disney} alt='Disney Kids API Project'/>
                </div>
                
                <div className='wrapper'>
                    <p>hello</p>
                   <img src={animals} alt='Save The Animals Project'/>
                </div>
            </div>
        </section>
    )
}

export default Projects;