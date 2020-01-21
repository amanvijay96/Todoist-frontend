import axios from 'axios';
import { GET_TASK, ADD_TASK, DELETE_TASK, GET_SECTION } from './types';

export const getAllTask = projectId => {
  return function(dispatch) {
    console.log('hi');
    axios({
      method: 'get',
      url: `https://todoistrest.herokuapp.com/rest/v1/projects/${projectId}`
      //   responseType: 'stream'
    }).then(data => {
      console.log(data.data, 'aaaaaaaaaa');
      dispatch({
        type: GET_TASK,
        payload: data.data.task
        // type1: GET_SECTION,
        // payload1: data.data.section
      });
      dispatch({
        type: GET_SECTION,
        payload: data.data.section
      });
    });
  };
};

export const addTask = (taskName, projectId) => {
  return async function(dispatch) {
    // console.log(taskName, 'mmmmmmaaaaaa');
    // console.log(typeof projectName);
    axios({
      method: 'post',
      url: `https://todoistrest.herokuapp.com/rest/v1/tasks`,
      data: {
        content: taskName,
        projectId: projectId
        // projectId: 1
      }
    }).then(data => {
      // console.log(data, 'ppppppppppppp');
      dispatch({
        type: ADD_TASK,
        payload: data.data
      });
    });
  };
};
export const deleteTask = id => {
  return async function(dispatch) {
    // console.log(projectName);
    // console.log(typeof projectName);
    axios({
      method: 'delete',
      url: `https://todoistrest.herokuapp.com/rest/v1/tasks/${id}`
    }).then(() => {
      dispatch({
        type: DELETE_TASK,
        payload: id
      });
    });
  };
};
