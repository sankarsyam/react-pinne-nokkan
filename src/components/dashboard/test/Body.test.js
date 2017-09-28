import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import experienceFlowData from '../constants/experienceFlowData';

import Body from '../Body';

let experienceFlow = [];
describe('Paths', () => {
  function getExperienceFlowData(flowList) {
    experienceFlow = [];
    flowList.map(flowData => {
      let data = {
        triggerName: flowData.name,
        triggerID: flowData._id,
        actionName: flowData.action.name,
        settings: {
          expiresInMinutes: flowData.action.expiresInMinutes,
          textMessage: flowData.action.textMessage ? 'Yes' : 'No',
          offerLimit: flowData.action.offerLimit,
          isTriggerEvent: flowData.action.isTriggerEvent ? 'Yes' : 'No',
        },
        actors: flowData.action.actors,
        isActive: flowData.isActive,
      };
      experienceFlow.push(data);
    });
    return experienceFlow;
  }

  const wrapper = shallow(
    <Body facts={getExperienceFlowData(experienceFlowData)} />
  );

  let newexperienceFlowData = experienceFlowData.concat();
  newexperienceFlowData = newexperienceFlowData.splice(0, 9);

  const wrapper2 = shallow(
    <Body facts={getExperienceFlowData(newexperienceFlowData)} />
  );
  it('renders  TableBody', () => {
    expect(wrapper.find('TableBody').exists()).toBe(true);
  });

  it('renders  Row', () => {
    expect(wrapper.find('Row').exists()).toBe(true);
  });

  it('renders  TextFields ', () => {
    expect(wrapper.find('Row').length).toBe(
      getExperienceFlowData(experienceFlowData).length
    );
  });

  it('it should remove element from an array', () => {
    expect(wrapper2.find('Row').length).toBe(
      getExperienceFlowData(newexperienceFlowData).length
    );
  });
});
