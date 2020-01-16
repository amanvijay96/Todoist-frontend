import { OPEN_MODAL, CLOSE_MODAL, ADD_TASK } from './types';
import axios from 'axios';

const tokenKey = '522dc7a2725e66e850507d3feff85af8d62a8e14';

export const modalOpen = () => {
  return {
    type: OPEN_MODAL,
    payload: true
  };
};

export const modalClose = () => {
  return {
    type: CLOSE_MODAL,
    payload: false
  };
};

export const addTask = (addTaskInput, schedule) => {
  axios
    .post(`https://api.todoist.com/rest/v1/tasks`, {
      headers: {
        Authorization: `Bearer ${tokenKey}`,
        'Content-Type': 'application/json'
      },
      data: {
        content: addTaskInput,
        due_string: schedule,
        due_lang: 'en',
        priority: 4
      }
    })
    .then(res => res.json())
    .then(data => {
      return {
        type: ADD_TASK,
        payload: data,
        input: addTaskInput
      };
    });
};

