import React, { Component } from "react";
import Product from "./Product";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  //Common function after checking value from search bar

  getProductsAfterSearch = (product) => {
    let classString;
    const remainder = product.id < 7 ? product.id : product.id % 7;
    switch (remainder) {
      case 0:
        classString = "primary";
        break;
      case 1:
        classString = "secondary";
        break;
      case 2:
        classString = "success";
        break;
      case 3:
        classString = "danger";
        break;
      case 4:
        classString = "warning";
        break;
      case 5:
        classString = "info";
        break;
      case 6:
        classString = "light";
        break;
      default:
        classString = "dark";
    }
    return classString;
  };

  render() {
    const productList = this.props.products.map((product) => {
      if (
        this.props.searchValue &&
        (product.category.toLowerCase().includes(this.props.searchValue) ||
          product.title.toLowerCase().includes(this.props.searchValue) ||
          product.manufacturer.toLowerCase().includes(this.props.searchValue))
      ) {
        return (
          <li
            key={product.id}
            className={`list-group-item list-group-item-${this.getProductsAfterSearch(
              product
            )}`}
          >
            <Product {...product} {...this.props} />
          </li>
        );
      } else if (this.props.searchValue == "") {
        return (
          <li
            key={product.id}
            className={`list-group-item list-group-item-${this.getProductsAfterSearch(
              product
            )}`}
          >
            <Product {...product} {...this.props} />
          </li>
        );
      }
    });
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="list-head-names col-sm-4">
            <span id = "head-names" className="prod-items">Title</span>
            </div>
            <div className="list-head-names col-sm-1">
              <span id = "head-names" className="prod-items">Price</span>
            </div>
            <div className="list-head-names col-sm-1">
              <span id = "head-names" className="prod-items">Quantity</span>
            </div>
            <div className="list-head-names col-sm-2">
              <span id = "head-names" className="prod-items">Category</span>
            </div>
            <div className="list-head-names col-sm-1">
              <span id = "head-names" className="prod-items">Brand</span>
            </div>
            <div className="list-head-names col-sm-3">
             
                <a
                  href="/addproduct"
                  style={{
                    width: "170px"
                  }}
                  className="btn btn-primary"
                >
                  <span >Add Product</span>
                </a>
                <br />
              
            </div>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <ul className="list-group">{productList}</ul>
        </div>
      </div>
      // <div>
      // <div style={{ height: "60px" }}>
      //   <a
      //     href="/addproduct"
      //     style={{
      //       width: "150px",
      //       margin: "10Px 54px 10px 0",
      //       float: "right",
      //     }}
      //     className="btn btn-primary"
      //   >
      //     <span>Add Product</span>
      //   </a>
      //   <br />
      // </div>

      //   <div style={{ width: "100%" }}>
      //     <ul className="list-group">{productList}</ul>
      //   </div>
      // </div>
    );
  }
}
