import React from 'react';
import { shallow } from 'enzyme';
import BurgerMenu from './index';

describe('BurgerMenu', () => {
  let mockToggleAside;
  let aside;
  let wrapper;

  beforeEach(() => {
    mockToggleAside = jest.fn();
    aside = {
      isAsideHide: false,
      toggleAside: mockToggleAside
    };
    wrapper = shallow(<BurgerMenu aside={aside} />);
  });

  test('should has class burger-menu_close on isAsideHide=false', () => {
    expect(wrapper.find('button').hasClass('burger-menu_close')).toBe(true);
  });

  test('should trigger toggleAside on click and change className', () => {
    wrapper.simulate('click');
    expect(mockToggleAside.mock.calls.length).toBe(1);
    aside.isAsideHide = true;
    wrapper.setProps({ aside });
    expect(wrapper.find('button').hasClass('burger-menu_close')).toBe(false);
  });
});
