import { combineReducers } from 'redux';
import * as types from './types';
const blogDetails = (state = {}, { type, payload }) => {
  switch (type) {
    case types.SET_BLOGDETAIL:
      return {
        blogdetails: payload.blogdetails
      };
    default:
      return state;
  }
};
const reducers = {
  blogDetail: blogDetails,
};
export default combineReducers(reducers);
