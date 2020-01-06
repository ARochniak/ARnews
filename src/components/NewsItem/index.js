import React from 'react';

import './index.css';

function NewsItem({ newsItem }) {
  return (
    <div className="news">
      <div className="news__content">
        <h2 className="news__content__title">{newsItem.name}</h2>
        <a href={newsItem.url} target="_blank" rel="noreferrer noopener">
          link to news
        </a>
      </div>

      <div className="news__img">
        <img src={newsItem.image.thumbnail.contentUrl} alt={newsItem.name} />
      </div>
    </div>
  );
}

export default NewsItem;
