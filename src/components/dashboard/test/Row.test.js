import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import Row from '../Row';
import getExperienceFlowData from './experienceFlowList';

describe('Paths', () => {
  let fact = getExperienceFlowData()[0];
  const wrapper = shallow(<Row key={fact.triggerID} {...fact} />);

  it('renders  TableRow ', () => {
    expect(wrapper.find('TableRow').exists()).toBe(true);
  });
  it('renders  TableColumnTooltiped ', () => {
    expect(wrapper.find('TableColumnTooltiped').length).toBe(5);
  });
});
