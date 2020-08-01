import React from 'react';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {IconContext} from 'react-icons';

function Footer() 
{
    return (
        <footer>
            <div>
                <IconContext.Provider value={{className: 'icons', size: '30px', color: '#525252'}}>
                    <FaLinkedinIn className='icons'/>
                    <FaGithub/>
                </IconContext.Provider>
            </div>
            <p>&copy; Copyright 2020 Joshua Agins</p>
        </footer>
    )
}

export default Footer;