const fetchNews = async (category = 'world', count = 10) => {
  const response = await fetch(
    `https://api.cognitive.microsoft.com/bing/v7.0/news?mkt=en-us&category=${category}&count=${count}`,
    {
      headers: {
        'Ocp-Apim-Subscription-Key': '6808d519218c4eeba588ed04da827f0b'
      }
    }
  );
  const json = await response.json();
  return json.value;
};

export default fetchNews;
