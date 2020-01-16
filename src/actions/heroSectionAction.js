import { INBOX } from './types';
export const changeName = name => {
  return {
    type: INBOX,
    payload: name
  };
};
