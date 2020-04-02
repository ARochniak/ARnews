import React from 'react';

import './index.css';

const DarkMode = ({ darkModeToggle }) => {
  const keyHandler = e => {
    if (e.keyCode === 32 || e.keyCode === 13) {
      darkModeToggle();
    }
  };
  return (
    <div className="dark-mode">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control,jsx-a11y/no-noninteractive-tabindex,jsx-a11y/no-noninteractive-element-interactions */}
      <label className="dark-mode__switch" tabIndex="0" onKeyDown={keyHandler}>
        <input type="checkbox" onClick={darkModeToggle} />
        <span className="dark-mode__slider" />
      </label>
    </div>
  );
};

export default DarkMode;
