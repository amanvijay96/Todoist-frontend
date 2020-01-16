import { INBOX } from '../actions/types';

const initialState = {
  name: 'today'
};
const heroSectionReducer = (state = initialState, action) => {
  //   console.log(action);
  switch (action.type) {
    case INBOX:
      //   return action.payload;
      //   console.log({ ...initialState, name: action.payload }, 'inboxreducer');
      return { ...initialState, name: action.payload };
    default:
      return state;
  }
};

export default heroSectionReducer;
