import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import loginReducer from './reducers/loginReducer';
import dashboardReducer from './reducers/dashboardReducer';
import createDashboardReducer from './reducers/createDashboardReducer';
import triggerReducer from './reducers/triggerReducer';
const root = combineReducers({
  router: routerReducer,
  login: loginReducer,
  dashboard: dashboardReducer,
  createdashboard: createDashboardReducer,
  trigger: triggerReducer,
});

export default root;
