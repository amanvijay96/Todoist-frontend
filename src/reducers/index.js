import { combineReducers } from 'redux';
import openmodalReducer from './openmodalReducer';
import heroSectionReducer from './heroSectionReducer';

export default combineReducers({
  heroSectionReducer,
  openmodalReducer
});
