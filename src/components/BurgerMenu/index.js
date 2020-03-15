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
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <button
      className={className}
      onClick={clickHandler}
      onKeyDown={onKeyHandler}
      type="button"
    />
  );
}

export default BurgerMenu;
