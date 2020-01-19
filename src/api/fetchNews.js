const fetchNews = async (category = 'world', count = 10) => {
  let queryCategory = `category=${category}`;
  let queryCount = `count=${count}`;

  let response = await fetch(
    'https://api.cognitive.microsoft.com/bing/v7.0/news?' +
      `mkt=en-us&sortBy=Date&${queryCategory}&${queryCount}`,
    {
      headers: {
        'Ocp-Apim-Subscription-Key': '6808d519218c4eeba588ed04da827f0b'
      }
    }
  );
  let json = await response.json();
  if (!json.error) return json.value;
  queryCategory =
    category === 'world' ? `category=general` : `category=${category}`;
  queryCount = `pageSize=${count}`;
  response = await fetch(
    'https://newsapi.org/v2/top-headlines?country=us&' +
      `apiKey=fddc6392d1c449f2aefb2da74803024e&${queryCategory}&${queryCount}`
  );
  json = await response.json();
  return json.articles;
};

export default fetchNews;
