import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import heroSectionReducer from './heroSectionReducer';

export default combineReducers({
  heroSectionReducer,
  modalReducer
});
