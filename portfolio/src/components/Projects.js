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
                    <p>Earthmed Concept Website</p>
                    <p className='project-desc'>Full Stack eCommerce website for legalized recreational marijuana dispensary sales. </p>
                    <img src={earthmed} alt='Earthmed Concept Website'/>
                    <button>Go to deployed site</button>
                </div>

                <div className='wrapper'>
                    <p>Disney Kids API</p>
                    <p className='project-desc'>Disney Kids is a platform for parents to book baby sitting services from other parents or by approved child care providers at any of the Disney parks. </p>
                    <img src={disney} alt='Disney Kids API'/>
                    <button>Go to Github</button>
                </div>

                <div className='wrapper'>
                    <p>Save The Animals</p>
                    <p className='project-desc'>Save the Animals is a platform for animal rights organizations to help  raise money for the organization's causes.  </p>
                    <img src={animals} alt='Disney Kids API'/>
                    <button>Go to deployed site</button>
                </div>
                
            </div>
        </section>
    )
}

export default Projects;