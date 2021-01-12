# Capstone_Project-
export function addProduct(product) {   // debugger;   return function (dispatch) {     return productsApi       .addProduct(product)       .then((product) => dispatch(addProductSuccess(product)))       .catch((err) => console.log(err));   }; }
