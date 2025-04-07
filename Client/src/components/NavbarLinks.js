import React from 'react';
import { Link } from 'react-router-dom';

const NavbarLinks = () => {
  return (
    <ul className="navbar-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/affirmations">Affirmations</Link></li>
      <li><Link to="/dog-images">Dog Images</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  );
};

export default NavbarLinks;
