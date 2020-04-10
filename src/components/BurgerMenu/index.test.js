import React from 'react';
import { shallow } from 'enzyme';
import BurgerMenu from './index';

describe('BurgerMenu', () => {
  let mockToggleAside;
  let props;
  let wrapper;

  beforeEach(() => {
    mockToggleAside = jest.fn();
    props = {
      aside: {
        isAsideHide: false,
        toggleAside: mockToggleAside
      }
    };
    wrapper = shallow(<BurgerMenu {...props} />);
  });

  test('should has class burger-menu_close on isAsideHide=false', () => {
    expect(wrapper.find('button').hasClass('burger-menu_close')).toBe(true);
  });

  test('should trigger toggleAside on click and change className', () => {
    wrapper.simulate('click');
    expect(mockToggleAside.mock.calls.length).toBe(1);
    props.aside.isAsideHide = true;
    wrapper.setProps({ ...props });
    expect(wrapper.find('button').hasClass('burger-menu_close')).toBe(false);
  });
});
