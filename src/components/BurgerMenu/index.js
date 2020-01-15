import React from 'react';

import './index.css';

function BurgerMenu({ aside }) {
  const { isAsideHide, toggleAside } = aside;
  const clickHandler = () => {
    toggleAside(!isAsideHide);
  };
  const onKeyHandler = e => {
    if (e.keyCode === 'Enter') toggleAside(!isAsideHide);
  };
  const className = `burger-menu${isAsideHide ? '' : ' burger-menu_close'}`;

  return (
    <button
      className={className}
      onClick={clickHandler}
      onKeyDown={onKeyHandler}
      type="button"
      tabIndex={0}
    >
      <div className="burger-menu__translate">
        <span />
        <span />
        <span />
      </div>
    </button>
  );
}

export default BurgerMenu;
