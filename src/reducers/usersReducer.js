import * as types from "../actions/actionTypes";

function usersReducer(state = [], action) {
  switch (action.type) {
    case types.GET_USERS:
      return action.users;

    case types.ADD_USER:
      debugger;
      return [...state, action.user];
    default:
      return state;
  }
}

export default usersReducer;
