import fetchNewsProxy from './fetchNewsProxy';
import newsAdapter from './newsAdapter';

const getNews = async ({ category = 'World', count = 10 }) => {
  const response = await fetchNewsProxy({
    category: category.toLowerCase(),
    count
  });
  return newsAdapter(response);
};
const getNewsDevelopment = async ({ category, count }) => {
  // TODO only for development process save locally for 15 minutes
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
  const newsArray = await getNews({ category, count });
  if (category === 'World' && count === 10) {
    localStorage.setItem('newsArray', JSON.stringify(newsArray));
    localStorage.setItem('timeSaved', new Date().toString());
  }
  return newsArray;
};

export default getNewsDevelopment;
