import { SET_NEWS, ADD_NEWS } from '../types';
import getNews from '../../utils/getNews';
import removeDublicate from '../../utils/removeDublicate';

export const setNews = (category = 'World') => {
  return dispatch => {
    getNews(category).then(newsArray => {
      dispatch({
        type: SET_NEWS,
        activeCategory: category,
        news: newsArray
      });
    });
  };
};

export const addNews = setLoading => {
  return (dispatch, getState) => {
    const count = getState().count + 10;
    getNews(getState().activeCategory, count).then(fetchedNews => {
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
