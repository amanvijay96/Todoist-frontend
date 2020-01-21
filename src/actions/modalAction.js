import { OPEN_MODAL, CLOSE_MODAL } from './types';
// import axios from 'axios';
// const uuid = require('uuid/v4');

// const tokenKey = 'dd9b1d3102d993f55e6daedea19eb38aee623ae2';

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

// export const addTask = taskName => {
//   return async function(dispatch) {
//     console.log(taskName);
//     axios({
//       method: 'post',
//       url: '',
//       headers: {
//         'Content-Type': 'application/json',
//         'X-Request-Id': `${uuid()}`,
//         Authorization: `Bearer ${tokenKey}`
//       },
//       data: {
//         name: taskName
//       }
//     })
//       .then(data => {
//         console.log(data);
//         // return {
//         //   type: ADD_TASK,
//         //   payload: data,
//         //   input: addTaskInput
//         // };
//       })
//       .catch(err => console.log(err.message));
//     function dispatchPost() {
//       dispatch({
//         type: 'ADD_TASK'
//       });
//     }
//     return dispatchPost();
//   };
// };

// export const addTask = taskName => {
//   return async dispatch => {
//     dispatch(addTaskAsync(taskName));
//   };
// };
