import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setNews, addNews } from '../../store/thunk';
import News from '../../components/News';

import './index.css';
// TODO add loading process
const Main = ({ className, news, dispatch }) => {
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(setNews());
  }, []);
  const mainClassName = `${className} main`;
  const loadMoreHandler = () => {
    setLoading(true);
    dispatch(addNews(setLoading));
  };
  return (
    <main className={mainClassName}>
      {!news.length ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <News news={news} />
          {!isLoading ? (
            <button
              className="main__button-more"
              type="button"
              onClick={loadMoreHandler}
            >
              Load more
            </button>
          ) : (
            <p className="loading">Loading...</p>
          )}
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
