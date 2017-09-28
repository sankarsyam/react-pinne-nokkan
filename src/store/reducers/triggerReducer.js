import * as types from '../../actions/actionType';

const initialState = { triggerList: [], error: '' };

export default function triggerReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_TRIGGER_LIST_REQUEST:
      return {
        ...state,
        triggerList: action.triggerList,
        error: '',
      };
    default:
      return state;
  }
}
