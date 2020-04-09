import React from 'react';
import { shallow } from 'enzyme';
import DarkMode from './index';

describe('DarkMode', () => {
  test('should trigger darkModeToggle on click', () => {
    const mockDarkModeToggle = jest.fn();
    const wrapper = shallow(<DarkMode darkModeToggle={mockDarkModeToggle} />);
    wrapper.find('input').simulate('click');
    expect(mockDarkModeToggle.mock.calls.length).toBe(1);
  });
});
