import flowList from '../constants/experienceFlowData';
const getExperienceFlowData = () => {
  let experienceFlow = [];
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
};

export default getExperienceFlowData;
