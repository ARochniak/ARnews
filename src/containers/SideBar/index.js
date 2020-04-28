import React from 'react';
import { connect } from 'react-redux';
import { setNews } from '../../store/thunk';
import newsTypes from './newsTypes';

import './index.css';

const SideBar = ({ sidebar, className, dispatch, activeCategory }) => {
  const { isSideBarHide, toggleSideBar } = sidebar;
  const asideHide = isSideBarHide ? 'sidebar_hide' : '';
  const sideBarClassName = `${className} sidebar ${asideHide}`;
  const clickHandler = category => {
    dispatch(setNews(category));
    if (window.innerWidth < 480) toggleSideBar(!isSideBarHide);
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
          tabIndex={isSideBarHide ? '-1' : ''}
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
    <div className={sideBarClassName}>
      <ul className="list">{newsTypesLis}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    activeCategory: state.activeCategory
  };
};

export default connect(mapStateToProps)(SideBar);
