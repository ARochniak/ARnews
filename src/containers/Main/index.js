import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setNews, addNews } from '../../store/thunk';
import News from '../../components/News';

import './index.css';

const Main = ({ className, news, dispatch, isLoading }) => {
  const [isAddingNews, setAddingNews] = useState(false);
  if (!isLoading && isAddingNews) setAddingNews(false);
  useEffect(() => {
    dispatch(setNews());
  }, []);
  const mainClassName = `${className} main`;
  const loadMoreHandler = () => {
    setAddingNews(true);
    dispatch(addNews());
  };
  return (
    <main className={mainClassName}>
      {isLoading && !isAddingNews ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <News news={news} />
          {!isAddingNews ? (
            <button
              className="main__button-more"
              type="button"
              onClick={loadMoreHandler}
            >
              Load more news
            </button>
          ) : (
            <p className="main__loading">Loading...</p>
          )}
        </>
      )}
    </main>
  );
};

const mapStateToProps = state => {
  return {
    news: state.news,
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps)(Main);
