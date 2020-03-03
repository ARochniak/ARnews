import React from 'react';

import './index.css';
// TODO add tabindex
const DarkMode = ({ darkModeToggle }) => {
  return (
    <div className="dark-mode">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className="dark-mode__switch">
        <input type="checkbox" onClick={darkModeToggle} />
        <span className="dark-mode__slider" />
      </label>
    </div>
  );
};

export default DarkMode;
