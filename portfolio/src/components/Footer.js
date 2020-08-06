import React from 'react';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {IconContext} from 'react-icons';

function Footer() 
{
    return (
        <footer>
            <div>
                <IconContext.Provider value={{className: 'footer-icons', size: '30px', color: '#525252'}}>
                    <a href='http://www.linkedin.com/in/joshua-agins' target='_blank noreferrer' ><FaLinkedinIn/></a>
                    <a href='http://www.github.com/jagins' target='_blank noreferrer'><FaGithub/></a>
                </IconContext.Provider>
            </div>
            <p>&copy; Copyright 2020 Joshua Agins</p>
        </footer>
    )
}

export default Footer;