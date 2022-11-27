import { all } from "redux-saga/effects";
import { historySaga } from "../app/views/onboard/mkolay/mkhistory/store/saga";

export function* rootSaga() {
  yield all([historySaga()]);
}
