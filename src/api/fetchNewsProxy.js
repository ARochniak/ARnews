import fetchNews from './fetchNews';

const getNewsApiQuery = type => {
  return (
    `https://newsapi.org/v2/${type}` +
    'apiKey=fddc6392d1c449f2aefb2da74803024e&'
  );
};

const getAzureQuery = q => {
  const endpoint = q ? '/search' : '';
  return `https://api.cognitive.microsoft.com/bing/v7.0/news${endpoint}?`;
};

const optionsToQuery = ({ category, count, q }) => {
  let azureQuery = getAzureQuery(true);
  let newsApiQuery = getNewsApiQuery('everything?');
  if (q) {
    return {
      azure: `${azureQuery}mkt=en-us&sortBy=Date&q=${q}&count=${count}`,
      newsApi: `${newsApiQuery}q=${q}&pageSize=${count}`
    };
  }
  azureQuery = getAzureQuery(false);
  newsApiQuery = getNewsApiQuery('top-headlines?country=us&');
  const newsApiCategory = category === 'world' ? `general` : category;
  return {
    azure: `${azureQuery}category=${category}&count=${count}`,
    newsApi: `${newsApiQuery}category=${newsApiCategory}&pageSize=${count}`
  };
};

const fetchNewsProxy = options => {
  const query = optionsToQuery(options);
  return fetchNews(query);
};

export default fetchNewsProxy;
