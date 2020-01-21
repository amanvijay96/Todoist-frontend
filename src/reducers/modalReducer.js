import { OPEN_MODAL, CLOSE_MODAL } from '../actions/types';

const initialState = {
  visible: false,
  taskData: []
};

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL: {
      return {
        visible: !state.visible
      };
    }
    case CLOSE_MODAL: {
      return {
        visible: !state.visible
      };
    }
    default:
      return state;
  }
}
