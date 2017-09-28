import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import TableActions from '../TableActions';
import configureStore from './../../../store/configureStore';
import { Provider } from 'react-redux';
import { withRouter } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import FlowGrid from '../FlowGrid';

const historyTest = createBrowserHistory();
const storeTest = configureStore(history);
import TableCardHeader from 'react-md/lib/DataTables/TableCardHeader';
let _props = {
  count: 1,
};
describe('Paths', () => {
  let tableActions, wrapper;
  const spy = jest.fn();
  beforeEach(() => {
    wrapper = mount(
      <Provider store={storeTest}>
        <ConnectedRouter history={historyTest}>
          <TableActions dispatch={spy} {..._props} />
        </ConnectedRouter>
      </Provider>
    );
    tableActions = wrapper.find(TableActions);
  });
  it('renders Button', () => {
    expect(wrapper.find('Button').length).toBe(4);
  });
  it('renders Button', () => {
    expect(wrapper.find('TableCardHeader').length).toBe(1);
  });
  it('renders Test Button', () => {
    expect(wrapper.find('#submit-test-button').length).toBe(1);
  });
});
