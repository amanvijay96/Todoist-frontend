import {
  GET_TASK,
  ADD_TASK,
  DELETE_TASK,
  GET_SECTION,
  ADD_SECTION,
  DELETE_SECTION
} from '../actions/types';

const initialState = {
  tasks: [],
  sections: []
  //   sections:[]
};

export default function(state = initialState, action) {
  console.log(state, action);
  switch (action.type) {
    case GET_TASK:
      return {
        ...state,
        tasks: action.payload
      };
    case GET_SECTION:
      return {
        ...state,
        sections: action.payload
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: state.tasks.concat(action.payload)
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    case ADD_SECTION:
      return {
        ...state,
        sections: state.sections.concat(action.payload)
      };
    case DELETE_SECTION:
      return {
        ...state,
        sections: state.sections.filter(
          section => section.id !== action.payload
        )
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
