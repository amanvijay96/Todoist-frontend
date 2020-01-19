import axios from 'axios';
import { GET_TASK } from './types';

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
