import axios from 'axios';
import { GET_COMMENTS, ADD_COMMENT, DELETE_COMMENT } from './types';

export const getAllSubTask = taskId => {
  // console.log(projectId)
  return function(dispatch) {
    axios({
      method: 'get',
      url: `https://todoistrest.herokuapp.com/rest/v1/comments/${taskId}`
    }).then(data => {
      dispatch({
        type: GET_COMMENTS,
        payload: data.data.comment
      });
    });
  };
};

export const addSubTask = (comment, taskId, date, priority) => {
  return async function(dispatch) {
    axios({
      method: 'post',
      url: `https://todoistrest.herokuapp.com/rest/v1/comment`,
      data: {
        comment: comment,
        projectId: taskId
        // priority: priority,
        // due: date
        // projectId: 1
      }
    }).then(data => {
      dispatch({
        type: ADD_COMMENT,
        payload: data.comment
      });
    });
  };
};
export const deleteSubTask = id => {
  return async function(dispatch) {
    axios({
      method: 'delete',
      url: `https://todoistrest.herokuapp.com/rest/v1//${id}`
    }).then(() => {
      dispatch({
        type: DELETE_COMMENT,
        payload: id
      });
    });
  };
};
