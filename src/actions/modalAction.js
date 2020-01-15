import { OPEN_MODAL, CLOSE_MODAL } from './types';

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
  }
}