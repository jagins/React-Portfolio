import React from 'react';
import {FaDownload} from 'react-icons/fa';
function About()
{
    return (
        <section>
            <h3>About Me</h3>
            <p>Hi, I'm a Full Stack Web Developer mainly working with the PERN Stack. I have worked with GraphQL and Prisma as well for a backend. I also have a B.S. Degree from DeVry University in Game and Simulation Programming. While at DeVry I made video games and focused on them for mobile using Unreal and Unity game engines. I also Referee soccer games working up to Semi-Professional leagues around the Midwest. In 2018 I was 1 of 24 Referees selected to represent the Midwest Region for the United States Youth Soccer Association's National Championships in Dallas, TX.</p>

            <h3>Contact Details</h3>
            <address>
                Josh Agins <br/>
                Schaumburg, IL <br/>
                (847) 529-3100 <br/>
                <a href='mailto:jagins629@gmail.com'>jagins629@gmail.com</a>
            </address>
            <p><FaDownload/> Download Resume</p>
        </section>
    )
}

export default About;