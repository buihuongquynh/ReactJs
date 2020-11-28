import { call, put, takeLatest } from "redux-saga/effects";
import { Actions, getDataUserSuccess } from "../actions";
import UserService from "../../service/user.services";

function* fetchListUser() {
  try {
    const response = yield call(UserService.listUser);
    yield put(getDataUserSuccess(response));
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}
function* handlerDeleteUser(action) {
  try {
    yield call(UserService.deleteUser, action.payload);
    const response = yield call(UserService.listUser);
    yield put(getDataUserSuccess(response));
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}
function* handlerEditUser(action) {
  try {
    yield call(UserService.editUser, action.payload);
    console.log("action.payload ", action.payload);
    const response = yield call(UserService.listUser);
    yield put(getDataUserSuccess(response));
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

function* handlerAddUser(action) {
  try {
    yield call(UserService.addUser, action.payload);
    console.log("action.payload ", action.payload);
    const response = yield call(UserService.listUser);
    yield put(getDataUserSuccess(response));
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

export default function* userSaga() {
  // yield takeLatest(Actions.GET_DATA_CANDIDATE, fetchAllCandidate);
  yield takeLatest(Actions.GET_USER, fetchListUser);
  yield takeLatest(Actions.ADD_USER, handlerAddUser);
  yield takeLatest(Actions.DELELE_USER, handlerDeleteUser);
  yield takeLatest(Actions.EDIT_USER, handlerEditUser);
}
