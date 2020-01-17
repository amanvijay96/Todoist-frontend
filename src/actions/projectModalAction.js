import axios from 'axios';

// import { OPEN_PROJECT_MODAL, CLOSE_PROJECT_MODAL } from './types';

// export const projectModalOpen = () => {
//   return {
//     type: OPEN_PROJECT_MODAL,
//     payload: true
//   };
// };

// export const projectModalClose = () => {
//   return {
//     type: CLOSE_PROJECT_MODAL,
//     payload: false
//   };
// };
export const addProject = projectName => {
  return async function(dispatch) {
    console.log(projectName);
    console.log(typeof projectName);
    axios({
      method: 'post',
      url: `https://todoistrest.herokuapp.com/rest/v1/projects`,
      data: {
        name: projectName
      }
    })
      .then(data => data.json())
      .then(data => console.log(data));
  };
};

// "https://api.todoist.com/rest/v1/projects" \
//     -X POST \
//     --data '{"name": "Movies to watch"}' \
//     -H "Content-Type: application/json" \
//     -H "X-Request-Id: $(uuidgen)" \
