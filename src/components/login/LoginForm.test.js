import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import Login from './LoginForm';

describe('Paths', () => {
  let _context = {
    profileId: '',
    error: '',
    dispatch: () => {},
  };
  const wrapper = shallow(<Login context={_context} />);

  it('renders  Card', () => {
    expect(wrapper.find('Card').exists()).toBe(true);
  });

  it('renders CardText', () => {
    expect(wrapper.find('CardText').exists()).toBe(true);
  });

  it('renders 2 TextFields ', () => {
    expect(wrapper.find('TextField').length).toBe(2);
  });

  it('renders TextField Email', () => {
    expect(wrapper.find('TextField').first().props().type).toBe('email');
  });

  it('renders a login form with email and password', () => {
    expect(wrapper.find('#email').exists()).toBe(true);
    expect(wrapper.find('#password').exists()).toBe(true);
  });

  it('has a disabled submit button if no email or password', () => {
    expect(wrapper.find('#submit-button').props().disabled).toBe(true);
    wrapper.setState({ email: 'example@example.com', password: 'password' });
    expect(wrapper.find('#submit-button').props().disabled).toBe(false);
  });

  it('Simulate button click', () => {
    const spy = jest.fn();
    const wrapper = mount(<Login dispatch={spy} context={_context} />);
    wrapper.setState({ email: 'rajeeb@gmail.com', password: 'pass' });
    const p = wrapper.find('#submit-button');
    p.simulate('click');
    expect(wrapper.state().email).toBe('');
    expect(wrapper.state().password).toBe('');
  });
});
