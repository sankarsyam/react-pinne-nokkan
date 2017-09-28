import { loginSuccess, loginFailure } from './login';

describe('loginSuccess', () => {
  it('returns a login success action ', () => {
    const profileId = '5940f8cd028d612970547ddc';
    const action = { type: 'LOGIN_SUCCESS', profileId };
    expect(loginSuccess(profileId)).toEqual(action);
  });
});
describe('loginFailure', () => {
  it('returns a login failure action', () => {
    const error = 'User Authentication Failed';
    const action = { type: 'LOGIN_FAILURE', error: error };
    expect(loginFailure(error)).toEqual(action);
  });
});
