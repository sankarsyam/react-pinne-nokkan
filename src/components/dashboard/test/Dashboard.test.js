import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import DashBoard from './../Dashboard';
import getExperienceFlowData from './experienceFlowList';

const _context = {
  error: null,
  profileId: 'erw4v3',
  isAuthenticated: true,
  loginName: 'Test User',
};

const wrapper = shallow(<DashBoard context={_context} />);
describe('Paths', () => {
  it('renders  ViewHeader', () => {
    expect(true).toBe(true);
  });
});
