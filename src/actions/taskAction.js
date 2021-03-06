import axios from 'axios';
import {
  GET_TASK,
  ADD_TASK,
  DELETE_TASK,
  GET_SECTION,
  ADD_SECTION,
  DELETE_SECTION
} from './types';

export const getAllTask = projectId => {
  // console.log(projectId)
  return function(dispatch) {
    axios({
      method: 'get',
      url: `https://todoistrest.herokuapp.com/rest/v1/projects/${projectId}`
    }).then(data => {
      dispatch({
        type: GET_TASK,
        payload: data.data.task
      });
      dispatch({
        type: GET_SECTION,
        payload: data.data.section
      });
    });
  };
};

export const addTask = (taskName, projectId, sectionId, date, priority) => {
  console.log(taskName, projectId, sectionId);
  return async function(dispatch) {
    axios({
      method: 'post',
      url: `https://todoistrest.herokuapp.com/rest/v1/tasks`,
      data: {
        content: taskName,
        project_id: projectId,
        section_id: sectionId,
        // projectId: 1
        due: {
          date: date,
          datetime: null,
          string: null,
          timezone: 'India'
        },
        priority: priority
      }
    }).then(data => {
      //   console.log(data, 'opiu');
      dispatch({
        type: ADD_TASK,
        payload: data.data
      });
    });
  };
};
export const deleteTask = id => {
  return async function(dispatch) {
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

export const addSection = (sectionName, projectId) => {
  return async function(dispatch) {
    console.log(sectionName, projectId, 'mmmmmmaaaaaa');
    // console.log(typeof projectName);
    axios({
      method: 'post',
      url: `https://todoistrest.herokuapp.com/rest/v1/sections`,
      data: {
        name: sectionName,
        project_id: projectId
        // projectId: 1
      }
    }).then(data => {
      console.log(data.data, 'ppppppppppppp');
      data.data.task = [];
      dispatch({
        type: ADD_SECTION,
        payload: data.data
      });
    });
  };
};
export const deleteSection = id => {
  return async function(dispatch) {
    // console.log(projectName);
    // console.log(typeof projectName);
    axios({
      method: 'delete',
      url: `https://todoistrest.herokuapp.com/rest/v1/sections/${id}`
    }).then(() => {
      dispatch({
        type: DELETE_SECTION,
        payload: id
      });
    });
  };
};
