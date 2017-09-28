import React from 'react';
import { shallow } from 'enzyme';

import { App } from './App';
const wrapper = shallow(<App />);
describe('Container: App', () => {
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render one div', () => {
    expect(wrapper.find('div').length).toBe(1);
  });

  it('should render Route', () => {
    expect(wrapper.find('Route').exists()).toBe(true);
  });

  it('renders the index Route', () => {
    expect(wrapper.find('Route').first().props().path).toBe('/');
  });
});
