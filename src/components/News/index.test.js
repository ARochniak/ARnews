import React from 'react';
import { shallow } from 'enzyme';
import News, { NewsItem } from './index';

describe('NewsItem', () => {
  let item;
  let wrapper;
  beforeEach(() => {
    item = { name: 'Hot news', url: 'http://', imageUrl: 'http://' };
    wrapper = shallow(<NewsItem item={item} />);
  });
  test('should render a title from props', () => {
    expect(wrapper.find('h2').text()).toBe(item.name);
  });
  test('should render a link with href from props', () => {
    expect(wrapper.find('a').props().href).toBe(item.url);
  });
  test('should render image if prop has url to it', () => {
    expect(wrapper.find('img').props().src).toBe(item.imageUrl);
  });
  test("shouldn't render image if prop has no imageUrl", () => {
    item.imageUrl = null;
    wrapper = shallow(<NewsItem item={item} />);
    expect(wrapper.exists('img')).toBe(false);
  });
});

describe('News', () => {
  const news = [
    { name: 'Hot news1', url: 'http://', imageUrl: 'http://', id: 1 },
    { name: 'Hot news2', url: 'http://', imageUrl: 'http://', id: 2 }
  ];
  const wrapper = shallow(<News news={news} />);
  test('should render a list of NewsItem with news elements as prop', () => {
    expect(wrapper.find('NewsItem')).toHaveLength(2);
  });

  test('should have first NewsItem with correct item prop', () => {
    const newsItem = wrapper.find('NewsItem').at(0);
    expect(newsItem.props().item).toEqual(news[0]);
  });
});
