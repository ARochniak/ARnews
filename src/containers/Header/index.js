import React from 'react';
import BurgerMenu from '../../components/BurgerMenu';
import Logo from '../../components/Logo';

import './index.css';
import DarkMode from '../../components/DarkMode';

const Header = ({ aside, className, darkModeToggle }) => {
  return (
    <header className={`${className} header`}>
      <BurgerMenu aside={aside} />
      <Logo />
      <DarkMode darkModeToggle={darkModeToggle} />
    </header>
  );
};

export default Header;
