import * as types from '../../actions/actionType';

const initialState = {
  loginName: '',
  flowList: [],
  error: '',
  isNewItem: false,
};

export default function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_USER_NAME:
      return {
        ...state,
        loginName: action.loginName,
        error: '',
      };
    case types.FETCH_FLOW_LIST_REQUEST:
      return {
        ...state,
        flowList: action.flowList,
        error: '',
      };
    case types.ADD_FLOW_TO_FLOW_LIST:
      return {
        ...state,
        flowList: [action.flow, ...state.flowList],
        error: '',
      };
    case types.IS_NEW_ITEM_ADDED:
      return {
        ...state,
        isNewItem: action.isNewItem,
        error: '',
      };
    default:
      return state;
  }
}
