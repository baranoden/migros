import reducers from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./rootSaga";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: reducers,
  middleware: [saga],
});
saga.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
