import React from 'react';
import BurgerMenu from '../../components/BurgerMenu';
import Logo from '../../components/Logo';

import './index.css';

// empty div for flex layout

const Header = ({ aside, className }) => {
  return (
    <header className={`${className} header`}>
      <BurgerMenu aside={aside} />
      <Logo />
      <div />
    </header>
  );
};

export default Header;
