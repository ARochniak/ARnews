import fetchNews from '../api/fetchNews';

const getNews = async (category, count) => {
  // TODO save localStorage for 15 minutes
  const localNews = localStorage.getItem('newsArray');
  if (localNews) return JSON.parse(localNews);
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
  localStorage.setItem('newsArray', JSON.stringify(newsArray));
  return newsArray;
};

export default getNews;
