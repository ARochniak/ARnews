import React from 'react';

import './index.css';

const DarkMode = ({ darkModeToggle }) => {
  return (
    <div className="dark-mode">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className="dark-mode__switch">
        <input type="checkbox" onClick={darkModeToggle} />
        <span className="dark-mode__slider" />
      </label>
      <div className="dark-mode__label">dark mode</div>
    </div>
  );
};

export default DarkMode;
