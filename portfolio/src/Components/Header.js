import React from 'react';
import {Nav} from 'react-bootstrap';
function Header() 
{
    return (
      <Nav className='justify-content-center'>
          <Nav.Item>
              <Nav.Link href='/home'>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
              <Nav.Link href='/about'>About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
              <Nav.Link href='/resume'>Resume</Nav.Link>
          </Nav.Item>
          <Nav.Item>
              <Nav.Link href='/works'>Works</Nav.Link>
          </Nav.Item>
          <Nav.Item>
              <Nav.Link href='/contact'>Contact</Nav.Link>
          </Nav.Item>
      </Nav>
    );
}

export default Header;