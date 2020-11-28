import getDataUserSuccess from "./user";
import { combineReducers } from "redux";
// Combine reducer
const rootReducer = combineReducers({
  allUser: getDataUserSuccess,

});

export default rootReducer;
