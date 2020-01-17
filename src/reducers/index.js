import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import heroSectionReducer from './heroSectionReducer';
import projectModalReducer from './projectModalReducer';

export default combineReducers({
  heroSectionReducer,
  modalReducer,
  projectModalReducer
});
