import fetchNewsProxy from './fetchNewsProxy';
import newsAdapter from './newsAdapter';

const getNews = async ({ category, count = 10, q }) => {
  const response = await fetchNewsProxy({ category, count, q });
  return newsAdapter(response);
};
const getNewsDevelopment = async ({ category, count = 10, q }) => {
  // only for development process save locally for 15 minutes
  if (category === 'World' && count === 10) {
    const localNews = localStorage.getItem('newsArray');
    if (localNews) {
      const timeSaved = localStorage.getItem('timeSaved');
      if (timeSaved) {
        const timePassed = new Date() - new Date(timeSaved);
        if (timePassed < 15 * 60 * 1000) {
          return JSON.parse(localNews);
        }
      }
    }
  }
  const newsArray = await getNews({ category, count, q });
  if (category === 'World' && count === 10) {
    localStorage.setItem('newsArray', JSON.stringify(newsArray));
    localStorage.setItem('timeSaved', new Date().toString());
  }
  return newsArray;
};

const exportedFunction =
  process.env.NODE_ENV === 'development' ? getNewsDevelopment : getNews;

export default exportedFunction;
