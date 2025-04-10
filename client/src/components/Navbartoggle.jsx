import React from 'react';

const NavbarToggle = ({ onToggle, isDarkMode }) => {
  return (
    <button className="navbar-toggle" onClick={onToggle}>
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default NavbarToggle;
