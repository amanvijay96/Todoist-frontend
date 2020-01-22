import {
  GET_TASK,
  ADD_TASK,
  DELETE_TASK,
  GET_SECTION,
  ADD_SECTION,
  DELETE_SECTION
} from '../actions/types';
// import { act } from 'react-dom/test-utils';

const initialState = {
  tasks: [],
  sections: []
  //   sections:[]
};

export default function(state = initialState, action) {
  // console.log(state, action);
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
      //   console.log(action.payload.section_id, 'oooooooooooooiiiiiii');
      if (action.payload.section_id === 0) {
        return {
          ...state,
          tasks: state.tasks.concat(action.payload)
        };
      } else {
        // console.log(state.sections, ',,,,,,');
        return {
          ...state,
          sections: state.sections.map(section => {
            let updatedSection = { ...section };
            if (section.id === action.payload.section_id) {
              updatedSection.task = updatedSection.task.concat([
                action.payload
              ]);
            }
            return updatedSection;
          })
          // ...state,
        };
      }
    case DELETE_TASK:
      var isTask = state.tasks.reduce((isTask, task) => {
        if (task.id === action.payload) {
          isTask = true;
        }
        return isTask;
      }, false);
      console.log(state.tasks, 'mm');
      if (isTask) {
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.payload)
        };
      } else {
        return {
          ...state,
          sections: state.sections.map(section => {
            let updatedSection = { ...section };
            console.log(updatedSection.task, 'lll');
            updatedSection.task = updatedSection.task.filter(
              eachTask => eachTask.id !== action.payload
            );
            return updatedSection;
          })
        };

        // var update = state.sections.slice(0);
        // update.map(section => console.log(section, 'kk'));
      }
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
