import axios from 'axios';
import { GET_COMMENTS, ADD_COMMENT, DELETE_COMMENT } from './types';

export const getAllComments = projectId => {
  // console.log(projectId)
  return function(dispatch) {
    axios({
      method: 'get',
      url: `https://todoistrest.herokuapp.com/rest/v1/comments/${projectId}`
    }).then(data => {
      console.log(data.data, 'aman');
      // data.data.comments = [];
      dispatch({
        type: GET_COMMENTS,
        payload: data.data
      });
    });
  };
};

export const addTaskComment = (comment, taskId) => {
  return async function(dispatch) {
    axios({
      method: 'post',
      url: `https://todoistrest.herokuapp.com/rest/v1/comments/${taskId}`,
      // headers: {
      //   'Content-Type': 'application/json',
      //   'Access-Control-Allow-Origin': '*'
      // },
      data: {
        content: comment,
        task_id: taskId
      }
    }).then(data => {
      dispatch({
        type: ADD_COMMENT,
        payload: data.data
      });
    });
  };
};
export const addProjectComment = (comment, projectId) => {
  console.log(comment, projectId, 'kkkk');
  return async function(dispatch) {
    axios({
      method: 'post',
      url: `https://todoistrest.herokuapp.com/rest/v1/comments`,
      data: {
        content: comment,
        project_id: projectId
      }
    }).then(data => {
      console.log(data, 'lzzzzzaa');
      dispatch({
        type: ADD_COMMENT,
        payload: data.data
      });
    });
  };
};
export const deleteComment = id => {
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
