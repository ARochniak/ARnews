import React, { useState } from 'react';
import Header from '../containers/Header';
import Main from '../containers/Main';
import Aside from '../containers/Aside';
import BurgerMenu from '../components/BurgerMenu';

import './index.css';

const App = () => {
  const [hideAside, toggleAside] = useState(false);
  const burgerMenu = <BurgerMenu aside={{ hideAside, toggleAside }} />;

  return (
    <div className="app">
      <header>
        <Header burgerMenu={burgerMenu} />
      </header>
      <aside>
        <Aside hide={hideAside} />
      </aside>
      <main>
        <Main />
      </main>
    </div>
  );
};

export default App;
