import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from './../../../store/configureStore';
import { Provider } from 'react-redux';
import { withRouter } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import FlowGrid from '../FlowGrid';
import Dialog from 'react-md/lib/Dialogs';
const historyTest = createBrowserHistory();
const storeTest = configureStore(history);

describe('Paths', () => {
  const spy = jest.fn();
  const wrapper = mount(
    <Provider store={storeTest}>
      <ConnectedRouter history={historyTest}>
        <FlowGrid dispatch={spy} />
      </ConnectedRouter>
    </Provider>
  );
  it('renders Dialog click', () => {
    var p = wrapper.find(Dialog).at(1).props().actions[0];
    p.onClick();
    expect(wrapper.find(Dialog).at(1).props().actions[0].id).toBe(
      'submitButton'
    );
    expect(wrapper.find(Dialog).length).toBe(2);
  });
  it('renders Dialog click', () => {
    expect(wrapper.find(Dialog).at(1).props().actions[0].id).toBe(
      'submitButton'
    );
    expect(wrapper.find(Dialog).length).toBe(2);
  });
  it('renders TableActions ', () => {
    expect(wrapper.find('TableActions').length).toBe(1);
  });
  it('renders DataTable ', () => {
    expect(wrapper.find('DataTable').length).toBe(1);
  });
  it('renders Card ', () => {
    expect(wrapper.find('Card').length).toBe(1);
  });
  it('renders DataTable ', () => {
    expect(wrapper.find('Body').length).toBe(1);
  });
});
