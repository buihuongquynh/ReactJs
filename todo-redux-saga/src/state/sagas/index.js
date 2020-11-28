import { all } from "redux-saga/effects";
import UserSaga from "./userSaga";

export default function* rootSaga() {
  yield all([UserSaga()]);
}
