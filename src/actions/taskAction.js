import axios from 'axios';
import { GET_TASK, ADD_TASK, DELETE_TASK } from './types';

export const getAllTask = () => {
  return function(dispatch) {
    console.log('hi');
    axios({
      method: 'get',
      url: 'https://todoistrest.herokuapp.com/rest/v1/tasks',
      responseType: 'stream'
    }).then(data => {
      console.log(data.data, 'aaaaaaaaaa');
      dispatch({
        type: GET_TASK,
        payload: data.data
      });
    });
  };
};

export const addTask = taskName => {
  return async function(dispatch) {
    console.log(taskName, 'mmmmmmaaaaaa');
    // console.log(typeof projectName);
    axios({
      method: 'post',
      url: `https://todoistrest.herokuapp.com/rest/v1/tasks`,
      data: {
        content: taskName
      }
    }).then(data => {
      console.log(data, 'ppppppppppppp');
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
