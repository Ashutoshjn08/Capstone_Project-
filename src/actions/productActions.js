import productsApi from "../data/productsApi";
import * as types from "./actionTypes";

function getAllProductsSuccess(products) {
  return { type: types.GET_PRODUCTS, products };
}

function addProductSuccess(product) {
  // debugger;
  return {
    type: types.ADD_PRODUCT,
    product,
  };
}

function deleteProductSuccess(id){
  // debugger;
  console.log(id)
    return {
        type : types.DELETE_PRODUCT,
        id
    }
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
  // debugger;
  return function (dispatch) {
    return productsApi
      .addProduct(product)
      .then((product) => dispatch(addProductSuccess(product)))
      .catch((err) => console.log(err));
  };
}

export function deleteProduct(id) {
  debugger;
  return function (dispatch) {
    debugger;
    return productsApi
      .deleteProduct(id)
      .then((id) => dispatch(deleteProductSuccess(id)))
      .catch((err) => console.log(err));
  };
}

// export function deleteProduct(id){ 
//   // debugger;   
//      return function (dispatch){    
//        console.log("Test");
//       //  debugger;   
//         return productsApi
//         .deleteProduct(id)
//         .then((id) => { debugger; dispatch(deleteProductSuccess(id))})
//         .catch((err) => {debugger; console.log(err)});
//     }
// }
