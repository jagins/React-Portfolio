import React from 'react';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';

import {IconContext} from 'react-icons';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Header()
{
    return (
        <section id='home'>
            <nav>
                <AnchorLink href='#home'>Home</AnchorLink>
                <AnchorLink href='#about'>About</AnchorLink>
                <AnchorLink href='#projects'>Projects</AnchorLink>
                <AnchorLink href='#resume'>Resume</AnchorLink>
            </nav>

            <h1>I'm Josh Agins</h1>
            <h3>Full Stack Web Developer skilled in JavaScript, React, Node, and Express. Passionate about learning new technology, writing clean, easy to read code, and enjoy putting the code together to make something from an idea to an app that a user can use and interact with to have a good user experience.</h3>
            
            <IconContext.Provider value={{className: 'icons', size: '40px'}}>
                <div className='icons'>
                    <a href='http://www.linkedin.com/in/joshua-agins' target='_blank noreferrer'><FaLinkedinIn/></a>
                    <a href='http://www.github.com/jagins' target='_blank noreferrer'><FaGithub/></a>
                </div>
            </IconContext.Provider>
        </section>
    )
}

export default Header;