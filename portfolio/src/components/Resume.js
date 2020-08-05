import React from 'react';
import {IconContext} from 'react-icons';
import {FaGitAlt, FaReact, FaHtml5, FaCss3Alt, FaLess} from 'react-icons/fa';
import {DiJavascript, DiPostgresql} from 'react-icons/di';
import {GrGraphQl} from 'react-icons/gr';
import {Icon} from '@iconify/react';
import reduxIcon from '@iconify/icons-logos/redux';
import cPlusplus from '@iconify/icons-logos/c-plusplus';
import cSharp from '@iconify/icons-logos/c-sharp';
import api1 from '@iconify/icons-carbon/api-1';
import prismaIcon from '@iconify/icons-logos/prisma';
import nodejsIcon from '@iconify/icons-logos/nodejs';

function Resume()
{
    return (
        <section id='resume'>
            <div className='education'>
                <h3 className='education-header'>EDUCATION</h3>
                <h2>Lambda School</h2>
            </div>
            
            <div className='education-content'>
                <div className='graduation'>
                    <p className='title'>Full Stack Web Development</p>
                    <p className='grad-date'>August 2020</p>
                </div>
                
                <p className='education-desc'>Full-time 40 week Full Stack Web Development program that teaches front and backend development using HTML5, CSS3, ES6 JavaScript, React.js, Node.js, Express.js, RESTFUl API, Git, Github, and computer science in Python including topics such as Object Oriented Programming (OOP), Algorithms, Data Structures, Hash Tables, Graphs, and Computer Architecture.</p>
               
                <h2 className='school'>DeVry University - Addison</h2>
               
               <div className='devry'>
                    <p className='title'>Game and Simulation Programming</p>
                    <p className='grad-date'>June 2013</p>
               </div>
                
                <p className='education-desc'>Bachelor of Science program that teaches game design and game and simulation programming using C++/C# and DirectX. Worked with game engines such as Unreal3 and Unity and also creating a custom game engine from scratch. 3d modeling using 3D Studio Max was also covered during the 127 credit hour cirriculum.</p>
            </div>
            
            <hr/>
            
            <div className='work'>
                <h3 className='work-header'>WORK</h3>
                <h2 class='work-title'>NetherRealm Studios</h2>
            </div>
            
            <div className='job'>
                <p className='job-title'>Mobile QA Analyst</p>
                <p className='job-date'>June 2015 - June 2017</p>
            </div>
           
            <p className='work-desc'>Worked on titles such as Mortal Kombat X, WWE Immortals, Injustice: Gods Among Us, and Injustice 2 on iOS and Android. Resonsilbilties were to find and document bugs to the QA Lead and in JIRA. Ensured high quality standards and intregrity of the product. Worked on a team of 7 other Mobile QA Analysts.</p>

            <h2 className='second-job'>WMS Gaming Inc</h2>

            <div className='job'>
                <p className='job-title'>Test Engineer</p>
                <p className='job-date'>October 2013 - March 2014</p>
            </div>
            
            <p className='work-desc'>Worked on a project called Betcloud for Norwegian Cruise Lines. Responsibilites were to find and document bugs in the bug tracking software similar to JIRA and to the Project Manager. While at WMS, I created and executed test cases that encompassed a variety of actions a user could perform on the Betcloud platform.</p>

            <hr/>

            <h3 className='skills-header'>SKILLS</h3>
            <ul class='skills'>
                <IconContext.Provider value={{className: 'skill-icon', size: '100px'}}>
                    <li><FaGitAlt style={{color: '#f05133'}}/></li>
                    <li><DiJavascript style={{color: '#f7df1e'}}/></li>
                    <li><FaReact style={{color: '#61dafb'}}/></li>
                    <li><FaHtml5 style={{color: '#e44d26'}}/></li>
                    <li><FaCss3Alt style={{color: '#379ad6'}}/></li>
                    <li><FaLess style={{color: 'purple'}}/></li>
                    <li><DiPostgresql style={{color: '#326690'}}/></li>
                    <li><GrGraphQl style={{color: '#e535ab'}}/></li>
                </IconContext.Provider>
                <li><Icon icon={nodejsIcon} width='6em' height='6em'/></li>
                <li><Icon icon={reduxIcon} width='6em' height='6em'/></li>
                <li><Icon icon={api1} width='6em' height='6em'/></li>
                <li><Icon icon={cPlusplus} width='6em' height='6em'/></li>
                <li><Icon icon={cSharp} width='6em' height='6em'/></li>
                <li><Icon icon={prismaIcon} width='6em' height='6em'/></li>
            </ul>
        </section>
    )   
}

export default Resume;