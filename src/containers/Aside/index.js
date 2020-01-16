import React from 'react';
import { connect } from 'react-redux';
import { setNews } from '../../store/thunk';

import './index.css';

const Aside = ({ aside, className, dispatch, activeCategory }) => {
  const newsTypes = [
    { id: 1, category: 'World' },
    { id: 2, category: 'Technology' },
    { id: 3, category: 'Science' },
    { id: 4, category: 'Sports' },
    { id: 5, category: 'Business' },
    { id: 6, category: 'Health' },
    { id: 7, category: 'Entertainment' }
  ];
  const { isAsideHide, toggleAside } = aside;
  const asideHide = isAsideHide ? 'aside_hide' : '';
  const asideClassName = `${className} aside ${asideHide}`;
  const clickHandler = category => {
    dispatch(setNews(category));
    if (window.innerWidth < 480) toggleAside(!isAsideHide);
  };
  return (
    <aside className={asideClassName}>
      <ul className="list">
        {newsTypes.map(news => {
          const newsTypeClass =
            news.category === activeCategory
              ? 'list__news-type list__news-type_active'
              : 'list__news-type';
          return (
            <li className={newsTypeClass} key={news.id}>
              <button
                type="button"
                tabIndex={isAsideHide ? '-1' : ''}
                onClick={() => {
                  clickHandler(news.category);
                }}
              >
                {news.category}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

const mapStateToProps = state => {
  return {
    activeCategory: state.activeCategory
  };
};

export default connect(mapStateToProps)(Aside);
