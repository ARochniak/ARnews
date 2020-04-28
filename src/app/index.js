import React, { useState } from 'react';
import Header from '../containers/Header';
import Main from '../containers/Main';
import SideBar from '../containers/SideBar';

import './index.css';

const App = () => {
  // Initial aside visible depends on screen width

  const [isDarkMode, setDarkMode] = useState(false);
  const darkModeToggle = () => {
    setDarkMode(!isDarkMode);
  };
  const darkClass = isDarkMode ? ' app_dark' : '';
  const sideBarInitialState = window.innerWidth < 480;
  const [isSideBarHide, toggleSideBar] = useState(sideBarInitialState);
  const sidebar = { isSideBarHide, toggleSideBar };

  return (
    <div className={`app${darkClass}`}>
      <Header
        className="app__header"
        sidebar={sidebar}
        darkModeToggle={darkModeToggle}
      />
      <SideBar className="app__sidebar" sidebar={sidebar} />
      <Main className="app__main" />
    </div>
  );
};

export default App;
