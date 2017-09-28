import { setResponse } from '../utils/responseHandler';

export async function saveFlow(flowObj) {
  const response = await fetch(
    process.env.REACT_APP_EXPERIENCE_FLOWS_API + 'api/v1/flows/',
    {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(flowObj),
    }
  );
  return await setResponse(response);
}

export async function editFlow(flowObj, flowId) {
  const response = await fetch(
    process.env.REACT_APP_EXPERIENCE_FLOWS_API + 'api/v1/flows/' + flowId,
    {
      method: 'PUT',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(flowObj),
    }
  );
  return await setResponse(response);
}

export async function loadFlowById(flowID) {
  const response = await fetch(
    process.env.REACT_APP_EXPERIENCE_FLOWS_API + 'api/v1/flows/' + flowID,
    {
      method: 'GET',
    }
  );
  return await setResponse(response);
}

export async function postToDispatch(flowID, profileID) {
  const flow = await loadFlowById(flowID);
  let inputForDispatch = {};
  inputForDispatch.action = flow.action;
  inputForDispatch.actionID = flow.action._id;
  inputForDispatch.profileID = profileID;
  const response = await fetch(
    process.env.REACT_APP_DISPATCH_API_URL + '/api/v1/actions',
    {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(inputForDispatch),
    }
  );
  return setResponse(response);
}
