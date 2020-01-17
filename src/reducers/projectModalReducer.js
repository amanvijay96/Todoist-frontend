import { GET_PROJECT, ADD_PROJECT } from '../actions/types';

const initialState = {
  projects: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECT:
      return {
        ...state,
        projects: action.payload
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: state.projects.concat(action.payload)
      };
    default:
      return state;
  }
}
