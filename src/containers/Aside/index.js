import React from 'react';
import { connect } from 'react-redux';
import { setNews } from '../../store/thunk';
import newsTypes from './newsTypes';

import './index.css';

const Aside = ({ aside, className, dispatch, activeCategory }) => {
  const { isAsideHide, toggleAside } = aside;
  const asideHide = isAsideHide ? 'aside_hide' : '';
  const asideClassName = `${className} aside ${asideHide}`;
  const clickHandler = category => {
    dispatch(setNews(category));
    if (window.innerWidth < 480) toggleAside(!isAsideHide);
  };
  const newsTypesLis = newsTypes.map(news => {
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
  });
  return (
    <aside className={asideClassName}>
      <ul className="list">{newsTypesLis}</ul>
    </aside>
  );
};

const mapStateToProps = state => {
  return {
    activeCategory: state.activeCategory
  };
};

export default connect(mapStateToProps)(Aside);
