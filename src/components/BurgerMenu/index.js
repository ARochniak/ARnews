import React from 'react';

import './index.css';

function BurgerMenu({ sidebar }) {
  const { isSideBarHide, toggleSideBar } = sidebar;
  const classes = ['burger-menu'];
  if (!isSideBarHide) classes.push('burger-menu_close');

  const clickHandler = () => {
    toggleSideBar(!isSideBarHide);
  };
  const onKeyHandler = e => {
    if (e.keyCode === 'Enter') toggleSideBar(!isSideBarHide);
  };

  return (
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <button
      className={classes.join(' ')}
      onClick={clickHandler}
      onKeyDown={onKeyHandler}
      type="button"
    />
  );
}

export default BurgerMenu;
