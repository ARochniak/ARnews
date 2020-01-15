import React from 'react';
import { connect } from 'react-redux';
import setNews from '../../store/thunk';

import './index.css';

const Aside = ({ hide, className, dispatch }) => {
  const newsTypes = [
    { id: 1, category: 'World' },
    { id: 2, category: 'Technology' },
    { id: 3, category: 'Science' },
    { id: 4, category: 'Sports' },
    { id: 5, category: 'Business' },
    { id: 6, category: 'Health' },
    { id: 7, category: 'Entertainment' }
  ];
  const asideHide = hide ? ' aside_hide' : '';
  const asideClassName = `${className} aside ${asideHide}`;
  const clickHandler = category => {
    dispatch(setNews(category));
  };
  return (
    <aside className={asideClassName}>
      <ul className="list">
        {newsTypes.map(news => (
          <li className="list__news-type" key={news.id}>
            <button
              type="button"
              tabIndex={hide ? '-1' : ''}
              onClick={() => {
                clickHandler(news.category);
              }}
            >
              {news.category}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default connect()(Aside);
