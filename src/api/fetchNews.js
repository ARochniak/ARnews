const fetchAzureNews = async query => {
  const response = await fetch(query, {
    headers: {
      'Ocp-Apim-Subscription-Key': '471a148ab5e5441cb0cce6c70accaff0'
    }
  });
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
