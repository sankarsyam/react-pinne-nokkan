import ActionName from './../ActionName';
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
  let actionName, wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={storeTest}>
        <ConnectedRouter history={historyTest}>
          <ActionName />
        </ConnectedRouter>
      </Provider>
    );
  });
  it('renders CardText', () => {
    expect(wrapper.find('CardText').length).toBe(1);
  });
});
describe('', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={storeTest}>
        <ConnectedRouter history={historyTest}>
          <ActionName />
        </ConnectedRouter>
      </Provider>
    );
  });
  it('renders TextField', () => {
    expect(wrapper.find('TextField').length).toBe(1);
  });
});

describe('', () => {
  it('Simulate button click', () => {
    const spy = jest.fn();
    const wrapper = mount(
      <Provider store={storeTest}>
        <ConnectedRouter history={historyTest}>
          <ActionName dispatch={spy} />
        </ConnectedRouter>
      </Provider>
    );
    wrapper.setState({ actionName: 'testAction' });
    const p = wrapper.find('#submit-button');
    p.simulate('click');
    expect(wrapper.state().actionName).toBe('testAction');
  });
});
