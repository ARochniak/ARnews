const fetchAzureNews = async query => {
  const response = await fetch(
    'https://api.cognitive.microsoft.com/bing/v7.0/news?' +
      `mkt=en-us&sortBy=Date&${query}`,
    {
      headers: {
        'Ocp-Apim-Subscription-Key': '6808d519218c4eeba588ed04da827f0b'
      }
    }
  );
  const json = await response.json();
  return json.error ? false : json.value;
};

const fetchNewsApi = async query => {
  const response = await fetch(query);
  const json = await response.json();
  return json.articles;
};

const fetchNews = async query => {
  const azureRes = await fetchAzureNews(query.azure);
  if (azureRes) return azureRes;
  const newsApiRes = await fetchNewsApi(query.newsApi);
  return newsApiRes;
};

export default fetchNews;
