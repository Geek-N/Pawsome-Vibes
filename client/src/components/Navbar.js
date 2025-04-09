import React from 'react';
import NavbarLinks from './NavbarLinks'; // Import the NavbarLinks component
import NavbarToggle from './Navbartoggle'; // Import the NavbarToggle component
import Logo from './Logo'; // Import the Logo component
import './Navbar.css';

const Navbar = ({ onToggle, isDarkMode }) => {
  return (
    <nav className="navbar">
      <Logo />
      <NavbarLinks />
      <NavbarToggle onToggle={onToggle} isDarkMode={isDarkMode} />
    </nav>
  );
};

export default Navbar;
