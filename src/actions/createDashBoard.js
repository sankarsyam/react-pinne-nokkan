import * as types from './actionType';
import { saveFlow, loadFlowById } from '../services/flowApi';

export function loadFlowData(flow) {
  return { type: types.LOAD_FLOW_DATA, flow };
}
export function loadTriggerEventsData(triggerEvents) {
  return { type: types.LOAD_TRIGGER_EVENTS, triggerEvents };
}
export function loadDirectives(directiveList) {
  return { type: types.LOAD_DIRECTIVE_LIST, directiveList };
}
export function loadActors(targetedActors) {
  return { type: types.LOAD_ACTOR_LIST, targetedActors };
}
export function saveFlowSuccess(flow) {
  return { type: types.ADD_FLOW_TO_FLOW_LIST, flow };
}
export function loadFooterProgressStyles(footerStyles) {
  return { type: types.ADD_FOOTER_STYLES, footerStyles };
}
export function saveFlowFailure(error) {
  return { type: types.SAVE_FLOW_FAILURE, error };
}
export function resetFlowState() {
  return { type: types.RESET_FLOW };
}
export function loadFlowFailure(error) {
  return { type: types.LOAD_FLOW_FAILURE, error };
}
export function loadFlowDataById(flow) {
  return { type: types.LOAD_FLOW_DATA, flow };
}
export function loadFlowDataFailure(error) {
  return { type: types.LOAD_FLOW_FAILURE, error };
}

export function loadFlow(flow) {
  return dispatch => {
    try {
      dispatch(loadFlowData(flow));
    } catch (error) {
      dispatch(loadFlowFailure(error.message));
    }
  };
}

export function loadTriggerEvents(triggerEvents) {
  return dispatch => {
    try {
      dispatch(loadTriggerEventsData(triggerEvents));
    } catch (error) {}
  };
}

export function loadDirectiveList(directiveList) {
  return dispatch => {
    try {
      dispatch(loadDirectives(directiveList));
    } catch (error) {}
  };
}

export function loadTargetedActors(targetedActors) {
  return dispatch => {
    try {
      dispatch(loadActors(targetedActors));
    } catch (error) {}
  };
}

export function saveFlowData(flow) {
  return async dispatch => {
    try {
      const response = await saveFlow(flow);
      dispatch(saveFlowSuccess(response));
    } catch (error) {
      dispatch(saveFlowFailure(error.message));
    }
  };
}

export function loadFooterProgressStyle(footerStyles) {
  return dispatch => {
    try {
      dispatch(loadFooterProgressStyles(footerStyles));
    } catch (error) {}
  };
}

export function resetFlow() {
  return dispatch => {
    try {
      dispatch(resetFlowState());
    } catch (error) {}
  };
}

export function getFlowById(flowID) {
  return async dispatch => {
    try {
      const flow = await loadFlowById(flowID);
      dispatch(loadFlowDataById(flow));
    } catch (error) {
      dispatch(loadFlowDataFailure(error.message));
    }
  };
}
