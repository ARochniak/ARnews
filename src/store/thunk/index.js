import { SET_NEWS, ADD_NEWS } from '../types';
import fetchNews from '../../api/fetchNews';

export const setNews = (category = 'World') => {
  return dispatch => {
    fetchNews(category).then(res => {
      const newsArray = res.map((newsItem, i) => ({
        id: i,
        name: newsItem.name,
        url: newsItem.url,
        imageUrl: newsItem.image ? newsItem.image.thumbnail.contentUrl : null
      }));
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
    fetchNews(getState().activeCategory, count).then(res => {
      const newsArray = res.map((newsItem, i) => ({
        id: i,
        name: newsItem.name,
        url: newsItem.url,
        imageUrl: newsItem.image ? newsItem.image.thumbnail.contentUrl : null
      }));
      dispatch({
        type: ADD_NEWS,
        count,
        news: newsArray
      });
      setLoading(false);
    });
  };
};
