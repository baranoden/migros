import { combineReducers } from "@reduxjs/toolkit";
import historySlice from "../app/views/onboard/mkolay/mkhistory/store/slice";

const rootReducer = combineReducers({
  historySlice,
});
export default rootReducer;
