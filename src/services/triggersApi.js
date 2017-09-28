import { setResponse } from '../utils/responseHandler';

export async function loadTriggerList() {
  const response = await fetch(
    process.env.REACT_APP_EXPERIENCE_FLOWS_API + 'api/v1/triggers',
    {
      method: 'GET',
      headers: new Headers({ 'Content-Type': 'application/json' }),
    }
  );
  return await setResponse(response);
}
