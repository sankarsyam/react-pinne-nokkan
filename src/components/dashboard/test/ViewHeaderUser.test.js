import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';

import ViewHeaderUser from '../ViewHeaderUser';
describe('Paths', () => {
  const loginName = 'test';
  const wrapper = shallow(<ViewHeaderUser loginName={loginName} />);

  it('renders user logo', () => {
    expect(wrapper.find('img').exists()).toBe(true);
  });
});
