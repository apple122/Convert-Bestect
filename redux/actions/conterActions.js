// Action type
export const SET_BLOGDETAIL = 'SET_BLOGDETAIL';
// Action Create
export const actBlogdetail = (payload) => (dispatch) =>
  dispatch({
    type: SET_BLOGDETAIL,
    payload: payload,
  });

