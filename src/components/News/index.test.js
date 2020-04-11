import React from 'react';
import { shallow } from 'enzyme';
import { NewsItem } from './index';

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

describe('NewsItem', () => {
  const item = { name: 'Hot news', url: 'http://', imageUrl: 'http://' };
  const wrapper = shallow(<NewsItem item={item} />);
  test('should render a title from props', () => {
    expect(wrapper.find('h2').text()).toBe(item.name);
  });
});
