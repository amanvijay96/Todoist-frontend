import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import heroSectionReducer from './heroSectionReducer';
import projectModalReducer from './projectModalReducer';
import taskReducer from './taskReducer';
import commentReducer from './commentReducer'

export default combineReducers({
  heroSectionReducer,
  modalReducer,
  projectModalReducer,
  taskReducer,
  commentReducer
});
