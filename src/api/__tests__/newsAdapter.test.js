import newsAdapter from '../newsAdapter';

describe('Function newsAdapter', () => {
  test('should return correct array when receive newsAPI array', () => {
    const input = [
      {
        title: 'A',
        url: 'http://11',
        urlToImage: 'http://12'
      },
      {
        title: 'B',
        url: 'http://21',
        urlToImage: 'http://22'
      }
    ];
    const output = [
      {
        id: expect.any(String),
        name: 'A',
        url: 'http://11',
        imageUrl: 'http://12'
      },
      {
        id: expect.any(String),
        name: 'B',
        url: 'http://21',
        imageUrl: 'http://22'
      }
    ];
    expect(newsAdapter(input)).toEqual(expect.objectContaining(output));
  });
  test('should return correct array when receive bing news API array', () => {
    const input = [
      {
        name: 'A',
        url: 'http://11',
        image: { thumbnail: { contentUrl: 'http://12' } }
      },
      {
        name: 'B',
        url: 'http://21',
        image: { thumbnail: { contentUrl: 'http://22' } }
      }
    ];
    const output = [
      {
        id: expect.any(String),
        name: 'A',
        url: 'http://11',
        imageUrl: 'http://12'
      },
      {
        id: expect.any(String),
        name: 'B',
        url: 'http://21',
        imageUrl: 'http://22'
      }
    ];
    expect(newsAdapter(input)).toEqual(expect.objectContaining(output));
  });
});
