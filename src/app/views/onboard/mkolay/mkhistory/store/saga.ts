import axios, { AxiosResponse } from "axios";
import { takeEvery, put, all, call } from "redux-saga/effects";
import { getProducts } from "./slice";
import { historyTypes } from "./type";

function* getProductsHandler() {
  try {
    const response: AxiosResponse = yield call(() =>
      axios.get("https://dummyjson.com/products?limit=20")
    );
    yield put(getProducts(response.data.products));
  } catch (error) {}
}

export function* historySaga() {
  yield all([takeEvery(historyTypes.GET_PRODUCTS, getProductsHandler)]);
}
