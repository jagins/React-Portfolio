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
import ReactTooltip from 'react-tooltip';

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
                    <li data-tip data-for='git'><FaGitAlt style={{color: '#f05133'}}/></li>
                    <ReactTooltip id='git' place='top' effect='solid'>GIT</ReactTooltip>
                    
                    <li data-tip data-for='javascript'><DiJavascript style={{color: '#f7df1e'}}/></li>
                    <ReactTooltip id='javascript' place='top' effect='solid'>JavaScript</ReactTooltip>
                    
                    <li data-tip data-for='react'><FaReact style={{color: '#61dafb'}}/></li>
                    <ReactTooltip id='react' place='top' effect='solid'>React</ReactTooltip>
                    
                    <li data-tip data-for='html'><FaHtml5 style={{color: '#e44d26'}}/></li>
                    <ReactTooltip id='html' place='top' effect='solid'>HTML5</ReactTooltip>
                    
                    <li data-tip data-for='css'><FaCss3Alt style={{color: '#379ad6'}}/></li>
                    <ReactTooltip id='css' place='top' effect='solid'>CSS3</ReactTooltip>
                    
                    <li data-tip data-for='less'><FaLess style={{color: 'purple'}}/></li>
                    <ReactTooltip id='less' place='top' effect='solid'>LESS</ReactTooltip>

                    <li data-tip data-for='postgres'><DiPostgresql style={{color: '#326690'}}/></li>
                    <ReactTooltip id='postgres' place='top' effect='solid'>PostGreSQL</ReactTooltip>

                    <li data-tip data-for='graphql'><GrGraphQl style={{color: '#e535ab'}}/></li>
                    <ReactTooltip id='graphql' place='bottom' effect='solid'>GraphQL</ReactTooltip>

                </IconContext.Provider>
                <li data-tip data-for='node'><Icon icon={nodejsIcon} width='6em' height='6em'/></li>
                <ReactTooltip id='node' place='bottom' effect='solid'>Node.js</ReactTooltip>

                <lid data-tip data-for='redux'><Icon icon={reduxIcon} width='6em' height='6em'/></lid>
                <ReactTooltip id='redux' place='bottom' effect='solid'>Redux</ReactTooltip>

                <li data-tip data-for='api'><Icon icon={api1} width='6em' height='6em'/></li>
                <ReactTooltip id='api' place='bottom' effect='solid'>REST API</ReactTooltip>

                <li data-tip data-for='c++'><Icon icon={cPlusplus} width='6em' height='6em'/></li>
                <ReactTooltip id='c++' place='bottom' effect='solid'>C++</ReactTooltip>

                <li data-tip data-for='c#'><Icon icon={cSharp} width='6em' height='6em'/></li>
                <ReactTooltip id='c#' place='bottom' effect='solid'>C#</ReactTooltip>

                <li data-tip data-for='prisma'><Icon icon={prismaIcon} width='6em' height='6em'/></li>
                <ReactTooltip id='prisma' place='bottom' effect='solid'>Prisma</ReactTooltip>
            </ul>
        </section>
    )   
}

export default Resume;