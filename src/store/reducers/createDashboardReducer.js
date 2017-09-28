import * as types from '../../actions/actionType';

const initialState = {
  flow: {},
  triggerEvents: [],
  directiveList: [],
  targetedActors: [],
  footerStyles: {},
  error: '',
};

export default function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_FLOW_DATA:
      return {
        ...state,
        flow: action.flow,
        error: '',
      };
    case types.LOAD_TRIGGER_EVENTS:
      return {
        ...state,
        triggerEvents: action.triggerEvents,
        error: '',
      };
    case types.LOAD_DIRECTIVE_LIST:
      return {
        ...state,
        directiveList: action.directiveList,
        error: '',
      };
    case types.LOAD_ACTOR_LIST:
      return {
        ...state,
        targetedActors: action.targetedActors,
        error: '',
      };
    case types.ADD_FOOTER_STYLES:
      return {
        ...state,
        footerStyles: action.footerStyles,
        error: '',
      };
    case types.SAVE_FLOW_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case types.LOAD_FLOW_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case types.RESET_FLOW:
      return (state = initialState);

    default:
      return state;
  }
}
