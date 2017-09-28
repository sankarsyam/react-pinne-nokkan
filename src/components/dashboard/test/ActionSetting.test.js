import ActionSetting from './../ActionSetting';
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
          <ActionSetting />
        </ConnectedRouter>
      </Provider>
    );
  });
  it('renders section', () => {
    expect(wrapper.find('SelectField').length).toBe(4);
  });
});

describe('', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={storeTest}>
        <ConnectedRouter history={historyTest}>
          <ActionSetting />
        </ConnectedRouter>
      </Provider>
    );
  });
  it('renders Button', () => {
    expect(wrapper.find('Button').length).toBe(1);
  });
});

describe('', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={storeTest}>
        <ConnectedRouter history={historyTest}>
          <ActionSetting />
        </ConnectedRouter>
      </Provider>
    );
  });
  it('renders Section', () => {
    expect(wrapper.find('section').length).toBe(5);
  });
});
