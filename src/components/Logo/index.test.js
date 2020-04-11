import React from 'react';
import { shallow } from 'enzyme';
import Logo from './index';

describe('Logo', () => {
  test('should be h1 element', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper.is('h1')).toBe(true);
  });
});
