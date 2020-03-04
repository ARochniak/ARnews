import fetchNews from '../api/fetchNews';

const optionsToQuery = ({ category, count, q }) => {
  if (q) {
    return {
      azure: `q=${q}&count=${count}`,
      newsApi: `q=${q}&pageSize=${count}`
    };
  }
  const newsApiCategory = category === 'world' ? `general` : category;
  return {
    azure: `category=${category}&count=${count}`,
    newsApi: `category=${newsApiCategory}&pageSize=${count}`
  };
};

const fetchNewsProxy = options => {
  const query = optionsToQuery(options);
  return fetchNews(query);
};

export default fetchNewsProxy;
