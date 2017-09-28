import { setResponse } from '../utils/responseHandler';

export async function userLogin(email, password) {
  const response = await fetch(process.env.REACT_APP_LOGIN_API, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify({ email: email, password: password }),
  });
  return await setResponse(response);
}
