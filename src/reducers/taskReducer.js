import { GET_TASK } from '../actions/types';

const initialState = {
  tasks: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TASK:
      return {
        ...state,
        tasks: action.payload
      };
    //   case ADD_PROJECT:
    //     return {
    //       ...state,
    //       projects: state.projects.concat(action.payload)
    //     };
    //   case DELETE_PROJECT:
    //     return {
    //       ...state,
    //       projects: state.projects.filter(
    //         project => project.id !== action.payload
    //       )
    //     };
    default:
      return state;
  }
}
