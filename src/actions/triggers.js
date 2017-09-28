import * as types from './actionType';
import { loadTriggerList } from '../services/triggersApi';

export function loadTriggerDataList(triggerList) {
  return { type: types.FETCH_TRIGGER_LIST_REQUEST, triggerList };
}

export function loadTriggerDetails() {
  return async dispatch => {
    try {
      const response = await loadTriggerList();
      dispatch(loadTriggerDataList(response));
    } catch (error) {
      dispatch(loadTriggerDataList([]));
    }
  };
}
