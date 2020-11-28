import { Actions } from "../actions";

const initialState = {
  data: null,
};

const getDataUserSuccess = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_USER_SUCCESS: {
      const { payload: newsPaper } = action;
      return {
        ...state,
        data: newsPaper,
      };
    }
    default:
      return state;
  }
};

export default getDataUserSuccess;
