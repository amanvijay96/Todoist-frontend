import axios from 'axios';
import { GET_PROJECT, ADD_PROJECT, DELETE_PROJECT } from './types';

export const getAllProject = () => {
  return async function(dispatch) {
    console.log('hi');
    let data = await axios({
      method: 'get',
      url: 'https://todoistrest.herokuapp.com/rest/v1/projects',
      responseType: 'stream'
    });
    dispatch({
      type: GET_PROJECT,
      payload: data.data
    });
  };
};

export const addProject = projectName => {
  return async function(dispatch) {
    console.log(projectName, 'zzzzzzzzz');
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
export const deleteProject = id => {
  return async function(dispatch) {
    // console.log(projectName);
    // console.log(typeof projectName);
    axios({
      method: 'delete',
      url: `https://todoistrest.herokuapp.com/rest/v1/projects/${id}`
    }).then(() => {
      dispatch({
        type: DELETE_PROJECT,
        payload: id
      });
    });
  };
};
