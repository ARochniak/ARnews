import React, { useState } from 'react';
import Header from '../containers/Header';
import Main from '../containers/Main';
import Aside from '../containers/Aside';

import './index.css';

const App = () => {
  const [isAsideHide, toggleAside] = useState(false);

  return (
    <div className="app">
      <Header className="app__header" aside={{ isAsideHide, toggleAside }} />
      <Aside className="app__aside" hide={isAsideHide} />
      <Main className="app__main" />
    </div>
  );
};

export default App;
