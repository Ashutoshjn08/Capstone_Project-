import productsApi from "../data/productsApi";
import * as types from "./actionTypes";

function getAllProductsSuccess(products) {
  return { type: types.GET_PRODUCTS, products };
}

function addProductSuccess(product) {
  return {
    type: types.ADD_PRODUCT,
    product,
  };
}

function deleteProductSuccess(id) {
  console.log(id);
  return {
    type: types.DELETE_PRODUCT,
    id,
  };
}

function updateProductSuccess(product) {
  return {
    type: types.UPDATE_PRODUCT,
    product,
  };
}

function incViewCountSuccess(product) {
  return {
    type: types.INC_VIEW,
    product,
  };
}

export function getAllProducts() {
  return function (dispatch) {
    return productsApi
      .getProducts()
      .then((products) => dispatch(getAllProductsSuccess(products)))
      .catch((err) => console.log(err));
  };
}

export function addProduct(product) {
  return function (dispatch) {
    return productsApi
      .addProduct(product)
      .then((product) => dispatch(addProductSuccess(product)))
      .catch((err) => console.log(err));
  };
}

export function deleteProduct(id) {
  return function (dispatch) {
    return productsApi
      .deleteProduct(id)
      .then(() => dispatch(deleteProductSuccess(id)))
      .catch((err) => console.log(err));
  };
}

export function updateProduct(product, id) {
  return function (dispatch) {
    return productsApi
      .updateProduct(product, id)
      .then((product, id) => dispatch(updateProductSuccess(product)))
      .catch((err) => console.log(err));
  };
}

export function incViewCount(viewCount, id) {
  return function (dispatch) {
    return productsApi
      .incViewCount(viewCount, id)
      .then((product) => dispatch(incViewCountSuccess(product)))
      .catch((err) => console.log(err));
  };
}




