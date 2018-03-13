import * as React from 'react';
import {shallow} from 'enzyme';
import {CheckboxWithLabel} from './CheckboxWithLabel';

test('CheckboxWithLabel changes text after click', () => {
  const wrapper = shallow(<CheckboxWithLabel labelOn="on" labelOff="off" />);

  expect(wrapper.text()).toEqual('off');
  wrapper.find('input').simulate('change');
  expect(wrapper.text()).toEqual('on');
});
