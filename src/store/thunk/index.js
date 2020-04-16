import { SET_NEWS, ADD_NEWS, FIND_NEWS } from '../types';
import getNews from '../../api/getNews';
import orderNews from '../../api/helpers/orderNews';

export const setNews = (category = 'World') => {
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
  // setLoading uses for manage view while news are loading
  return (dispatch, getState) => {
    const count = getState().count + 10;
    const requestOptions = {
      category: getState().activeCategory,
      q: getState().q,
      count
    };
    getNews(requestOptions).then(fetchedNews => {
      const oldNews = getState().news;
      // Fix issue with mixing news after adding new ones
      const newsArray = orderNews(oldNews, fetchedNews);
      dispatch({
        type: ADD_NEWS,
        count,
        news: newsArray
      });
      setLoading(false);
    });
  };
};
