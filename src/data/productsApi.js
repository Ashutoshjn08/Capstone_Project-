import axios from "axios";

var ID = function () {
  return "_" + Math.random().toString(36).substr(2, 9);
};

export default class productsApi {
  static getProducts = () => {
    return axios
      .get("http://localhost:3001/products")
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

  static addProduct = (product) => {
    product.id = ID;
    return axios
      .post("http://localhost:3001/products", product)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

  static deleteProduct(id) {
    return axios.delete("http://localhost:3001/products/" + id);
  }

  static updateProduct = (product, id) => {
    return axios
      .patch("http://localhost:3001/products/" + id, {
        price: product.price,
        quantity: product.quantity,
        category: product.category,
        image: product.image,
      })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

  static incViewCount = (viewCount, id) => {
    return axios
      .patch("http://localhost:3001/products/" + id, { view: viewCount + 1 })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };


}
