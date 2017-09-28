import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import TriggerName from '../TriggerName';
import configureStore from './../../../store/configureStore';
import { Provider } from 'react-redux';
import { withRouter } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
const historyTest = createBrowserHistory();
const storeTest = configureStore(history);

describe('', () => {
  let triggerName, wrapper;
  const spy = jest.fn();
  beforeEach(() => {
    wrapper = mount(
      <Provider store={storeTest}>
        <ConnectedRouter history={historyTest}>
          <TriggerName dispatch={spy} />
        </ConnectedRouter>
      </Provider>
    );
    triggerName = wrapper.find(TriggerName);
  });
  it('renders CardText', () => {
    expect(triggerName.find('CardText').length).toBe(1);
  });
});

describe('', () => {
  let triggerName, wrapper;
  const spy = jest.fn();
  beforeEach(() => {
    wrapper = mount(
      <Provider store={storeTest}>
        <ConnectedRouter history={historyTest}>
          <TriggerName dispatch={spy} />
        </ConnectedRouter>
      </Provider>
    );
    triggerName = wrapper.find(TriggerName);
  });
  it('renders TextField', () => {
    expect(triggerName.find('TextField').length).toBe(1);
  });
});

describe('', () => {
  it('Simulate button click', () => {
    const spy = jest.fn();
    const wrapper = mount(
      <Provider store={storeTest}>
        <ConnectedRouter history={historyTest}>
          <TriggerName dispatch={spy} />
        </ConnectedRouter>
      </Provider>
    );
    wrapper.setState({ triggerName: 'testTrigger' });
    const p = wrapper.find('#submit-button');
    p.simulate('click');
    expect(wrapper.state().triggerName).toBe('testTrigger');
  });
});
