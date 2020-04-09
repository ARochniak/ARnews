import fetchNews from './fetchNews';
import newsAdapter from './newsAdapter';

const getNews = async ({ category, count = 10, q }) => {
  const response = await fetchNews({ category, count, q });
  return newsAdapter(response);
};

const getLocalNews = () => {
  const localNews = localStorage.getItem('newsArray');
  if (localNews) {
    const timeSaved = localStorage.getItem('timeSaved');
    if (timeSaved) {
      const timePassed = new Date() - new Date(timeSaved);
      if (timePassed < 30 * 60 * 1000) {
        return JSON.parse(localNews);
      }
    }
  }
  return false;
};

const saveLocalNews = newsArray => {
  localStorage.setItem('newsArray', JSON.stringify(newsArray));
  localStorage.setItem('timeSaved', new Date().toString());
};

const getNewsDevelopment = async ({ category, count = 10, q }) => {
  if (category === 'World' && count === 10) {
    const localNews = await getLocalNews();
    if (localNews) return localNews;
  }
  const newsArray = await getNews({ category, count, q });
  if (category === 'World' && count === 10) {
    await saveLocalNews(newsArray);
  }
  return newsArray;
};

const loadNews =
  process.env.NODE_ENV === 'development' ? getNewsDevelopment : getNews;

export default loadNews;
