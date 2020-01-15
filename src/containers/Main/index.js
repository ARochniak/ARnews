import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import setNews from '../../store/thunk';
import News from '../../components/News';

import './index.css';

const Main = ({ className, news, dispatch }) => {
  useEffect(() => {
    dispatch(setNews());
  }, []);
  const mainClassName = `${className} main`;
  return (
    <main className={mainClassName}>
      {!news.length ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <News news={news} />
          <button type="button">Load more</button>
        </>
      )}
    </main>
  );
};

const mapStateToProps = state => {
  return {
    news: state.news
  };
};

export default connect(mapStateToProps)(Main);
