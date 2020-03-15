import fetchNews from './fetchNews';

const getNewsApiQuery = type => {
  return (
    `https://newsapi.org/v2/${type}` +
    'apiKey=fddc6392d1c449f2aefb2da74803024e&'
  );
};

const optionsToQuery = ({ category, count, q }) => {
  let newsApiQuery = getNewsApiQuery('everything?');
  if (q) {
    return {
      azure: `q=${q}&count=${count}`,
      newsApi: `${newsApiQuery}q=${q}&pageSize=${count}`
    };
  }
  newsApiQuery = getNewsApiQuery('top-headlines?country=us&');
  const newsApiCategory = category === 'world' ? `general` : category;
  return {
    azure: `category=${category}&count=${count}`,
    newsApi: `${newsApiQuery}category=${newsApiCategory}&pageSize=${count}`
  };
};

const fetchNewsProxy = options => {
  const query = optionsToQuery(options);
  return fetchNews(query);
};

export default fetchNewsProxy;
