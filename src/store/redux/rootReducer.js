import { combineReducers } from 'redux';
import { api } from './services/api';

import dashboardSlice from './features/dashboard/dashboardSlice';
import authSlice from './features/auth/authSlice';
import userDataSlice from './features/userData/userDataSlice';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authSlice,
  dashboard: dashboardSlice,
  userData: userDataSlice,
});

export default rootReducer;
