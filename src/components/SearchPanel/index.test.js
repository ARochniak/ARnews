import React from 'react';
import { mount } from 'enzyme';
import { SearchPanel } from './index';

describe('SearchPanel', () => {
  test('should trigger dispatch on form submit', () => {
    const dispatch = jest.fn();
    const wrapper = mount(<SearchPanel dispatch={dispatch} />);
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    });
    expect(dispatch.mock.calls.length).toBe(1);
  });
});
