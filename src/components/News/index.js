import React from 'react';

import './index.css';

export const NewsItem = ({ item }) => {
  return (
    <li className="news">
      <div className="news__content">
        <h2 className="news__content-title">{item.name}</h2>
        <a href={item.url} target="_blank" rel="noreferrer noopener">
          link to news
        </a>
      </div>
      {item.imageUrl && (
        <img className="news__img" src={item.imageUrl} alt="news" />
      )}
    </li>
  );
};

const News = ({ news }) => {
  return (
    <ul className="news-container">
      {news.map(item => (
        <NewsItem item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default News;
