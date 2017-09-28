import * as types from './actionType';
import { loadUserProfile } from '../services/dashboardViewApi';
import { loadFlowData } from '../services/dashboardViewApi';
import { deleteFlowData } from '../services/dashboardViewApi';

export function loadUserName(loginName) {
  return { type: types.LOGIN_USER_NAME, loginName };
}

export function loadFlowDataList(flowList) {
  return { type: types.FETCH_FLOW_LIST_REQUEST, flowList };
}

export function highlightNewItem(isNewItem) {
  return { type: types.IS_NEW_ITEM_ADDED, isNewItem };
}

export function loadUserDetails(profileId) {
  return async dispatch => {
    try {
      const response = await loadUserProfile(profileId);
      dispatch(loadUserName(response.firstName));
    } catch (error) {
      dispatch(loadUserName('Guest'));
    }
  };
}

export function loadFlowDetails() {
  return async dispatch => {
    try {
      const experienceFlowData = await loadFlowData();
      dispatch(loadFlowDataList(experienceFlowData));
    } catch (error) {
      dispatch(loadFlowDataList([]));
    }
  };
}

export function deleteFlowDetails(flowID) {
  deleteFlowData(flowID);
}
