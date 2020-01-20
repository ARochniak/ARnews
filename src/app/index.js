import React, { useState } from 'react';
import Header from '../containers/Header';
import Main from '../containers/Main';
import Aside from '../containers/Aside';

import './index.css';

const App = () => {
  // Initial aside visible depends on screen width

  const [isDarkMode, setDarkMode] = useState(false);
  const darkModeToggle = () => {
    setDarkMode(!isDarkMode);
  };
  const darkClass = isDarkMode ? ' app_dark' : '';
  const asideInitialState = window.innerWidth < 480;
  const [isAsideHide, toggleAside] = useState(asideInitialState);
  const aside = { isAsideHide, toggleAside };

  return (
    <div className={`app${darkClass}`}>
      <Header
        className="app__header"
        aside={aside}
        darkModeToggle={darkModeToggle}
      />
      <Aside className="app__aside" aside={aside} />
      <Main className="app__main" />
    </div>
  );
};

export default App;
