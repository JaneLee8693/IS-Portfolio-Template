import React from 'react';
import {Link} from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap';
import CTA from './CTA';
import Me from '../../assets/img/john.jpg';
import HeaderSocials from './HeaderSocials';

export const Header = () => {
  return (
    // <>
    //   <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
    //     <NavbarBrand>
    //       {/* <img src={Logo} alt='Logo' width='80'/> */}
    //     </NavbarBrand>
    //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //         <Navbar.Collapse id="basic-navbar-nav">
    //             <Nav className="ml-auto">
    //               <Link to="/">Home</Link>
    //               <Link to="/resume">Resume</Link>
    //               <Link to="/portfolio">Portfolio</Link>
    //               <Link to="/contact">Contact</Link>
    //             </Nav>
    //         </Navbar.Collapse>
    //   </Navbar>
    // </>
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>John Doe</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA/>
        <HeaderSocials/>

    
        <div className='headshot'>
          <img src={Me} alt='John Doe'></img>
        </div>

        <a href='#skills' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  );
}
