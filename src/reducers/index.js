import { combineReducers } from 'redux';
import openmodalReducer from './openmodalReducer';
import heroSectionReducer from './heroSectionReducer';
import projectModalReducer from './projectModalReducer';

export default combineReducers({
  heroSectionReducer,
  openmodalReducer,
  projectModalReducer
});
