import { SET_NEWS } from '../types';
import fetchNews from '../../api/fetchNews';

const setNews = category => {
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

export default setNews;
