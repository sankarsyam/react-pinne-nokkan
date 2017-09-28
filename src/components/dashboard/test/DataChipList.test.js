import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import DataChipList from '../DataChipList';
const actors = ['front-desk', 'bell-hop'];

describe('Paths', () => {
  const wrapper = shallow(<DataChipList actors={actors} />);

  it('renders  Chips ', () => {
    expect(wrapper.find('Chip').length).toBe(2);
  });
});
