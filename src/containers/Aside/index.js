import React from 'react';

import './index.css';

const Aside = ({ hide }) => {
  const newsTypes = ['Ukraine', 'World', 'Technology', 'Science', 'Sports'];
  const asideClass = hide ? 'aside aside_hide' : 'aside';
  return (
    <div className={asideClass}>
      {newsTypes.map((news, i) => (
        <div className="aside__news-type" key={i}>
          <a href="#">{news}</a>
        </div>
      ))}
    </div>
  );
};

export default Aside;
