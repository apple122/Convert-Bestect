import { SET_BLOGDETAIL } from "../actions/conterActions";
const counterReducter = (state = {}, action) => {
  switch (action.type) {
    case SET_BLOGDETAIL:
      return {
        blogdetail: action.payload
      };
    default:
      return {
        ...state,
      };
  }
};

export default counterReducter;
