import React from 'react';

import './index.css';

// TODO сделать как в 4пда

const NewsItem = ({ newsItem }) => {
  return (
    <div className="news">
      <div className="news__content">
        <h2 className="news__content-title">{newsItem.name}</h2>
        <a href={newsItem.url} target="_blank" rel="noreferrer noopener">
          link to news
        </a>
      </div>

      <div className="news__img">
        {newsItem.imageUrl && (
          <img src={newsItem.imageUrl} alt={newsItem.name} />
        )}
      </div>
    </div>
  );
};

const News = ({ news }) => {
  return news.map(newsItem => (
    <NewsItem newsItem={newsItem} key={newsItem.id} />
  ));
};

export default News;
