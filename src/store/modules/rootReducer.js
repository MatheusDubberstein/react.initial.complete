import { combineReducers } from 'redux';

import auth from './auth/duck';
import configurations from './configurations/duck';

export default combineReducers({
  auth,
  configurations,
});
