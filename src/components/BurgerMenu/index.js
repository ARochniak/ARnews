import React from 'react';

import './index.css';

function BurgerMenu({ aside }) {
  const { hideAside, toggleAside } = aside;
  const clickHandler = () => {
    toggleAside(!hideAside);
  };
  const onKeyHandler = e => {
    if (e.keyCode === 13) toggleAside(!hideAside);
  };
  const className = `burger-menu${hideAside ? '' : ' burger-menu_close'}`;

  return (
    <div
      className={className}
      onClick={clickHandler}
      onKeyDown={onKeyHandler}
      role="button"
      tabIndex={0}
    >
      <div className="burger-menu__translate">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export default BurgerMenu;
