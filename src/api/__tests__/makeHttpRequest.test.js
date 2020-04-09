import makeHttpRequest from '../makeHttpRequest';

describe('Function makeHttpRequest', () => {
  test('should return http requests for world category', () => {
    const input = { category: 'world', count: 10, q: null };
    const output = {
      azure:
        'https://api.cognitive.microsoft.com/bing/v7.0/news?category=world&count=10',
      newsApi:
        'https://newsapi.org/v2/top-headlines?country=us&' +
        'apiKey=fddc6392d1c449f2aefb2da74803024e&' +
        'category=general&pageSize=10'
    };
    expect(makeHttpRequest(input)).toEqual(expect.objectContaining(output));
  });

  test('should return http requests for search query (nba)', () => {
    const input = { category: null, count: 20, q: 'nba' };
    const output = {
      azure:
        'https://api.cognitive.microsoft.com/bing/v7.0/news/search?mkt=en-us&sortBy=Date&q=nba&count=20',
      newsApi:
        'https://newsapi.org/v2/everything?' +
        'apiKey=fddc6392d1c449f2aefb2da74803024e&' +
        'q=nba&pageSize=20'
    };
    expect(makeHttpRequest(input)).toEqual(expect.objectContaining(output));
  });
});
