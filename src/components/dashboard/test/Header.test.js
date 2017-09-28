import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import getExperienceFlowData from './experienceFlowList';
import Header from '../Header';

describe('Paths', () => {
  const wrapper = shallow(<Header />);
  it('renders  TableHeader ', () => {
    expect(wrapper.find('TableHeader').exists()).toBe(true);
  });
  it('renders  TableRow ', () => {
    expect(wrapper.find('TableRow').exists()).toBe(true);
  });
});
