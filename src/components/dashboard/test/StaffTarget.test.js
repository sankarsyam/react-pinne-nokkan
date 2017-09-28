import StaffTarget from './../StaffTarget';
import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from './../../../store/configureStore';
import { Provider } from 'react-redux';
import { withRouter } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
const historyTest = createBrowserHistory();
const storeTest = configureStore(history);

describe('', () => {
  it('Simulate button click', () => {
    const spy = jest.fn();
    const wrapper = mount(
      <Provider store={storeTest}>
        <ConnectedRouter history={historyTest}>
          <StaffTarget dispatch={spy} />
        </ConnectedRouter>
      </Provider>
    );
    it('renders Button', () => {
      expect(wrapper.find('Button').length).toBe(1);
    });
  });
});
