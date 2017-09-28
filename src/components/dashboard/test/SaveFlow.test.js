import SaveFlow from './../SaveFlow';
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
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={storeTest}>
        <ConnectedRouter history={historyTest}>
          <SaveFlow />
        </ConnectedRouter>
      </Provider>
    );
  });
  it('renders Button', () => {
    expect(wrapper.find('Button').length).toBe(1);
  });
});
