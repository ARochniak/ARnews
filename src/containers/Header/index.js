import React from 'react';
import BurgerMenu from '../../components/BurgerMenu';
import Logo from '../../components/Logo';

import './index.css';
import DarkMode from '../../components/DarkMode';
import SearchPanel from '../../components/SearchPanel';

const Header = ({ aside, className, darkModeToggle }) => {
  return (
    <header className={`${className} header`}>
      <BurgerMenu aside={aside} />
      <Logo />
      <div className="right-bar">
        <SearchPanel />
        <DarkMode darkModeToggle={darkModeToggle} />
      </div>
    </header>
  );
};

export default Header;
