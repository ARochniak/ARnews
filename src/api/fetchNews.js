const fetchAzureNews = async (category, count) => {
  const response = await fetch(
    'https://api.cognitive.microsoft.com/bing/v7.0/news?' +
      `mkt=en-us&sortBy=Date&category=${category}&count=${count}`,
    {
      headers: {
        'Ocp-Apim-Subscription-Key': '6808d519218c4eeba588ed04da827f0b'
      }
    }
  );
  const json = await response.json();
  return json.error ? false : json.value;
};

const fetchNewsApi = async (category, count) => {
  const response = await fetch(
    'https://newsapi.org/v2/top-headlines?country=us&' +
      `apiKey=fddc6392d1c449f2aefb2da74803024e&category=${category}&pageSize=${count}`
  );
  const json = await response.json();
  return json.articles;
};

const fetchNews = async (category = 'world', count = 10) => {
  const azureRes = await fetchAzureNews(category, count);
  if (azureRes) return azureRes;
  const newsApiCategory = category === 'world' ? `general` : category;
  const newsApiRes = await fetchNewsApi(newsApiCategory, count);
  return newsApiRes;
};

export default fetchNews;
