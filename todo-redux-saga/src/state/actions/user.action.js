
import Actions from "./action.type";

export const getDataUser = () => {
  return {
    type: Actions.GET_USER,
  };
};

export const getDataUserSuccess = (payload) => {
  return {
    type: Actions.GET_USER_SUCCESS,
    payload,
  };
};

export const deleteUser = (payload) => {
  return {
    type: Actions.DELELE_USER,
    payload,
  };
};

export const editUser = (payload) => {
  return {
    type: Actions.EDIT_USER,
    payload,
  };
};

export const addUser = (payload) => {
  return {
    type: Actions.ADD_USER,
    payload,
  };
};
