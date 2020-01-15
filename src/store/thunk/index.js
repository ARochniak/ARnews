import { SET_NEWS, ADD_NEWS } from '../types';
import fetchNews from '../../api/fetchNews';

export const setNews = category => {
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
        activeNews: category,
        news: newsArray
      });
    });
  };
};

export const addNews = () => {
  return (dispatch, getState) => {
    const count = getState().count + 10;
    fetchNews(getState().activeNews, count).then(res => {
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
    });
  };
};
