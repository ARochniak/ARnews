import React, { useEffect, useState } from 'react';
import NewsItem from '../../components/NewsItem';

import './index.css';

const Main = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://api.cognitive.microsoft.com/bing/v7.0/news/search?mkt=en-us',
        {
          headers: {
            'Ocp-Apim-Subscription-Key': '6808d519218c4eeba588ed04da827f0b'
          }
        }
      );
      const json = await response.json();
      return json.value;
    };
    fetchData().then(res => setLoaded(res));
  }, []);
  return (
    <div className="main">
      {!loaded ? (
        <h2>Loading...</h2>
      ) : (
        loaded.map((newsItem, i) => <NewsItem key={i} newsItem={newsItem} />)
      )}
    </div>
  );
};

export default Main;
