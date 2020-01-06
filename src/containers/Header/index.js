import React from 'react';
import Logo from '../../components/Logo';

import './index.css';

// empty div for flex layout

const Header = ({ burgerMenu }) => {
  return (
    <div className="header">
      {burgerMenu}
      <Logo />
      <div />
    </div>
  );
};

export default Header;
