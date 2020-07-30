import React from 'react';

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

            <div className='work'>
                <h3 className='work-header'>WORK</h3>
                <h2 class='work-title'>NetherRealm Studios</h2>
            </div>
            
            <div className='job'>
                <p className='job-title'>Mobile QA Analyst</p>
                <p className='job-date'>June 2015 - June 2017</p>
            </div>
           
            <p className='work-desc'>Worked on titles such as Mortal Kombat X, WWE Immortals, Injustice: Gods Among Us, and Injustice 2 on iOS and Android. Resonsilbilties were to find and document bugs to the QA Lead and in JIRA. Ensured high quality standards and intregrity of the product. Worked on a team of 7 other Mobile QA Analysts.</p>

            <h2>WMS Gaming Inc</h2>
            <p>Test Engineer</p>
            <p>October 2013 - March 2014</p>
            <p>Worked on a project called Betcloud for Norwegian Cruise Lines. Responsibilites were to find and document bugs in the bug tracking software similar to JIRA and to the Project Manager. While at WMS, I created and executed test cases that encompassed a variety of actions a user could perform on the Betcloud platform.</p>

            <h3>SKILLS</h3>
            <ul>
                <li>GIT</li>
                <li>JAVASCRIPT</li>
                <li>REACT</li>
                <li>NODE</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>LESS</li>
                <li>POSTGRESQL</li>
                <li>REDUX</li>
                <li>RESUTFUL API</li>
                <li>GRAPHQL</li>
                <li>C++</li>
                <li>C#</li>
                <li>PRISMA</li>
            </ul>
        </section>
    )   
}

export default Resume;