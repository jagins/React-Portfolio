import React from 'react';
import {FaLinkedinIn, FaGithub, FaArrowCircleDown} from 'react-icons/fa';

function Header()
{
    return (
        <section>
            <nav>
                <a href='#'>Home</a>
                <a href='#'>About</a>
                <a href='#'>Resume</a>
                <a href='#'>Work</a>
            </nav>

            <h1>I'm Josh Agins</h1>
            <h3>Full Stack Web Developer skilled in JavaScript, React, Node, and Express. Passionate about learning new technology, writing clean, easy to read code, and enjoy putting the code together to make something from an idea to an app that a user can use and interact with.</h3>
            <FaLinkedinIn/>
            <FaGithub/>

            <FaArrowCircleDown/>
        </section>
    )
}

export default Header;