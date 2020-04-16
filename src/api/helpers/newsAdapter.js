import uuid from 'react-uuid';

const newsAdapter = newsArray => {
  return newsArray.map(newsItem => ({
    id: uuid(),
    name: newsItem.name || newsItem.title,
    url: newsItem.url,
    // sometimes bing news api item without image field
    imageUrl: newsItem.image
      ? newsItem.image.thumbnail.contentUrl
      : newsItem.urlToImage
  }));
};

export default newsAdapter;
