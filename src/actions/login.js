import * as types from './actionType';
import { userLogin } from '../services/loginApi';
import { push } from 'react-router-redux';

export function loginSuccess(profileId) {
  return { type: types.LOGIN_SUCCESS, profileId };
}
export function loginFailure(error) {
  return { type: types.LOGIN_FAILURE, error };
}

export function login(email, password) {
  return async dispatch => {
    try {
      const response = await userLogin(email, password);
      sessionStorage.setItem('jwt', response.token);
      dispatch(loginSuccess(response.id));
      dispatch(push('/dashboard'));
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
}
