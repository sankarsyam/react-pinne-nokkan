import { setResponse } from '../utils/responseHandler';
export async function loadUserProfile(profileId) {
  const response = await fetch(process.env.REACT_APP_PROFILE_API + profileId, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json' }),
  });
  return await setResponse(response);
}

export async function loadFlowData() {
  const response = await fetch(
    process.env.REACT_APP_EXPERIENCE_FLOWS_API + 'api/v1/flows/',
    {
      method: 'GET',
    }
  );
  return await setResponse(response);
}

export async function deleteFlowData(flowID) {
  const response = await fetch(
    process.env.REACT_APP_EXPERIENCE_FLOWS_API + 'api/v1/flows/' + flowID,
    {
      method: 'DELETE',
    }
  );
  return await response;
}
