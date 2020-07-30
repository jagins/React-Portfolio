import React from 'react';
import {FaDownload} from 'react-icons/fa';
import profilePic from '../images/profilepic.jpg';

function About()
{
    return (
        <section id='about'>
            <div className='container'>
                <img src={profilePic}/>
                <div>
                    <h3>About Me</h3>
                    <p className='about-text'>Hi, I'm a Full Stack Web Developer mainly working with the PERN Stack. I have worked with GraphQL and Prisma as well for a backend. I also have a B.S. Degree from DeVry University in Game and Simulation Programming. While at DeVry I made video games and focused on them for mobile using Unreal and Unity game engines. I also Referee soccer games working up to Semi-Professional leagues around the Midwest. In 2018 I was 1 of 24 Referees selected to represent the Midwest Region for the United States Youth Soccer Association's National Championships in Dallas, TX.</p>

                    <div className='contact-container'>
                        <h3 className='contact'>Contact Details</h3>
                        <p className='download'><FaDownload/> Download Resume</p>
                    </div>
                    <address   address>
                        Josh Agins <br/>
                        Schaumburg, IL <br/>
                        (847) 529-3100 <br/>
                        <a className='email' href='mailto:jagins629@gmail.com'>jagins629@gmail.com</a>
                    </address>
                </div>
            </div>
        </section>
    )
}

export default About;