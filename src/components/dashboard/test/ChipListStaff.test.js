import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import ChipList from '../ChipListStaff';
const actors = ['Front Desk', 'Valet'];

describe('Paths', () => {
  const wrapper = shallow(<ChipList actors={actors} />);

  it('renders  Chips ', () => {
    expect(wrapper.find('Chip').length).toBe(2);
  });
});
