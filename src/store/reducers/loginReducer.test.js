import items from './loginReducer';

describe('items login reducer', () => {
  const initialState = { isAuthenticated: false, isAdmin: false, error: '' };
  it('handles LOGIN_SUCCESS action', () => {
    const action = {
      type: 'LOGIN_SUCCESS',
      isAuthenticated: true,
      isAdmin: true,
    };
  });

  it('handles  LOGIN_FALURE action', () => {
    const action = { type: 'LOGIN_SUCCESS', error: 'Authentication Failed' };
  });
});
