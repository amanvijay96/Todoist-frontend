import axios from 'axios';
import { GET_PROJECT, ADD_PROJECT } from './types';

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
export const getAllProject = () => {
  return async function(dispatch) {
    console.log('hi');
    let data = await axios({
      method: 'get',
      url: 'https://todoistrest.herokuapp.com/rest/v1/projects',
      responseType: 'stream'
    });
    console.log(data, 'hello');
    dispatch({
      type: GET_PROJECT,
      payload: data.data
    });
    // .then(data => {
    //   console.log(data, 'aaaaaaaaaaaaaaa');
    //   dispatch({
    //     type: GET_PROJECT,
    //     payload: data
    //   });
    // })
    // .catch(err => console.log(err));
  };
};

export const addProject = projectName => {
  return async function(dispatch) {
    console.log(projectName);
    // console.log(typeof projectName);
    axios({
      method: 'post',
      url: `https://todoistrest.herokuapp.com/rest/v1/projects`,
      data: {
        name: projectName
      }
    }).then(data => {
      dispatch({
        type: ADD_PROJECT,
        payload: data.data
      });
    });
  };
};

// "https://api.todoist.com/rest/v1/projects" \
//     -X POST \
//     --data '{"name": "Movies to watch"}' \
//     -H "Content-Type: application/json" \
//     -H "X-Request-Id: $(uuidgen)" \
