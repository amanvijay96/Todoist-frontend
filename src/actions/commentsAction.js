import axios from 'axios';
import { GET_COMMENTS, ADD_COMMENT, DELETE_COMMENT } from './types';

export const getAllComments = projectId => {
  // console.log(projectId)
  return function(dispatch) {
    axios({
      method: 'get',
      url: `https://todoistrest.herokuapp.com/rest/v1/comments/${projectId}`
    }).then(data => {
      console.log(data);
      dispatch({
        type: GET_COMMENTS,
        payload: data.data.comment
      });
    });
  };
};

export const addComment = (comment, taskId) => {
  return async function(dispatch) {
    axios({
      method: 'post',
      url: `https://todoistrest.herokuapp.com/rest/v1/comment`,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      data: {
        content: comment,
        project_id: taskId
      }
    }).then(data => {
      dispatch({
        type: ADD_COMMENT,
        payload: data.data.comment
      });
    });
  };
};
export const addProjectComment = (comment, projectId) => {
  return async function(dispatch) {
    axios({
      method: 'post',
      url: `https://todoistrest.herokuapp.com/rest/v1/comment`,
      data: {
        comment: comment,
        project_id: projectId
      }
    }).then(data => {
      dispatch({
        type: ADD_COMMENT,
        payload: data.data.comment
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
