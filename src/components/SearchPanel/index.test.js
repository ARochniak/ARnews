import React from 'react';
import { mount, shallow } from 'enzyme';
import { SearchPanel } from './index';

describe('SearchPanel', () => {
  const dispatch = jest.fn();
  test('should trigger dispatch on form submit', () => {
    const wrapper = mount(<SearchPanel dispatch={dispatch} />);
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    });
    expect(dispatch.mock.calls.length).toBe(1);
  });
  test('should has field with changing class "field_hide"', () => {
    const wrapper = shallow(<SearchPanel dispatch={dispatch} />);
    expect(wrapper.find('input').hasClass('field_hide')).toBe(true);
    wrapper.find('button').simulate('click');
    expect(wrapper.find('input').hasClass('field_hide')).toBe(false);
  });
});
