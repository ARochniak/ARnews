import { SET_NEWS, ADD_NEWS, FIND_NEWS } from '../types';
import getNews from '../../utils/getNews';
import removeDublicate from '../../utils/removeDublicate';

export const setNews = category => {
  return dispatch => {
    getNews({ category }).then(newsArray => {
      dispatch({
        type: SET_NEWS,
        activeCategory: category,
        news: newsArray
      });
    });
  };
};

export const findNews = q => {
  return dispatch => {
    getNews({ q }).then(newsArray => {
      dispatch({
        type: FIND_NEWS,
        news: newsArray,
        q
      });
    });
  };
};

export const addNews = setLoading => {
  return (dispatch, getState) => {
    const count = getState().count + 10;
    const requestOptions = getState().q
      ? { q: getState().q, count }
      : { category: getState().activeCategory, count };
    getNews(requestOptions).then(fetchedNews => {
      const oldNews = getState().news;
      // Fix issue with mixing news after adding new ones
      const newsArray = removeDublicate([...oldNews, ...fetchedNews]);
      dispatch({
        type: ADD_NEWS,
        count,
        news: newsArray
      });
      setLoading(false);
    });
  };
};
