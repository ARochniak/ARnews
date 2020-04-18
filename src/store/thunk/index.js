import { SET_NEWS, ADD_NEWS, FIND_NEWS, SET_LOADING } from '../types';
import getNews from '../../api/getNews';
import orderNews from '../../api/helpers/orderNews';

const setLoading = dispatch => {
  dispatch({ type: SET_LOADING });
};

export const setNews = (category = 'World') => {
  return dispatch => {
    setLoading(dispatch);
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
    setLoading(dispatch);
    getNews({ q }).then(newsArray => {
      dispatch({
        type: FIND_NEWS,
        news: newsArray,
        q
      });
    });
  };
};
// setLoading uses for manage view while news are loading

export const addNews = () => {
  return (dispatch, getState) => {
    setLoading(dispatch);
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
    });
  };
};
