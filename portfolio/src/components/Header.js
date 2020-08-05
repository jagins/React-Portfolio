import React from 'react';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';

import {IconContext} from 'react-icons';

function Header()
{
    return (
        <section id='home'>
            <nav>
                <a href='#'>Home</a>
                <a href='#'>About</a>
                <a href='#'>Resume</a>
                <a href='#'>Projects</a>
            </nav>

            <h1>I'm Josh Agins</h1>
            <h3>Full Stack Web Developer skilled in JavaScript, React, Node, and Express. Passionate about learning new technology, writing clean, easy to read code, and enjoy putting the code together to make something from an idea to an app that a user can use and interact with to have a good user experience.</h3>
            
            <IconContext.Provider value={{className: 'icons', size: '40px'}}>
                <div className='icons'>
                    <FaLinkedinIn/>
                    <FaGithub/>
                </div>
            </IconContext.Provider>
        </section>
    )
}

export default Header;