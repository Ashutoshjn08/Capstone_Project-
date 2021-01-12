import axios from 'axios';

var ID = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

export default class productsApi {
    static getProducts = () => {
        return axios.get ('http://localhost:3001/products')
        .then(res => res.data)
        .catch(err => console.log(err))
    }

    static addProduct = product => {
        product.id = ID;
        return axios.post ('http://localhost:3001/products', product)
        .then(res => res.data)
        .catch(err => console.log(err))
    }

    static deleteProduct (id) {
        debugger;
        return axios.delete ('http://localhost:3001/products/' + id)
    }

    
}


 