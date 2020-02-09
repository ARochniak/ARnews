import fetchNews from '../api/fetchNews';

const getNews = async (category, count) => {
  // TODO only for development process save locally for 15 minutes
  if (category === 'World') {
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
  const response = await fetchNews(category.toLowerCase(), count);
  const newsArray = response.map((newsItem, i) => ({
    id: i,
    name: newsItem.name || newsItem.title,
    url: newsItem.url,
    // sometimes bing news api item without image field
    imageUrl: newsItem.image
      ? newsItem.image.thumbnail.contentUrl
      : newsItem.urlToImage
  }));
  if (category === 'World') {
    localStorage.setItem('newsArray', JSON.stringify(newsArray));
    localStorage.setItem('timeSaved', new Date().toString());
  }
  return newsArray;
};

export default getNews;
