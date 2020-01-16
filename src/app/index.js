import React, { useState } from 'react';
import Header from '../containers/Header';
import Main from '../containers/Main';
import Aside from '../containers/Aside';

import './index.css';

const App = () => {
  // Initial aside visible depends on screen width
  const asideInitialState = window.innerWidth < 768;
  const [isAsideHide, toggleAside] = useState(asideInitialState);
  const aside = { isAsideHide, toggleAside };

  return (
    <div className="app">
      <Header className="app__header" aside={aside} />
      <Aside className="app__aside" aside={aside} />
      <Main className="app__main" />
    </div>
  );
};

export default App;
