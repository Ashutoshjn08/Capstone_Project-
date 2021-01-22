import * as types from "./actionTypes";
import usersApi from "../data/usersApi";

function getAllUsersSuccess(users) {
  return {
    type: types.GET_USERS,
    users,
  };
}

export function getAllUsers() {
  return function (dispatch) {
    return usersApi
      .getAllUsers()
      .then((users) => dispatch(getAllUsersSuccess(users)))
      .catch((err) => console.log(err));
  };
}

function addUserSuccess (user){
  debugger;
  return{
    type : types.ADD_USER,
    user
  }
}
export function addUser(user) {
  return function (dispatch) {
    debugger;
    return usersApi
      .addUser(user)
      .then(() => dispatch(addUserSuccess(user)))
      .catch((err) => console.log(err));
  };
}
