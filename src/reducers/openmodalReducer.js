import { OPEN_MODAL, CLOSE_MODAL } from '../actions/types';

export default function openmodalReducer(state = false, action) {
  switch (action.type) {
    case OPEN_MODAL: {
      return {
        visible: true
      };
    }
    case CLOSE_MODAL: {
      return {
        visible: false
      };
    }
    default:
      return state;
  }
}
