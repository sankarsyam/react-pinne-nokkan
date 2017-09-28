import * as types from '../../actions/actionType';

const initialState = { isAuthenticated: false, profileId: '', error: '' };

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        profileId: action.profileId,
        error: '',
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        profileId: '',
        error: action.error,
      };
    default:
      return state;
  }
}
