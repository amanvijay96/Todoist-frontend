import { GET_COMMENTS, ADD_COMMENT, DELETE_COMMENT } from '../actions/types';

const initialState = {
  comments: []
  //   sections:[]
};

export default function(state = initialState, action) {
  // console.log(state, action);
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload
      };

    case ADD_COMMENT:
      return {
        ...state,
        comments: state.comments.concat(action.payload)
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== action.payload)
      };

    default:
      return state;
  }
}
