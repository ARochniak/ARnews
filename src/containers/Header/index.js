import React from 'react';
import BurgerMenu from '../../components/BurgerMenu';
import Logo from '../../components/Logo';

import './index.css';

const Header = ({ aside, className, darkModeToggle }) => {
  return (
    <header className={`${className} header`}>
      <BurgerMenu aside={aside} />
      <Logo />
      <input type="checkbox" onClick={darkModeToggle} />
    </header>
  );
};

export default Header;
